import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, ChevronLeft, CheckCircle, XCircle, Mail, Send, RotateCcw, PartyPopper } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { READING_DATA } from '../data/readingData';

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
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  // If URL changes (e.g. user navigates back then picks again), sync level
  useEffect(() => {
    if (VALID_LEVELS.includes(urlLevel)) {
      setLevel(urlLevel);
      setStoryIdx(0);
      setAnswers({});
      setSubmitted(false);
      setSent(false);
    }
  }, [urlLevel]);

  const data = level ? READING_DATA[level] : null;
  const story = data ? data.stories[storyIdx] : null;

  const score = story ? story.answerKey.reduce((acc, correct, i) =>
    answers[i] === correct ? acc + 1 : acc, 0) : 0;

  const handleAnswer = (qi, ai) => {
    if (!submitted) setAnswers(prev => ({ ...prev, [qi]: ai }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < story.questions.length) {
      alert('Please answer all questions before submitting.');
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const handleSend = () => {
    if (!email) { alert('Please enter your email.'); return; }
    setSent(true);
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
              <button key={i} onClick={() => { setStoryIdx(i); setAnswers({}); setSubmitted(false); setSent(false); }}
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
              <button className="btn-primary" onClick={handleSubmit} style={{ marginTop:8, background:'var(--reading)' }}>
                Submit Answers
              </button>
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
                <div style={{ display:'flex', gap:12, flexWrap:'wrap', alignItems:'center' }}>
                  <button className="btn-ghost" onClick={handleReset} style={{ display:'flex', alignItems:'center', gap:6 }}>
                    <RotateCcw size={16} /> Try Again
                  </button>
                  {!sent ? (
                    <div style={{ display:'flex', gap:8, flex:1, minWidth:280 }}>
                      <input type="email" placeholder="Enter your email to receive results" value={email} onChange={e=>setEmail(e.target.value)}
                        style={{ flex:1, padding:'10px 14px', borderRadius:10, border:'2px solid var(--border)', fontSize:'0.9rem', outline:'none' }} />
                      <button className="btn-primary" onClick={handleSend} style={{ display:'flex', alignItems:'center', gap:6, background:'var(--reading)', flexShrink:0 }}>
                        <Send size={16} /> Send
                      </button>
                    </div>
                  ) : (
                    <div style={{ display:'flex', alignItems:'center', gap:8, color:'#388e3c', fontWeight:600 }}>
                      <Mail size={18} /> Results sent to {email}!
                    </div>
                  )}
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
