import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mic, ChevronLeft, Square, Play, RotateCcw, Send, Mail, CheckCircle, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SPEAKING_DATA } from '../data/speakingData';

const VALID_LEVELS = ['A1','A2','B1','B2','C1','C2'];

export default function SpeakingModule() {
  const navigate = useNavigate();
  const location = useLocation();
  const urlLevel = new URLSearchParams(location.search).get('level');

  const [level, setLevel] = useState(() =>
    VALID_LEVELS.includes(urlLevel) ? urlLevel : null
  );
  const [taskIdx, setTaskIdx] = useState(0);
  const [recording, setRecording] = useState(false);
  const [recorded, setRecorded] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (VALID_LEVELS.includes(urlLevel)) {
      setLevel(urlLevel); setTaskIdx(0); setRecorded(false); setSubmitted(false); setSeconds(0); setSent(false);
    }
  }, [urlLevel]);

  const data = level ? SPEAKING_DATA[level] : null;
  const task = data ? data.tasks[taskIdx] : null;

  const startRecording = () => {
    setRecording(true);
    setSeconds(0);
    timerRef.current = setInterval(() => setSeconds(s => s+1), 1000);
  };

  const stopRecording = () => {
    setRecording(false);
    clearInterval(timerRef.current);
    setRecorded(true);
  };

  const handleReset = () => { setRecorded(false); setSubmitted(false); setSeconds(0); setSent(false); };
  const handleSubmit = () => { if (!recorded) { alert('Please record yourself first.'); return; } setSubmitted(true); };
  const handleSend = () => { if (!email) { alert('Please enter your email.'); return; } setSent(true); };

  const formatTime = s => `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`;

  // Rating based on recording duration
  const getRating = () => {
    if (seconds < 15) return { score:'Needs More', color:'#d32f2f', note:'Try to speak longer and cover all bullet points.' };
    if (seconds < 40) return { score:'Developing', color:'#f57c00', note:'Good effort! Expand your answers and add more details.' };
    if (seconds < 90) return { score:'Satisfactory', color:'#fbc02d', note:'Nice work! Practice smoother transitions between ideas.' };
    return { score:'Proficient', color:'#388e3c', note:'Excellent! You spoke confidently and at length. Well done!' };
  };

  if (!level) {
    navigate('/', { replace: true });
    return null;
  }

  const rating = getRating();

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
            <span className="skill-badge skill-badge-speaking">{data.levelLabel}</span>
          </div>

          {/* Task tabs */}
          <div style={{ display:'flex', gap:10, marginBottom:24, flexWrap:'wrap' }}>
            {data.tasks.map((t, i) => (
              <button key={i} onClick={() => { setTaskIdx(i); setRecorded(false); setSubmitted(false); setSeconds(0); setSent(false); }}
                style={{ padding:'8px 16px', borderRadius:999, border:`2px solid ${i===taskIdx?'var(--speaking)':'var(--border)'}`,
                  background: i===taskIdx ? 'var(--speaking)' : 'white',
                  color: i===taskIdx ? 'white' : 'var(--text-secondary)',
                  fontWeight:600, cursor:'pointer', fontSize:'0.82rem', transition:'all 0.2s' }}>
                {t.title}
              </button>
            ))}
          </div>

          {/* Intro */}
          <div className="card" style={{ marginBottom:24, padding:'20px 24px', borderLeft:'4px solid var(--speaking)' }}>
            <p style={{ color:'var(--text-secondary)', fontSize:'0.95rem', lineHeight:1.7 }}>{data.intro}</p>
          </div>

          {/* Task Prompt */}
          <div className="card" style={{ marginBottom:24, padding:28 }}>
            <h2 style={{ fontSize:'1.2rem', fontWeight:700, color:'var(--text-primary)', marginBottom:8 }}>{task.title}</h2>
            <p style={{ color:'var(--text-secondary)', marginBottom:16, lineHeight:1.7, fontStyle:'italic' }}>{task.prompt}</p>
            <div style={{ background:'#fff3e0', borderRadius:10, padding:'14px 18px', marginBottom:12 }}>
              <p style={{ fontWeight:600, color:'var(--speaking)', marginBottom:8, fontSize:'0.9rem' }}>Cover these points:</p>
              <ul style={{ paddingLeft:20, margin:0 }}>
                {task.bullets.map((b, i) => (
                  <li key={i} style={{ color:'var(--text-secondary)', fontSize:'0.9rem', lineHeight:1.9 }}>{b}</li>
                ))}
              </ul>
            </div>
            <div style={{ fontSize:'0.85rem', color:'var(--text-muted)' }}>⏱ Suggested duration: {task.duration}</div>
          </div>

          {/* Recorder */}
          {!submitted && (
            <div className="card" style={{ padding:32, marginBottom:24, textAlign:'center' }}>
              <p style={{ color:'var(--text-secondary)', marginBottom:24, fontSize:'0.95rem' }}>
                {!recorded ? 'Read the prompt, prepare your thoughts, then press Record when ready.' : 'Recording saved! You can re-record or submit your response.'}
              </p>

              {/* Timer display */}
              <div style={{ fontSize:'3rem', fontWeight:800, color: recording ? '#d32f2f' : 'var(--text-primary)', marginBottom:24, fontFamily:'monospace', letterSpacing:4 }}>
                {formatTime(seconds)}
              </div>

              {/* Waveform animation */}
              {recording && (
                <div style={{ display:'flex', gap:4, justifyContent:'center', alignItems:'center', height:40, marginBottom:24 }}>
                  {[...Array(12)].map((_,i)=>(
                    <div key={i} style={{ width:4, background:'var(--speaking)', borderRadius:999,
                      animation:'wave 0.8s ease-in-out infinite',
                      animationDelay:`${i*0.07}s`, height:`${10+Math.random()*30}px` }} />
                  ))}
                </div>
              )}

              <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
                {!recording ? (
                  <button onClick={startRecording}
                    style={{ display:'flex', alignItems:'center', gap:10, padding:'16px 32px', borderRadius:999,
                      background:'var(--speaking)', color:'white', fontWeight:700, fontSize:'1rem', border:'none', cursor:'pointer',
                      boxShadow:'0 4px 20px rgba(245,124,0,0.3)', transition:'transform 0.2s' }}
                    onMouseEnter={e=>e.currentTarget.style.transform='scale(1.05)'}
                    onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}>
                    <Mic size={20} /> {recorded ? 'Re-record' : 'Start Recording'}
                  </button>
                ) : (
                  <button onClick={stopRecording}
                    style={{ display:'flex', alignItems:'center', gap:10, padding:'16px 32px', borderRadius:999,
                      background:'#d32f2f', color:'white', fontWeight:700, fontSize:'1rem', border:'none', cursor:'pointer',
                      animation:'pulse 1.5s ease-in-out infinite', boxShadow:'0 4px 20px rgba(211,47,47,0.3)' }}>
                    <Square size={20} /> Stop Recording
                  </button>
                )}
                {recorded && !recording && (
                  <button onClick={handleSubmit}
                    style={{ display:'flex', alignItems:'center', gap:8, padding:'16px 28px', borderRadius:999,
                      background:'#388e3c', color:'white', fontWeight:700, fontSize:'1rem', border:'none', cursor:'pointer' }}>
                    <Play size={18} /> Submit Response
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Results */}
          {submitted && (
            <div className="card" style={{ padding:32, marginBottom:24 }}>
              <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:24 }}>
                <CheckCircle size={36} color="#388e3c" />
                <div>
                  <div style={{ fontSize:'1.3rem', fontWeight:700, color:'var(--text-primary)' }}>Response Submitted!</div>
                  <div style={{ color:'var(--text-secondary)', fontSize:'0.9rem' }}>Duration: {formatTime(seconds)}</div>
                </div>
              </div>

              {/* Score */}
              <div style={{ background:`${rating.color}18`, border:`2px solid ${rating.color}`, borderRadius:12, padding:'20px 24px', marginBottom:20 }}>
                <div style={{ fontSize:'1.4rem', fontWeight:800, color:rating.color, marginBottom:4 }}>
                  {rating.score}
                </div>
                <div style={{ color:'#555', fontSize:'0.9rem' }}>{rating.note}</div>
              </div>

              {/* AI Feedback */}
              <div style={{ background:'#fff8e1', border:'1px solid #ffd54f', borderRadius:12, padding:'18px 22px', marginBottom:20 }}>
                <p style={{ fontWeight:700, color:'#f57c00', marginBottom:8, fontSize:'0.95rem', display: 'flex', alignItems: 'center', gap: '6px' }}><Sparkles size={16} /> AI Feedback (Simulated)</p>
                <p style={{ color:'#555', fontSize:'0.9rem', lineHeight:1.7 }}>
                  Focus on: clear pronunciation of key words, natural pausing between ideas, and using topic-specific vocabulary. 
                  Try to avoid long silences and use connectors like "firstly", "in addition", and "to conclude" to structure your speech.
                </p>
              </div>

              <div style={{ display:'flex', gap:12, flexWrap:'wrap', alignItems:'center' }}>
                <button className="btn-ghost" onClick={handleReset} style={{ display:'flex', alignItems:'center', gap:6 }}>
                  <RotateCcw size={16} /> Try Again
                </button>
                {!sent ? (
                  <div style={{ display:'flex', gap:8, flex:1, minWidth:280 }}>
                    <input type="email" placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)}
                      style={{ flex:1, padding:'10px 14px', borderRadius:10, border:'2px solid var(--border)', fontSize:'0.9rem', outline:'none' }} />
                    <button className="btn-primary" onClick={handleSend} style={{ display:'flex', alignItems:'center', gap:6, background:'var(--speaking)', flexShrink:0 }}>
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
