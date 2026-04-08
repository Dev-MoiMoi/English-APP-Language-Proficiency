import { Sparkles } from 'lucide-react';

export default function AIFeedbackCard({ score, feedbackText, suggestions, onTryAgain }) {
  return (
    <div className="ai-feedback-card">
      <div style={{ flexShrink: 0, marginTop: '2px' }}>
        <Sparkles size={24} color="var(--primary)" />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span className="ai-feedback-badge">
            AI Feedback
          </span>
          {score && (
            <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
              Score: {score}
            </span>
          )}
        </div>
        
        <p style={{ marginBottom: '16px', color: 'var(--text-main)' }}>
          {feedbackText}
        </p>
        
        {suggestions && suggestions.length > 0 && (
          <div style={{ 
            background: 'var(--accent-ai)', 
            padding: '12px', 
            borderRadius: 'var(--radius-md)',
            marginBottom: '16px'
          }}>
            <h4 style={{ marginBottom: '8px', fontSize: '0.875rem' }}>Suggestions for improvement:</h4>
            <ul style={{ paddingLeft: '20px', fontSize: '0.875rem', color: 'var(--text-main)', margin: 0 }}>
              {suggestions.map((suggestion, idx) => (
                <li key={idx} style={{ marginBottom: '4px' }}>{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
        
        {onTryAgain && (
          <button className="btn-outline" onClick={onTryAgain}>
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}
