import { useState } from 'react';
import { ArrowLeft, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';
import AIFeedbackCard from '../components/AIFeedbackCard';

export default function ListeningModule() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Mock audio player logic
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying && progress < 100) {
      // Simulate progress
      const interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 100;
          }
          return p + 5;
        });
      }, 500);
      // store interval conceptually
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) setSubmitted(true);
  };

  return (
    <div style={{ padding: '40px 24px', backgroundColor: 'var(--bg)', minHeight: 'calc(100vh - 140px)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link to="/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: 'var(--text-muted)' }}>
          <ArrowLeft size={20} /> Back to Dashboard
        </Link>
        
        <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <h1 style={{ margin: 0, color: 'var(--accent-listening)' }}>Listening Practice</h1>
          <span style={{ background: 'var(--accent-listening-light)', color: 'var(--accent-listening)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: 'bold' }}>Level B1</span>
        </div>

        {/* Audio Player Card */}
        <div className="card" style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '24px' }}>
          <button 
            onClick={togglePlay}
            style={{ 
              background: 'var(--accent-listening)', 
              color: 'white', 
              width: '56px', height: '56px', 
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0
            }}
          >
            {isPlaying ? <Pause fill="white" size={24} /> : <Play fill="white" size={24} style={{ marginLeft: '4px' }}/>}
          </button>
          
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              <span>Conversation at a cafe</span>
              <span>0:15 / 1:30</span>
            </div>
            <div style={{ height: '8px', background: 'var(--border)', borderRadius: 'var(--radius-full)', overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ width: `${progress}%`, height: '100%', background: 'var(--accent-listening)', transition: 'width 0.2s' }}></div>
            </div>
          </div>
        </div>

        {/* Quiz Section */}
        <div className="card">
          <h3 style={{ marginBottom: '16px' }}>Comprehension Question</h3>
          <p style={{ marginBottom: '16px', fontWeight: '500' }}>What does the customer order?</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {['A black coffee and a muffin', 'A cappuccino and a croissant', 'An iced latte', 'Tea with milk'].map((option, idx) => (
              <label 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  padding: '16px', 
                  border: `2px solid ${selectedAnswer === idx ? 'var(--accent-listening)' : 'var(--border)'}`,
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  background: selectedAnswer === idx ? 'var(--accent-listening-light)' : 'transparent',
                  transition: 'all 0.2s'
                }}
              >
                <input 
                  type="radio" 
                  name="listening-q1" 
                  checked={selectedAnswer === idx}
                  onChange={() => setSelectedAnswer(idx)}
                  disabled={submitted}
                  style={{ width: '20px', height: '20px', accentColor: 'var(--accent-listening)' }}
                />
                <span style={{ fontSize: '1.05rem', color: submitted && idx === 1 ? 'var(--accent-listening)' : 'inherit', fontWeight: submitted && idx === 1 ? 'bold' : 'normal' }}>
                  {option}
                </span>
                {submitted && idx === 1 && <span style={{ marginLeft: 'auto', color: 'var(--accent-writing)', fontWeight: 'bold' }}>✓ Correct</span>}
                {submitted && selectedAnswer === idx && idx !== 1 && <span style={{ marginLeft: 'auto', color: 'red', fontWeight: 'bold' }}>✗ Incorrect</span>}
              </label>
            ))}
          </div>

          {!submitted ? (
            <button className="btn-primary" style={{ background: 'var(--accent-listening)', width: '100%' }} onClick={handleSubmit} disabled={selectedAnswer === null}>
              Submit Answer
            </button>
          ) : (
            <AIFeedbackCard 
              score={selectedAnswer === 1 ? "100%" : "0%"}
              feedbackText={selectedAnswer === 1 
                ? "Perfect! You correctly heard that the customer requested a cappuccino and a croissant."
                : "Not quite. Listen carefully around the 0:25 mark where she specifically asks for a cappuccino to go."}
              onTryAgain={() => { setSubmitted(false); setSelectedAnswer(null); }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
