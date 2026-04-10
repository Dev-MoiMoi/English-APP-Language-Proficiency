import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, ChevronLeft, CheckCircle, XCircle, PartyPopper, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { READING_DATA } from '../data/readingData';
import { getReadingFeedback } from '../services/geminiService';
import AIFeedbackCard from '../components/AIFeedbackCard';
import EmailResultCard from '../components/EmailResultCard';
import PushButton from '../components/PushButton';

const VALID_LEVELS = ['A1','A2','B1','B2','C1','C2'];

export default function ReadingModule() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const urlLevel = params.get('level');

  const [level, setLevel] = useState(() =>
    VALID_LEVELS.includes(urlLevel) ? urlLevel : null
  );
  const [storyIdx, setStoryIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [aiFeedback, setAiFeedback] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');

  // If URL changes (e.g. user navigates back then picks again), sync level
  useEffect(() => {
    if (VALID_LEVELS.includes(urlLevel)) {
      setLevel(urlLevel);
      setStoryIdx(0);
      setAnswers({});
      setSubmitted(false);
      setAiFeedback(''); setAiLoading(false); setAiError('');
    }
  }, [urlLevel]);

  const data = level ? READING_DATA[level] : null;
  const story = data ? data.stories[storyIdx] : null;

  const score = story ? story.answerKey.reduce((acc, correct, i) =>
    answers[i] === correct ? acc + 1 : acc, 0) : 0;

  const handleAnswer = (qi, ai) => {
    if (!submitted) setAnswers(prev => ({ ...prev, [qi]: ai }));
  };

  const handleSubmit = async () => {
    if (Object.keys(answers).length < story.questions.length) {
      alert('Please answer all questions before submitting.');
      return;
    }
    setSubmitted(true);
    setAiLoading(true);
    setAiFeedback('');
    setAiError('');
    const qaSummary = story.questions.map((item, qi) => {
      const studentIdx = answers[qi];
      const correctIdx = story.answerKey[qi];
      const studentAns = studentIdx !== undefined ? item.options[studentIdx] : 'Not answered';
      const correctAns = item.options[correctIdx];
      const isCorrect = studentIdx === correctIdx;
      return `Q${qi+1}: ${item.q}\nStudent answered: ${studentAns} (${isCorrect ? 'Correct' : 'Wrong'})\nCorrect answer: ${correctAns}`;
    }).join('\n\n');
    try {
      const feedback = await getReadingFeedback(level, score, story.questions.length, qaSummary);
      setAiFeedback(feedback);
    } catch (err) {
      setAiError(err.message || 'AI feedback could not be loaded. Your score has been recorded.');
    } finally {
      setAiLoading(false);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setAiFeedback(''); setAiError('');
  };

  if (!level) {
    // No level in URL — send user back home to pick via the modal
    navigate('/', { replace: true });
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen" style={{ background:'var(--bg-secondary)', paddingTop:'80px' }}>
        <div className="container" style={{ padding:'40px 20px', maxWidth:900 }}>
          {/* Header */}
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24 }}>
            <button className="btn-ghost" onClick={() => navigate('/')} style={{ display:'flex', alignItems:'center', gap:6 }}>
              <ChevronLeft size={16} /> Back to Home
            </button>
            <span style={{ color:'var(--text-muted)' }}>/</span>
            <span className="skill-badge skill-badge-reading">{data.levelLabel}</span>
          </div>

          {/* Story Selector */}
          <div style={{ display:'flex', gap:12, marginBottom:24, flexWrap:'wrap' }}>
            {data.stories.map((s, i) => (
              <button key={i} onClick={() => { setStoryIdx(i); setAnswers({}); setSubmitted(false); setAiFeedback(''); setAiError(''); }}
                style={{ padding:'8px 18px', borderRadius:999, border:`2px solid ${i===storyIdx?'var(--reading)':'var(--border)'}`,
                  background: i===storyIdx ? 'var(--reading)' : 'white', color: i===storyIdx ? 'white' : 'var(--text-secondary)',
                  fontWeight:600, cursor:'pointer', fontSize:'0.85rem', transition:'all 0.2s' }}>
                {s.title}
              </button>
            ))}
          </div>

          {/* Intro */}
          <div className="card" style={{ marginBottom:24, padding:'20px 24px', borderLeft:'4px solid var(--reading)' }}>
            <p style={{ color:'var(--text-secondary)', fontSize:'0.95rem', lineHeight:1.7 }}>{data.intro}</p>
          </div>

          {/* Story Text */}
          <div className="card" style={{ marginBottom:28, padding:32 }}>
            <h2 style={{ fontSize:'1.4rem', fontWeight:700, color:'var(--text-primary)', marginBottom:20 }}>{story.title}</h2>
            {story.image && (
              <img src={story.image} alt={story.title} style={{ width:'100%', height:'auto', borderRadius:12, marginBottom:24 }} />
            )}
            <div style={{ lineHeight:1.9, color:'var(--text-secondary)', fontSize:'0.95rem', whiteSpace:'pre-line' }}>
              {story.text}
            </div>
          </div>

          {/* Quiz */}
          <div className="card" style={{ padding:32, marginBottom:24 }}>
            <h3 style={{ fontSize:'1.1rem', fontWeight:700, color:'var(--text-primary)', marginBottom:24 }}>
              Comprehension Questions
            </h3>
            {story.questions.map((item, qi) => {
              const selected = answers[qi];
              const correct = story.answerKey[qi];
              return (
                <div key={qi} style={{ marginBottom:28, paddingBottom:24, borderBottom: qi < story.questions.length-1 ? '1px solid var(--border)' : 'none' }}>
                  <p style={{ fontWeight:600, color:'var(--text-primary)', marginBottom:12, fontSize:'0.95rem' }}>
                    {qi+1}. {item.q}
                  </p>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
                    {item.options.map((opt, ai) => {
                      let bg = 'white', border = 'var(--border)', color = 'var(--text-secondary)';
                      if (selected === ai && !submitted) { bg='var(--reading-light,#e3f2fd)'; border='var(--reading)'; color='var(--reading)'; }
                      if (submitted) {
                        if (ai === correct) { bg='#e8f5e9'; border='#388e3c'; color='#388e3c'; }
                        else if (selected === ai) { bg='#ffebee'; border='#d32f2f'; color='#d32f2f'; }
                      }
                      return (
                        <button key={ai} onClick={() => handleAnswer(qi, ai)}
                          style={{ padding:'12px 16px', borderRadius:10, border:`2px solid ${border}`, background:bg,
                            color, textAlign:'left', cursor: submitted?'default':'pointer', fontWeight:500, fontSize:'0.88rem',
                            display:'flex', alignItems:'center', gap:8, transition:'all 0.2s' }}>
                          <span style={{ fontWeight:700, minWidth:20 }}>{String.fromCharCode(65+ai)}.</span>
                          {opt}
                          {submitted && ai===correct && <CheckCircle size={16} color="#388e3c" style={{ marginLeft:'auto' }} />}
                          {submitted && selected===ai && ai!==correct && <XCircle size={16} color="#d32f2f" style={{ marginLeft:'auto' }} />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {!submitted ? (
              <PushButton
                variant="primary"
                text="Submit Answers"
                icon={<Check size={18} />}
                onClick={handleSubmit}
                isLoading={aiLoading}
              />
            ) : (
              <div>
                <div style={{ background:'#e8f5e9', borderRadius:12, padding:'20px 24px', marginBottom:20, display:'flex', alignItems:'center', gap:16 }}>
                  <CheckCircle size={32} color="#388e3c" />
                  <div>
                    <div style={{ fontSize:'1.3rem', fontWeight:700, color:'#388e3c' }}>
                      Score: {score} / {story.questions.length}
                    </div>
                    <div style={{ color:'#555', fontSize:'0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {score === story.questions.length ? <><PartyPopper size={16} /> Perfect score! Excellent work!</> :
                       score >= story.questions.length * 0.7 ? <><CheckCircle size={16} /> Great job! Review the incorrect answers above.</> :
                       <><BookOpen size={16} /> Keep practicing! Read the passage again carefully.</>}
                    </div>
                  </div>
                </div>
                  <div style={{ display:'flex', gap:12, flexWrap:'wrap', alignItems:'center', flexDirection:'column' }}>
                    {/* AI Feedback */}
                    <div style={{ width:'100%' }}>
                      <AIFeedbackCard
                        isLoading={aiLoading}
                        feedback={aiFeedback}
                        error={aiError}
                        accentColor="var(--reading)"
                        onRetry={() => handleSubmit()}
                      />
                    </div>

                    {/* Email Result Card */}
                    <EmailResultCard
                      skillName="Reading"
                      skillColor="var(--reading)"
                      level={level}
                      levelLabel={data.levelLabel}
                      activityName={story.title}
                      score={score}
                      totalQuestions={story.questions.length}
                      aiFeedback={aiFeedback}
                      onTryAgain={handleReset}
                    />
                  </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
