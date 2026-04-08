import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AIFeedbackCard from '../components/AIFeedbackCard';

export default function ReadingModule() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

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
          <h1 style={{ margin: 0, color: 'var(--accent-reading)' }}>Reading Practice</h1>
          <span style={{ background: 'var(--accent-reading-light)', color: 'var(--accent-reading)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: 'bold' }}>Level B1</span>
        </div>

        {/* Passage Card */}
        <div className="card" style={{ marginBottom: '32px' }}>
          <h2 style={{ marginBottom: '16px', fontSize: '1.5rem' }}>The Future of Technology in Education</h2>
          <div style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p>
              In recent years, technology has rapidly transformed the educational landscape. Traditional classrooms, once characterized by chalkboards and printed textbooks, are increasingly giving way to interactive whiteboards, tablets, and digital learning platforms.
            </p>
            <p>
              One of the most significant advantages of this shift is personalized learning. Software can now adapt to the individual pace of a student, offering additional resources to those who struggle and advanced materials to those who excel. However, challenges remain, such as ensuring equitable access to these digital tools across different socioeconomic backgrounds.
            </p>
          </div>
        </div>

        {/* Questions Section */}
        <div className="card">
          <h3 style={{ marginBottom: '16px' }}>Comprehension Question</h3>
          <p style={{ marginBottom: '16px', fontWeight: '500' }}>According to the passage, what is one of the main advantages of technology in education?</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            {['It makes textbooks cheaper.', 'It allows for personalized learning.', 'It replaces human teachers entirely.', 'It decreases the need for internet access.'].map((option, idx) => (
              <label 
                key={idx} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  padding: '16px', 
                  border: `2px solid ${selectedAnswer === idx ? 'var(--accent-reading)' : 'var(--border)'}`,
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  background: selectedAnswer === idx ? 'var(--accent-reading-light)' : 'transparent',
                  transition: 'all 0.2s'
                }}
              >
                <input 
                  type="radio" 
                  name="reading-q1" 
                  checked={selectedAnswer === idx}
                  onChange={() => setSelectedAnswer(idx)}
                  disabled={submitted}
                  style={{ width: '20px', height: '20px', accentColor: 'var(--accent-reading)' }}
                />
                <span style={{ fontSize: '1.05rem', color: submitted && idx === 1 ? 'var(--accent-reading)' : 'inherit', fontWeight: submitted && idx === 1 ? 'bold' : 'normal' }}>
                  {option}
                </span>
                {submitted && idx === 1 && <span style={{ marginLeft: 'auto', color: 'var(--accent-writing)', fontWeight: 'bold' }}>✓ Correct</span>}
                {submitted && selectedAnswer === idx && idx !== 1 && <span style={{ marginLeft: 'auto', color: 'red', fontWeight: 'bold' }}>✗ Incorrect</span>}
              </label>
            ))}
          </div>

          {!submitted ? (
            <button className="btn-primary" style={{ background: 'var(--accent-reading)', width: '100%' }} onClick={handleSubmit} disabled={selectedAnswer === null}>
              Submit Answer
            </button>
          ) : (
            <AIFeedbackCard 
              score={selectedAnswer === 1 ? "100%" : "0%"}
              feedbackText={selectedAnswer === 1 
                ? "Excellent job! You correctly identified that personalized learning is the main advantage mentioned in the text."
                : "Not quite. Review the second paragraph where it discusses how software can adapt to the individual pace of a student."}
              onTryAgain={() => { setSubmitted(false); setSelectedAnswer(null); }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
