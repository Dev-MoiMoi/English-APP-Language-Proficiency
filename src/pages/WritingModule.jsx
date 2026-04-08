import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AIFeedbackCard from '../components/AIFeedbackCard';

export default function WritingModule() {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  const handleSubmit = () => {
    if (wordCount >= 10) setSubmitted(true);
  };

  return (
    <div style={{ padding: '40px 24px', backgroundColor: 'var(--bg)', minHeight: 'calc(100vh - 140px)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link to="/dashboard" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: 'var(--text-muted)' }}>
          <ArrowLeft size={20} /> Back to Dashboard
        </Link>
        
        <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <h1 style={{ margin: 0, color: 'var(--accent-writing)' }}>Writing Practice</h1>
          <span style={{ background: 'var(--accent-writing-light)', color: 'var(--accent-writing)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: 'bold' }}>Level B1</span>
        </div>

        {/* Prompt Card */}
        <div className="card" style={{ marginBottom: '24px', borderLeft: '4px solid var(--accent-writing)' }}>
          <h3 style={{ marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Prompt</h3>
          <p style={{ fontSize: '1.25rem', fontWeight: '500', color: 'var(--text-main)' }}>
            Describe a memorable trip you took recently. Where did you go, who did you go with, and why was it special?
          </p>
          <p style={{ marginTop: '8px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Minimum 50 words.</p>
        </div>

        {/* Text Area Card */}
        <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
          <textarea 
            style={{ 
              width: '100%', 
              minHeight: '250px', 
              padding: '24px', 
              border: 'none', 
              resize: 'vertical',
              fontSize: '1.125rem',
              lineHeight: '1.6',
              fontFamily: 'inherit',
              outline: 'none',
              backgroundColor: submitted ? '#f9f9f9' : 'white'
            }}
            placeholder="Start typing your response here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={submitted}
          />
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '16px 24px', 
            background: 'var(--surface)', 
            borderTop: '1px solid var(--border)' 
          }}>
            <span style={{ color: wordCount < 50 ? 'var(--text-muted)' : 'var(--accent-writing)', fontWeight: '500' }}>
              {wordCount} words
            </span>
            {!submitted && (
              <button 
                className="btn-primary" 
                style={{ background: 'var(--accent-writing)' }} 
                onClick={handleSubmit} 
                disabled={wordCount < 10}
              >
                Submit Response
              </button>
            )}
          </div>
        </div>

        {/* AI Feedback */}
        {submitted && (
          <AIFeedbackCard 
            score="B1.2 (Good)"
            feedbackText="You have successfully described a trip and addressed all parts of the prompt. Your vocabulary is appropriate for this level, though there are minor grammatical issues to work on."
            suggestions={[
              "Consider breaking longer sentences into two for better readability.",
              "Watch out for past tense consistency (e.g., instead of 'I go to the beach yesterday', use 'I went to the beach yesterday').",
              "Try incorporating more descriptive adjectives (e.g., 'breathtaking' instead of just 'nice')."
            ]}
            onTryAgain={() => { setSubmitted(false); }}
          />
        )}
      </div>
    </div>
  );
}
