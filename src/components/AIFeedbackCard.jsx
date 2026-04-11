import { useState, useEffect, useRef } from 'react';
import { Sparkles, AlertTriangle, RefreshCw } from 'lucide-react';
import { LOADING_MESSAGES } from '../services/feedbackService';

// Typewriter speed (ms per character)
const TYPEWRITER_SPEED = 28;

// ─── Typewriter hook ──────────────────────────────────────────────────────────
function useTypewriter(text, enabled) {
  const [displayed, setDisplayed] = useState('');
  const idxRef = useRef(0);

  useEffect(() => {
    if (!enabled || !text) { setDisplayed(text); return; }
    setDisplayed('');
    idxRef.current = 0;
    const interval = setInterval(() => {
      idxRef.current++;
      setDisplayed(text.slice(0, idxRef.current));
      if (idxRef.current >= text.length) clearInterval(interval);
    }, TYPEWRITER_SPEED);
    return () => clearInterval(interval);
  }, [text, enabled]);

  return displayed;
}

/**
 * AIFeedbackCard
 *
 * Props
 * ──────────────────────────────────────────────────────────
 * isLoading   boolean   Show skeleton/loading state
 * feedback    string    Raw AI feedback text (when loaded)
 * error       string    Error message (when failed)
 * accentColor string    CSS color for section headers (matches skill)
 * onRetry     fn        Called when user clicks "Try Again" on error
 */
export default function AIFeedbackCard({
  isLoading = false,
  feedback = '',
  error = '',
  accentColor = 'var(--primary)',
  onRetry,
}) {
  // Cycling loading message
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    if (!isLoading) { setMsgIdx(0); return; }
    const timers = LOADING_MESSAGES.map(({ delay }, i) =>
      setTimeout(() => setMsgIdx(i), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [isLoading]);

  // Typewriter for success state
  const displayed = useTypewriter(feedback, !!feedback);

  /* ── LOADING ─────────────────────────────────────────────────────────────── */
  if (isLoading) {
    const currentMsg = LOADING_MESSAGES[msgIdx]?.text ?? '✦ Analyzing your response...';
    return (
      <div style={cardStyle}>
        <div style={{ borderLeft: `4px solid ${accentColor}`, padding: '20px 24px' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <Sparkles size={16} color={accentColor} style={{ animation: 'aifPulse 1.5s ease-in-out infinite' }} />
            <span style={{ fontWeight: 700, color: accentColor, fontSize: '0.95rem' }}>Feedback</span>
          </div>

          {/* Shimmer skeleton */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
            {[100, 80, 92, 70, 85, 60].map((w, i) => (
              <div key={i} style={{
                height: 11, width: `${w}%`, borderRadius: 6,
                background: 'linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%)',
                backgroundSize: '200% 100%',
                animation: `aifShimmer 1.5s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }} />
            ))}
          </div>

          {/* Cycling status message */}
          <p style={{
            fontSize: '0.84rem', color: accentColor, fontStyle: 'italic',
            display: 'flex', alignItems: 'center', gap: 6,
            animation: 'aifFadeIn 0.4s ease',
            key: currentMsg, // force re-render
          }}>
            {currentMsg}
          </p>
        </div>
        <style>{keyframes}</style>
      </div>
    );
  }

  /* ── ERROR ───────────────────────────────────────────────────────────────── */
  if (error) {
    return (
      <div style={{ ...cardStyle, background: '#fff8f8', border: '1px solid #ffcdd2' }}>
        <div style={{ borderLeft: '4px solid #d32f2f', padding: '20px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%', background: '#ffebee', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <AlertTriangle size={18} color="#d32f2f" />
            </div>
            <div>
              <p style={{ fontWeight: 700, color: '#c62828', fontSize: '0.95rem', marginBottom: 4 }}>
                Feedback Unavailable
              </p>
              <p style={{ fontSize: '0.88rem', color: '#888', lineHeight: 1.6 }}>
                {error || 'AI feedback could not be loaded. Your score has been recorded.'}
              </p>
            </div>
          </div>

          {onRetry && (
            <button
              onClick={onRetry}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '9px 20px', borderRadius: 30,
                background: 'var(--primary)', border: 'none',
                color: 'white', fontWeight: 700, fontSize: '0.85rem',
                cursor: 'pointer', fontFamily: 'Poppins, Inter, sans-serif',
                transition: 'filter 0.2s', marginTop: 4,
              }}
              onMouseEnter={e => e.currentTarget.style.filter = 'brightness(0.88)'}
              onMouseLeave={e => e.currentTarget.style.filter = 'none'}
            >
              <RefreshCw size={14} /> Try Again
            </button>
          )}
        </div>
        <style>{keyframes}</style>
      </div>
    );
  }

  /* ── SUCCESS ─────────────────────────────────────────────────────────────── */
  if (feedback) {
    return (
      <div style={{ ...cardStyle, background: '#FFFDE7', border: '1px solid #FFF176' }}>
        <div style={{ borderLeft: `4px solid ${accentColor}`, padding: '20px 24px' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <Sparkles size={16} color={accentColor} />
            <span style={{ fontWeight: 700, color: accentColor, fontSize: '0.95rem' }}>AI Feedback</span>
          </div>

          {/* Typewriter feedback body */}
          <div style={{ fontSize: '15px', color: '#333', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
            {displayed.split('\n').map((line, i) => {
              if (!line.trim()) return <div key={i} style={{ height: 6 }} />;
              const isHeader = /^(SCORE|RESULT|GRAMMAR|VOCABULARY|STRENGTHS|IMPROVEMENTS|OVERALL FEEDBACK|CORRECT ANSWERS REVIEW|READING TIPS|LISTENING TIPS|REVIEW|FLUENCY SCORE|CLARITY SCORE|GRAMMAR CHECK|PRONUNCIATION TIPS):/i.test(line.trim());
              return isHeader
                ? (
                  <p key={i} style={{
                    fontWeight: 700, color: accentColor,
                    marginTop: 14, marginBottom: 2,
                    fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.04em',
                  }}>
                    {line}
                  </p>
                )
                : (
                  <p key={i} style={{
                    margin: '2px 0',
                    paddingLeft: line.trim().startsWith('-') ? 12 : 0,
                  }}>
                    {line}
                  </p>
                );
            })}
          </div>

          {/* Disclaimer */}
          <p style={{
            marginTop: 18, fontSize: '0.76rem', color: 'var(--primary)',
            fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: 4,
          }}>
            <Sparkles size={11} /> Feedback generated by DigiLing AI
          </p>
        </div>
        <style>{keyframes}</style>
      </div>
    );
  }

  return null;
}

// ─── Shared styles ────────────────────────────────────────────────────────────

const cardStyle = {
  background: 'white',
  borderRadius: 14,
  overflow: 'hidden',
  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
  fontFamily: 'Poppins, Inter, sans-serif',
  marginBottom: 16,
};

const keyframes = `
  @keyframes aifShimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  @keyframes aifPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.5; transform: scale(1.15); }
  }
  @keyframes aifFadeIn {
    from { opacity: 0; transform: translateY(4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;
