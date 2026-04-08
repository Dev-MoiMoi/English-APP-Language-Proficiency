import { useState, useRef } from 'react';
import { ArrowLeft, Mic, Play, Square } from 'lucide-react';
import { Link } from 'react-router-dom';
import AIFeedbackCard from '../components/AIFeedbackCard';

export default function SpeakingModule() {
  const [recording, setRecording] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hasAudio, setHasAudio] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const timerRef = useRef(null);

  const handleStartRecording = () => {
    setRecording(true);
    setHasAudio(false);
    setSubmitted(false);
    setRecordingTime(0);
    timerRef.current = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
  };

  const handleStopRecording = () => {
    setRecording(false);
    setHasAudio(true);
    clearInterval(timerRef.current);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ padding: '40px 24px', backgroundColor: 'var(--bg)', minHeight: 'calc(100vh - 140px)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link to="/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: 'var(--text-muted)' }}>
          <ArrowLeft size={20} /> Back to Dashboard
        </Link>
        
        <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <h1 style={{ margin: 0, color: 'var(--accent-speaking)' }}>Speaking Practice</h1>
          <span style={{ background: 'var(--accent-speaking-light)', color: 'var(--accent-speaking)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: 'bold' }}>Level B1</span>
        </div>

        {/* Prompt Card */}
        <div className="card" style={{ marginBottom: '32px', borderLeft: '4px solid var(--accent-speaking)' }}>
          <h3 style={{ marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Read aloud</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: '500', color: 'var(--text-main)', lineHeight: '1.4' }}>
            "The quick brown fox jumps over the lazy dog. It is an interesting fact that this sentence contains every letter of the English alphabet."
          </p>
        </div>

        {/* Recorder UI */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '48px 24px' }}>
          
          <div style={{ 
            fontSize: '2.5rem', 
            fontWeight: '300', 
            fontFamily: 'monospace', 
            color: recording ? 'red' : 'var(--text-main)',
            marginBottom: '32px'
          }}>
            {formatTime(recordingTime)}
          </div>

          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '32px' }}>
            {!recording ? (
               <button 
                onClick={handleStartRecording}
                style={{ 
                  background: 'var(--accent-speaking)', 
                  color: 'white', 
                  width: '80px', height: '80px', 
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(245, 124, 0, 0.3)',
                  transition: 'transform 0.2s'
                }}
              >
                <Mic size={32} />
              </button>
            ) : (
              <button 
                onClick={handleStopRecording}
                style={{ 
                  background: 'red', 
                  color: 'white', 
                  width: '80px', height: '80px', 
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(255, 0, 0, 0.3)',
                  animation: 'pulse 1.5s infinite'
                }}
              >
                <Square size={24} fill="white" />
              </button>
            )}
            
            {hasAudio && !recording && (
              <button style={{ 
                background: 'var(--surface)', 
                color: 'var(--primary)', 
                border: '2px solid var(--primary)',
                width: '56px', height: '56px', 
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Play size={24} fill="currentColor" />
              </button>
            )}
          </div>

          {!submitted && hasAudio && !recording && (
            <button className="btn-primary" style={{ background: 'var(--accent-speaking)' }} onClick={handleSubmit}>
              Submit Recording
            </button>
          )}

          <style>{`
            @keyframes pulse {
              0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7); }
              70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(255, 0, 0, 0); }
              100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 0, 0, 0); }
            }
          `}</style>
        </div>

        {/* AI Feedback */}
        {submitted && (
          <AIFeedbackCard 
            score="Pronunciation: 85%"
            feedbackText="Great job! Your pacing was excellent, but a few consonant sounds were not completely clear."
            suggestions={[
              "Pay attention to the 'th' sound in 'the' and 'that'.",
              "Make sure not to drop the 's' at the end of 'jumps'.",
              "Practice: 'The quick' -> focus on crisp consonants."
            ]}
            onTryAgain={() => {
              setSubmitted(false);
              setHasAudio(false);
              setRecordingTime(0);
            }}
          />
        )}
      </div>
    </div>
  );
}
