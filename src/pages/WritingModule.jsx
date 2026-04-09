import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Edit3, ChevronLeft, CheckCircle, Send, Mail, RotateCcw, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { WRITING_DATA } from '../data/writingData';

const VALID_LEVELS = ['A1','A2','B1','B2','C1','C2'];

export default function WritingModule() {
  const navigate = useNavigate();
  const location = useLocation();
  const urlLevel = new URLSearchParams(location.search).get('level');

  const [level, setLevel] = useState(() =>
    VALID_LEVELS.includes(urlLevel) ? urlLevel : null
  );
  const [taskIdx, setTaskIdx] = useState(0);
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (VALID_LEVELS.includes(urlLevel)) {
      setLevel(urlLevel); setTaskIdx(0); setText(''); setSubmitted(false); setSent(false);
    }
  }, [urlLevel]);

  const data = level ? WRITING_DATA[level] : null;
  const task = data ? data.tasks[taskIdx] : null;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const minW = data?.minWords || 30;
  const maxW = data?.maxWords || 300;
  const progress = Math.min(100, (wordCount / minW) * 100);
  const isReady = wordCount >= minW;
  const isOver = wordCount > maxW;

  const handleSubmit = () => {
    if (!isReady) { alert(`Please write at least ${minW} words.`); return; }
    setSubmitted(true);
  };
  const handleReset = () => { setText(''); setSubmitted(false); setSent(false); };
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
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24 }}>
            <button className="btn-ghost" onClick={() => navigate('/')} style={{ display:'flex', alignItems:'center', gap:6 }}>
              <ChevronLeft size={16} /> Back to Home
            </button>
            <span style={{ color:'var(--text-muted)' }}>/</span>
            <span className="skill-badge skill-badge-writing">{data.levelLabel}</span>
          </div>

          {/* Task tabs */}
          <div style={{ display:'flex', gap:10, marginBottom:24, flexWrap:'wrap' }}>
            {data.tasks.map((t, i) => (
              <button key={i} onClick={() => { setTaskIdx(i); setText(''); setSubmitted(false); setSent(false); }}
                style={{ padding:'8px 16px', borderRadius:999, border:`2px solid ${i===taskIdx?'var(--writing)':'var(--border)'}`,
                  background: i===taskIdx ? 'var(--writing)' : 'white',
                  color: i===taskIdx ? 'white' : 'var(--text-secondary)',
                  fontWeight:600, cursor:'pointer', fontSize:'0.82rem', transition:'all 0.2s' }}>
                {t.title}
              </button>
            ))}
          </div>

          {/* Intro */}
          <div className="card" style={{ marginBottom:24, padding:'20px 24px', borderLeft:'4px solid var(--writing)' }}>
            <p style={{ color:'var(--text-secondary)', fontSize:'0.95rem', lineHeight:1.7 }}>{data.intro}</p>
          </div>

          {/* Task Prompt */}
          <div className="card" style={{ marginBottom:24, padding:28 }}>
            <h2 style={{ fontSize:'1.2rem', fontWeight:700, color:'var(--text-primary)', marginBottom:8 }}>{task.title}</h2>
            <p style={{ color:'var(--text-secondary)', marginBottom:16, lineHeight:1.7 }}>{task.prompt}</p>
            <div style={{ background:'#f9fbe7', borderRadius:10, padding:'14px 18px' }}>
              <p style={{ fontWeight:600, color:'var(--writing)', marginBottom:8, fontSize:'0.9rem' }}>Include in your writing:</p>
              <ul style={{ paddingLeft:20, margin:0 }}>
                {task.bullets.map((b, i) => (
                  <li key={i} style={{ color:'var(--text-secondary)', fontSize:'0.9rem', lineHeight:1.8 }}>{b}</li>
                ))}
              </ul>
            </div>
            <div style={{ marginTop:12, fontSize:'0.85rem', color:'var(--text-muted)' }}>
              Word count: {minW}–{maxW} words
            </div>
          </div>

          {/* Text Area */}
          {!submitted ? (
            <div className="card" style={{ padding:28, marginBottom:24 }}>
              <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Start writing your response here..."
                rows={12}
                style={{ width:'100%', border:`2px solid ${isOver ? '#d32f2f' : 'var(--border)'}`, borderRadius:12, padding:16,
                  fontSize:'0.95rem', lineHeight:1.8, resize:'vertical', outline:'none', fontFamily:'inherit',
                  color:'var(--text-primary)', boxSizing:'border-box', transition:'border-color 0.2s' }}
              />
              {/* Progress bar */}
              <div style={{ marginTop:12 }}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
                  <span style={{ fontSize:'0.85rem', color: isOver?'#d32f2f': isReady?'#388e3c':'var(--text-muted)' }}>
                    {wordCount} words {isOver ? `(${wordCount-maxW} over limit)` : isReady ? '✓ Ready to submit' : `(${minW-wordCount} more needed)`}
                  </span>
                  <span style={{ fontSize:'0.85rem', color:'var(--text-muted)' }}>{minW}–{maxW} words</span>
                </div>
                <div style={{ height:6, background:'#e0e0e0', borderRadius:999, overflow:'hidden' }}>
                  <div style={{ height:'100%', width:`${progress}%`, background: isOver?'#d32f2f':isReady?'#388e3c':'var(--writing)', borderRadius:999, transition:'width 0.3s' }} />
                </div>
              </div>
              <button className="btn-primary" onClick={handleSubmit} style={{ marginTop:20, background:'var(--writing)' }}>
                Submit Writing
              </button>
            </div>
          ) : (
            <div className="card" style={{ padding:28, marginBottom:24 }}>
              <div style={{ background:'#e8f5e9', borderRadius:12, padding:'20px 24px', marginBottom:24, display:'flex', alignItems:'center', gap:16 }}>
                <CheckCircle size={32} color="#388e3c" />
                <div>
                  <div style={{ fontSize:'1.2rem', fontWeight:700, color:'#388e3c' }}>Writing Submitted!</div>
                  <div style={{ color:'#555', fontSize:'0.9rem' }}>Word count: {wordCount} words</div>
                </div>
              </div>

              {/* Submitted text */}
              <div style={{ background:'#fafafa', border:'1px solid var(--border)', borderRadius:12, padding:20, marginBottom:20, whiteSpace:'pre-wrap', lineHeight:1.9, color:'var(--text-secondary)', fontSize:'0.93rem' }}>
                {text}
              </div>

              {/* AI Feedback simulation */}
              <div style={{ background:'#fff8e1', border:'1px solid #ffd54f', borderRadius:12, padding:'18px 22px', marginBottom:20 }}>
                <p style={{ fontWeight:700, color:'#f57c00', marginBottom:8, fontSize:'0.95rem', display: 'flex', alignItems: 'center', gap: '6px' }}><Sparkles size={16} /> AI Feedback (Simulated)</p>
                <p style={{ color:'#555', fontSize:'0.9rem', lineHeight:1.7 }}>
                  Your writing shows effort and ideas. Focus on: using varied vocabulary, clear paragraph structure, and appropriate connectors (however, furthermore, in conclusion). 
                  Review grammar for tense consistency and subject-verb agreement to improve your overall score.
                </p>
              </div>

              <div style={{ display:'flex', gap:12, flexWrap:'wrap', alignItems:'center' }}>
                <button className="btn-ghost" onClick={handleReset} style={{ display:'flex', alignItems:'center', gap:6 }}>
                  <RotateCcw size={16} /> Try Another Task
                </button>
                {!sent ? (
                  <div style={{ display:'flex', gap:8, flex:1, minWidth:280 }}>
                    <input type="email" placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)}
                      style={{ flex:1, padding:'10px 14px', borderRadius:10, border:'2px solid var(--border)', fontSize:'0.9rem', outline:'none' }} />
                    <button className="btn-primary" onClick={handleSend} style={{ display:'flex', alignItems:'center', gap:6, background:'var(--writing)', flexShrink:0 }}>
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
      <Footer />
    </>
  );
}
