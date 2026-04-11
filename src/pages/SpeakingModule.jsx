import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mic, ChevronLeft, Square, Play, RotateCcw, CheckCircle, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SPEAKING_DATA } from '../data/speakingData';
import { getSpeakingFeedback } from '../services/geminiService';
import AIFeedbackCard from '../components/AIFeedbackCard';
import EmailResultCard from '../components/EmailResultCard';
import PushButton from '../components/PushButton';
import MicButton from '../components/MicButton';

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
  const [transcript, setTranscript] = useState('');
  const [aiFeedback, setAiFeedback] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');
  const timerRef = useRef(null);
  const recognitionRef = useRef(null);
  const transcriptRef = useRef('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const [audioUrl, setAudioUrl] = useState('');

  useEffect(() => {
    if (VALID_LEVELS.includes(urlLevel)) {
      setLevel(urlLevel); setTaskIdx(0); setRecorded(false); setSubmitted(false);
      setSeconds(0); setTranscript(''); setAiFeedback(''); setAiError(''); setAudioUrl('');
    }
  }, [urlLevel]);

  const data = level ? SPEAKING_DATA[level] : null;
  const task = data ? data.tasks[taskIdx] : null;

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];
      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
      };
      mediaRecorderRef.current.start();
    } catch (err) {
      alert("Microphone access is required to record your speech.");
      return;
    }

    setRecording(true);
    setSeconds(0);
    transcriptRef.current = '';
    setTranscript('');
    timerRef.current = setInterval(() => setSeconds(s => s+1), 1000);

    // Web Speech API for transcription
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.onresult = (e) => {
        let full = '';
        for (let i = 0; i < e.results.length; i++) {
          full += e.results[i][0].transcript + ' ';
        }
        transcriptRef.current = full.trim();
        setTranscript(full.trim());
      };
      recognition.start();
      recognitionRef.current = recognition;
    }
  };

  const stopRecording = () => {
    setRecording(false);
    clearInterval(timerRef.current);
    setRecorded(true);
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const handleReset = () => {
    setRecorded(false); setSubmitted(false); setSeconds(0);
    setTranscript(''); setAiFeedback(''); setAiError(''); setAudioUrl('');
  };

  const handleSubmit = async () => {
    if (!recorded) { alert('Please record yourself first.'); return; }
    setSubmitted(true);
    setAiLoading(true);
    setAiFeedback('');
    setAiError('');

    // Use real transcript if available, otherwise a placeholder for feedback
    const textForFeedback = transcriptRef.current ||
      `The student spoke for ${formatTime(seconds)} about the topic: "${task.prompt}". ` +
      `No transcription was captured. Please provide general speaking tips.`;

    try {
      const feedback = await getSpeakingFeedback(level, task.prompt, textForFeedback, seconds);
      setAiFeedback(feedback);
    } catch (err) {
      setAiError(err.message || 'AI feedback could not be loaded. Your recording has been saved.');
    } finally {
      setAiLoading(false);
    }
  };



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
              <button key={i} onClick={() => { setTaskIdx(i); setRecorded(false); setSubmitted(false); setSeconds(0); setTranscript(''); setAiFeedback(''); setAiError(''); setAudioUrl(''); }}
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

          <div className="card passage-card" style={{ marginBottom: 20 }}>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: 8 }}>{task.title}</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 16, lineHeight: 1.6, fontStyle: 'italic', fontSize: '15px' }}>{task.prompt}</p>
            <div style={{ background: '#fff3e0', borderRadius: 10, padding: '14px 18px', marginBottom: 12 }}>
              <p style={{ fontWeight: 600, color: 'var(--speaking)', marginBottom: 8, fontSize: '14px' }}>Cover these points:</p>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                {task.bullets.map((b, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>{b}</li>
                ))}
              </ul>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>⏱ Suggested duration: {task.duration}</div>
          </div>

          {/* Recorder */}
          {!submitted && (
            <div className="card" style={{ padding: '24px 20px', marginBottom: 24, textAlign: 'center' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 20, fontSize: '15px' }}>
                {!recorded 
                  ? (recording ? 'Recording... Tap to stop' : 'Tap the mic to start recording') 
                  : 'Recording saved!'}
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                {!recording && !recorded && (
                  <MicButton isRecording={false} onClick={startRecording} />
                )}
                {recording && (
                  <MicButton isRecording={true} onClick={stopRecording} />
                )}
              </div>

              {/* Timer display */}
              {(!recorded || recording) && (
                <div style={{ fontSize: '18px', fontWeight: 800, color: recording ? '#d32f2f' : 'var(--text-primary)', marginBottom: 20, fontFamily: 'monospace', letterSpacing: 2 }}>
                  {formatTime(seconds)}
                </div>
              )}

              {/* Waveform animation */}
              {recording && (
                <div style={{ display:'flex', gap:4, justifyContent:'center', alignItems:'center', height:40, marginBottom:24 }}>
                  {[...Array(12)].map((_,i)=>(
                    <div key={i} style={{ width:4, background:'#d32f2f', borderRadius:999,
                      animation:'wave 0.8s ease-in-out infinite',
                      animationDelay:`${i*0.07}s`, height:`${10+Math.random()*30}px` }} />
                  ))}
                </div>
              )}

              {/* Playback State */}
              {recorded && !recording && audioUrl && (
                <div style={{ marginBottom: 24 }}>
                  <audio src={audioUrl} controls style={{ width: '100%', maxWidth: 400, outline: 'none' }} />
                </div>
              )}

              {/* Live transcript */}
              {(recording || transcript) && (
                <div style={{ background:'#fff3e0', border:'1px solid #ffcc80', borderRadius:10, padding:'12px 16px', marginBottom:20, textAlign:'left', minHeight:60 }}>
                  <p style={{ fontSize:'0.8rem', fontWeight:600, color:'var(--speaking)', marginBottom:4 }}>
                    {recording ? '🎙 Live Transcription:' : '📝 Transcription:'}
                  </p>
                  <p style={{ fontSize:'0.88rem', color:'var(--text-secondary)', lineHeight:1.6, fontStyle:'italic' }}>
                    {transcript || 'Listening...'}
                  </p>
                </div>
              )}

              <div className="module-footer-btns" style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                {recorded && !recording && (
                  <>
                    <PushButton
                      variant="secondary"
                      text="Re-record"
                      icon={<RotateCcw size={18} />}
                      onClick={handleReset}
                    />
                    <PushButton
                      variant="primary"
                      text="Submit Response"
                      icon={<Check size={18} />}
                      onClick={handleSubmit}
                      isLoading={aiLoading}
                    />
                  </>
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

              {/* Transcription preview */}
              {transcript && (
                <div style={{ background:'#fafafa', border:'1px solid var(--border)', borderRadius:12, padding:'16px 20px', marginBottom:20 }}>
                  <p style={{ fontWeight:600, color:'var(--text-secondary)', fontSize:'0.85rem', marginBottom:6 }}>📝 What you said:</p>
                  <p style={{ color:'var(--text-secondary)', fontSize:'0.9rem', lineHeight:1.7, fontStyle:'italic' }}>{transcript}</p>
                </div>
              )}

              {/* AI Feedback */}
              <AIFeedbackCard
                isLoading={aiLoading}
                feedback={aiFeedback}
                error={aiError}
                accentColor="var(--speaking)"
                onRetry={handleReset}
              />

              {/* Email Result Card */}
              <EmailResultCard
                skillName="Speaking"
                skillColor="var(--speaking)"
                level={level}
                levelLabel={data.levelLabel}
                activityName={task.title}
                aiFeedback={aiFeedback}
                aiLoading={aiLoading}
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
