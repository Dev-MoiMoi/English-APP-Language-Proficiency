import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Edit3, ChevronLeft, CheckCircle, RotateCcw, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { WRITING_DATA } from '../data/writingData';
import { getWritingFeedback } from '../services/geminiService';
import AIFeedbackCard from '../components/AIFeedbackCard';
import EmailResultCard from '../components/EmailResultCard';
import PushButton from '../components/PushButton';

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
  const [aiFeedback, setAiFeedback] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');

  useEffect(() => {
    if (VALID_LEVELS.includes(urlLevel)) {
      setLevel(urlLevel); setTaskIdx(0); setText(''); setSubmitted(false);
      setAiFeedback(''); setAiLoading(false); setAiError('');
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

  const handleSubmit = async () => {
    if (!isReady) { alert(`Please write at least ${minW} words.`); return; }
    setSubmitted(true);
    setAiLoading(true);
    setAiFeedback('');
    setAiError('');
    try {
      const feedback = await getWritingFeedback(level, task.prompt, text);
      setAiFeedback(feedback);
    } catch (err) {
      setAiError(err.message || 'Failed to get AI feedback. Please check your API key.');
    } finally {
      setAiLoading(false);
    }
  };
  const handleReset = () => { setText(''); setSubmitted(false); setAiFeedback(''); setAiError(''); };

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

          <div className="card passage-card" style={{ marginBottom: 20 }}>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: 8 }}>{task.title}</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 16, lineHeight: 1.6, fontSize: '15px' }}>{task.prompt}</p>
            <div style={{ background: '#f9fbe7', borderRadius: 10, padding: '14px 18px' }}>
              <p style={{ fontWeight: 600, color: 'var(--writing)', marginBottom: 8, fontSize: '14px' }}>Include in your writing:</p>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                {task.bullets.map((b, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>{b}</li>
                ))}
              </ul>
            </div>
            <div style={{ marginTop: 12, fontSize: '12px', color: 'var(--text-muted)' }}>
              Word count: {minW}–{maxW} words
            </div>
          </div>

          {!submitted ? (
            <div className="card" style={{ padding: '20px', marginBottom: 24 }}>
              <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Start writing your response here..."
                rows={10}
                className="writing-textarea"
                style={{
                  border: `2px solid ${isOver ? '#d32f2f' : 'var(--border)'}`,
                  outline: 'none',
                  minHeight: '200px'
                }}
              />
              {/* Progress bar */}
              <div style={{ marginTop: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: '12px', color: isOver ? '#d32f2f' : isReady ? '#388e3c' : 'var(--text-muted)' }}>
                    {wordCount} words {isOver ? `(${wordCount - maxW} over limit)` : isReady ? '✓ Ready' : `(${minW - wordCount} more)`}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{minW}–{maxW}</span>
                </div>
                <div style={{ height: 6, background: '#e0e0e0', borderRadius: 999, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${progress}%`, background: isOver ? '#d32f2f' : isReady ? '#388e3c' : 'var(--writing)', borderRadius: 999, transition: 'width 0.3s' }} />
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <PushButton
                  variant="primary"
                  text="Submit Writing"
                  icon={<Check size={18} />}
                  onClick={handleSubmit}
                  isLoading={aiLoading}
                  disabled={!isReady || isOver}
                />
              </div>
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

              {/* AI Feedback */}
              <AIFeedbackCard
                isLoading={aiLoading}
                feedback={aiFeedback}
                error={aiError}
                accentColor="var(--writing)"
                onRetry={handleReset}
              />

              {/* Email Result Card */}
              <EmailResultCard
                skillName="Writing"
                skillColor="var(--writing)"
                level={level}
                levelLabel={data.levelLabel}
                activityName={task.title}
                aiFeedback={aiFeedback}
                onTryAgain={handleReset}
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
