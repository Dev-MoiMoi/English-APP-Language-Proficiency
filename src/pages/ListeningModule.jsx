import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Headphones, ChevronLeft, CheckCircle, XCircle, RotateCcw, PartyPopper, Check, ChevronDown, ChevronUp, Eye } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LISTENING_DATA } from '../data/listeningData';
import { getListeningFeedback } from '../services/geminiService';
import AIFeedbackCard from '../components/AIFeedbackCard';
import EmailResultCard from '../components/EmailResultCard';
import PushButton from '../components/PushButton';

const VALID_LEVELS = ['A1','A2','B1','B2','C1','C2'];

export default function ListeningModule() {
  const navigate = useNavigate();
  const location = useLocation();
  const urlLevel = new URLSearchParams(location.search).get('level');

  const [level, setLevel] = useState(() =>
    VALID_LEVELS.includes(urlLevel) ? urlLevel : null
  );
  const [lessonIdx, setLessonIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [aiFeedback, setAiFeedback] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  useEffect(() => {
    if (VALID_LEVELS.includes(urlLevel)) {
      setLevel(urlLevel); setLessonIdx(0); setAnswers({}); setSubmitted(false);
      setAiFeedback(''); setAiLoading(false); setAiError('');
    }
  }, [urlLevel]);

  const data = level ? LISTENING_DATA[level] : null;
  const lesson = data ? data.lessons[lessonIdx] : null;

  const score = lesson ? lesson.answerKey.reduce((acc, correct, i) =>
    answers[i] === correct ? acc+1 : acc, 0) : 0;

  const handleAnswer = (qi, ai) => { if (!submitted) setAnswers(prev=>({...prev,[qi]:ai})); };

  const handleSubmit = async () => {
    if (Object.keys(answers).length < lesson.questions.length) {
      alert('Please answer all questions before submitting.'); return;
    }
    setSubmitted(true);
    setAiLoading(true);
    setAiFeedback('');
    setAiError('');
    // Build Q&A summary for the prompt
    const qaSummary = lesson.questions.map((item, qi) => {
      const studentIdx = answers[qi];
      const correctIdx = lesson.answerKey[qi];
      const studentAns = studentIdx !== undefined ? item.options[studentIdx] : 'Not answered';
      const correctAns = item.options[correctIdx];
      const isCorrect = studentIdx === correctIdx;
      return `Q${qi+1}: ${item.q}\nStudent answered: ${studentAns} (${isCorrect ? 'Correct' : 'Wrong'})\nCorrect answer: ${correctAns}`;
    }).join('\n\n');
    try {
      const feedback = await getListeningFeedback(level, score, lesson.questions.length, qaSummary);
      setAiFeedback(feedback);
    } catch (err) {
      setAiError(err.message || 'Failed to get AI feedback. Please check your API key.');
    } finally {
      setAiLoading(false);
    }
  };

  const handleReset = () => { setAnswers({}); setSubmitted(false); setAiFeedback(''); setAiError(''); setShowAnswerKey(false); };
  const handleSend = () => { if (!email) { alert('Please enter your email.'); return; } setSent(true); };

  if (!level) {
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
            <span className="skill-badge skill-badge-listening">{data.levelLabel}</span>
          </div>

          {/* Lesson selector */}
          <div style={{ display:'flex', gap:12, marginBottom:24, flexWrap:'wrap' }}>
            {data.lessons.map((l, i) => (
              <button key={i} onClick={() => { setLessonIdx(i); setAnswers({}); setSubmitted(false); setAiFeedback(''); setAiError(''); }}
                style={{ padding:'8px 18px', borderRadius:999, border:`2px solid ${i===lessonIdx?'var(--listening)':'var(--border)'}`,
                  background: i===lessonIdx ? 'var(--listening)' : 'white',
                  color: i===lessonIdx ? 'white' : 'var(--text-secondary)',
                  fontWeight:600, cursor:'pointer', fontSize:'0.85rem', transition:'all 0.2s' }}>
                {l.title}
              </button>
            ))}
          </div>

          {/* Intro */}
          <div className="card" style={{ marginBottom:24, padding:'20px 24px', borderLeft:'4px solid var(--listening)' }}>
            <p style={{ color:'var(--text-secondary)', fontSize:'0.95rem', lineHeight:1.7 }}>{data.intro}</p>
          </div>

          <div className="card passage-card" style={{ marginBottom: 20 }}>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: 8 }}>{lesson.title}</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 16, fontSize: '15px', lineHeight: 1.6 }}>{lesson.description}</p>

            {lesson.imageFile && (
              <img 
                src={lesson.imageFile} 
                alt={lesson.title} 
                style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block', margin: '0 auto 20px auto', objectFit: 'cover' }} 
              />
            )}

            <div style={{ background: '#f3e5f5', borderRadius: 12, padding: '16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--listening)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Headphones size={20} color="white" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '15px' }}>Audio Recording</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{data.audioNote}</div>
                </div>
              </div>
              
              <audio 
                controls 
                src={lesson.audioFile} 
                style={{ width: '100%', height: '44px', outline: 'none' }} 
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          {/* Quiz */}
          <div className="card" style={{ padding:32, marginBottom:24 }}>
            <h3 style={{ fontSize:'1.1rem', fontWeight:700, color:'var(--text-primary)', marginBottom:24 }}>
              Listening Comprehension Questions
            </h3>
            {lesson.questions.map((item, qi) => {
              const selected = answers[qi];
              const correct = lesson.answerKey[qi];
              return (
                <div key={qi} className="question-card" style={{ marginBottom: 20 }}>
                  <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: 16, fontSize: '16px' }}>
                    <span style={{ color: 'var(--primary)', marginRight: '8px' }}>{qi + 1}.</span> {item.q}
                  </p>
                  <div className="options-list">
                    {item.options.map((opt, ai) => {
                      let bg = 'white', border = 'var(--border)', color = 'var(--text-secondary)';
                      if (selected === ai && !submitted) { bg = '#f3e5f5'; border = 'var(--listening)'; color = 'var(--listening)'; }
                      if (submitted) {
                        if (ai === correct) { bg = '#e8f5e9'; border = '#388e3c'; color = '#388e3c'; }
                        else if (selected === ai) { bg = '#ffebee'; border = '#d32f2f'; color = '#d32f2f'; }
                      }
                      return (
                        <button key={ai} className="option-btn" onClick={() => handleAnswer(qi, ai)}
                          style={{ background: bg, border: `2px solid ${border}`, color, minHeight: '48px' }}>
                          <span style={{ fontWeight: 700, minWidth: 20 }}>{String.fromCharCode(65 + ai)}.</span>
                          {opt}
                          {submitted && ai === correct && <CheckCircle size={16} color="#388e3c" style={{ marginLeft: 'auto' }} />}
                          {submitted && selected === ai && ai !== correct && <XCircle size={16} color="#d32f2f" style={{ marginLeft: 'auto' }} />}
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
                      Score: {score} / {lesson.questions.length}
                    </div>
                    <div style={{ color:'#555', fontSize:'0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {score===lesson.questions.length ? <><PartyPopper size={16} /> Perfect score!</> :
                       score>=lesson.questions.length*0.7 ? <><CheckCircle size={16} /> Great job! Review any incorrect answers.</> :
                       <><Headphones size={16} /> Try listening again and re-answering the questions.</>}
                    </div>
                  </div>
                </div>
                <div style={{ display:'flex', gap:12, flexWrap:'wrap', alignItems:'flex-start', flexDirection:'column' }}>
                  
                  {/* Collapsible Answer Key */}
                  <div className="card" style={{ width: '100%', padding: '20px 24px', border: '1px solid var(--border)' }}>
                    <button 
                      onClick={() => setShowAnswerKey(!showAnswerKey)}
                      style={{ 
                        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                        color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <Eye size={20} color="var(--listening)" />
                        View Correct Answer Key
                      </div>
                      {showAnswerKey ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    
                    {showAnswerKey && (
                      <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid var(--border)', animation: 'fadeIn 0.3s ease' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
                          {lesson.questions.map((q, idx) => (
                            <div key={idx} style={{ 
                              display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', 
                              background: 'var(--bg-secondary)', borderRadius: 8, fontSize: '0.9rem'
                            }}>
                              <span style={{ fontWeight: 800, color: 'var(--listening)', minWidth: 25 }}>Q{idx + 1}:</span>
                              <span style={{ fontWeight: 600 }}>{String.fromCharCode(65 + lesson.answerKey[idx])}</span>
                              <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                ({q.options[lesson.answerKey[idx]]})
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* AI Feedback */}
                  <div style={{ width:'100%' }}>
                    <AIFeedbackCard
                      isLoading={aiLoading}
                      feedback={aiFeedback}
                      error={aiError}
                      accentColor="var(--listening)"
                      onRetry={() => handleSubmit()}
                    />
                  </div>

                  {/* Email Result Card */}
                  <EmailResultCard
                    skillName="Listening"
                    skillColor="var(--listening)"
                    level={level}
                    levelLabel={data.levelLabel}
                    activityName={lesson.title}
                    score={score}
                    totalQuestions={lesson.questions.length}
                    aiFeedback={aiFeedback}
                    aiLoading={aiLoading}
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
