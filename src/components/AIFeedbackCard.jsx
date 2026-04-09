import { useState } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';

export default function AIFeedbackCard({ feedback, onTryAgain, accentColor = 'var(--primary)' }) {
  return (
    <div className="ai-feedback-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
        <span className="ai-badge">
          <Sparkles size={12} />
          AI Feedback
        </span>
        <button
          onClick={onTryAgain}
          className="btn"
          style={{
            padding: '6px 16px',
            fontSize: '0.82rem',
            background: 'white',
            border: `2px solid ${accentColor}`,
            color: accentColor,
            borderRadius: 'var(--radius-full)',
            gap: '6px'
          }}
        >
          <RefreshCw size={13} />
          Try Again
        </button>
      </div>

      <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
        {feedback}
      </div>
    </div>
  );
}
