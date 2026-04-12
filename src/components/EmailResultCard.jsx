import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Send, CheckCircle, AlertTriangle, ArrowLeft, RefreshCw } from 'lucide-react';
import emailjs from '@emailjs/browser';
import PushButton from './PushButton';

// ─── EmailJS config ─────────────────────────────────────────────────────────
// Set these in your .env file:
//   VITE_EMAILJS_SERVICE_ID=your_service_id
//   VITE_EMAILJS_TEMPLATE_ID=your_template_id
//   VITE_EMAILJS_PUBLIC_KEY=your_public_key
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || '';
const EMAILJS_CONFIGURED  = !!(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
// ─────────────────────────────────────────────────────────────────────────────

const CONTACT_EMAIL = 'support@digilingph.com';

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

/**
 * EmailResultCard
 *
 * Props
 * ─────────────────────────────────────────────────────────
 * skillName      string   e.g. "Reading", "Listening"
 * skillColor     string   CSS var or hex, e.g. "var(--reading)"
 * level          string   e.g. "B1"
 * levelLabel     string   e.g. "B1 – Intermediate"
 * activityName   string   e.g. "A Student Discussion"
 * score          number   correct answers (quiz) or undefined (writing/speaking)
 * totalQuestions number   total items  (quiz) or undefined
 * aiFeedback     string   raw AI feedback text
 * aiLoading      boolean  true while AI feedback is still generating
 * onTryAgain     fn       reset the quiz / task
 */
export default function EmailResultCard({
  skillName = 'Activity',
  skillColor = 'var(--primary)',
  level = '',
  levelLabel = '',
  activityName = '',
  score,
  totalQuestions,
  aiFeedback = '',
  aiLoading = false,
  onTryAgain,
}) {
  const navigate = useNavigate();

  const [email, setEmail]     = useState('');
  const [status, setStatus]   = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const valid = isValidEmail(email);
  const canSend = valid && !aiLoading;

  const handleSend = async (e) => {
    e.preventDefault();
    if (!canSend) return;
    setStatus('loading');
    setErrorMsg('');

    if (!EMAILJS_CONFIGURED) {
      setErrorMsg('Email service is not configured. Please contact support@digilingph.com directly.');
      setStatus('error');
      return;
    }

    // Extract a tips section from the AI feedback if available
    const extractTips = (fb) => {
      if (!fb) return 'Keep practicing regularly and review any mistakes to improve!';
      // Try to find a tips/suggestions/recommendations section in the feedback
      const tipsMatch = fb.match(/(?:tips?|suggestions?|recommendations?|to improve|try this|practice)[:\s]*([\s\S]*)/i);
      if (tipsMatch && tipsMatch[1] && tipsMatch[1].trim().length > 20) {
        return tipsMatch[1].trim().substring(0, 500);
      }
      // If no explicit tips section, use the last portion of feedback
      const lines = fb.split('\n').filter(l => l.trim());
      if (lines.length > 2) {
        return lines.slice(-3).join('\n');
      }
      return 'Keep practicing regularly and review any mistakes to improve!';
    };

    const userName = email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    const templateParams = {
      // ── Recipient fields (must match EmailJS "To Email" = {{to_email}}) ──
      to_email: email,             // The user's input email — where the email is SENT TO
      email: email,                // Template Reply-To: {{email}}
      name: userName,              // Template From Name: {{name}}
      user_name: userName,         // Template greeting: Hello, {{user_name}}!

      // ── Activity summary fields ──
      skill: skillName,            // Template: {{skill}}
      level: levelLabel || level,  // Template: {{level}}
      activity_name: activityName, // Template: {{activity_name}}
      date: new Date().toLocaleDateString('en-PH', {
        year: 'numeric', month: 'long', day: 'numeric',
      }),                          // Template: {{date}}

      // ── Score fields ──
      SCORE: score !== undefined ? score : 'N/A',     // Template: {{SCORE}}
      TOTAL: totalQuestions !== undefined ? totalQuestions : 'N/A', // Template: {{TOTAL}}

      // ── Feedback fields ──
      feedback: aiFeedback || 'No feedback available. Complete the activity to receive personalized feedback.',
      tips: extractTips(aiFeedback),

      // ── Fallback / extra fields for compatibility ──
      to_name: userName,
      skill_name: skillName,
      cefr_level: levelLabel || level,
      score_display: score !== undefined ? `${score} / ${totalQuestions}` : 'N/A',
      ai_feedback: aiFeedback || 'No feedback available.',
      date_completed: new Date().toLocaleDateString('en-PH', {
        year: 'numeric', month: 'long', day: 'numeric',
      }),
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
    } catch (err) {
      console.error(err);
      setErrorMsg('We couldn\'t send your results. Please check your email and try again.');
      setStatus('error');
    }
  };

  /* ── SUCCESS ─────────────────────────────────────────────────────────────── */
  if (status === 'success') {
    return (
      <div style={card}>
        <div style={topBorder('#388e3c')} />
        <div style={{ padding: '36px 32px', textAlign: 'center' }}>
          <div style={{ animation: 'bounceIn 0.5s ease', display: 'inline-block', marginBottom: 16 }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%',
              background: 'linear-gradient(135deg,#43a047,#66bb6a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto', boxShadow: '0 6px 20px rgba(67,160,71,0.3)',
            }}>
              <CheckCircle size={36} color="white" strokeWidth={2.5} />
            </div>
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1a1a2e', marginBottom: 8 }}>
            Results Sent Successfully!
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: 4 }}>
            We sent your results to:
          </p>
          <p style={{ fontWeight: 700, color: skillColor, fontSize: '1rem', marginBottom: 16 }}>
            {email}
          </p>
          <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: 1.6, maxWidth: 340, margin: '0 auto 28px' }}>
            Please check your inbox. If you don't see it, check your spam folder.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <PushButton
              variant="secondary"
              text="Try Again"
              icon={<RefreshCw size={15} />}
              onClick={onTryAgain}
            />
            <PushButton
              variant="secondary"
              text="Back to Skills"
              icon={<ArrowLeft size={15} />}
              onClick={() => navigate('/')}
            />
          </div>
        </div>
        <style>{bounceInKeyframe}</style>
      </div>
    );
  }

  /* ── ERROR ───────────────────────────────────────────────────────────────── */
  if (status === 'error') {
    return (
      <div style={card}>
        <div style={topBorder('#d32f2f')} />
        <div style={{ padding: '36px 32px', textAlign: 'center' }}>
          <div style={{
            width: 64, height: 64, borderRadius: '50%',
            background: '#ffebee', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 16px',
          }}>
            <AlertTriangle size={30} color="#d32f2f" />
          </div>

          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1a1a2e', marginBottom: 8 }}>
            Oops! Something went wrong.
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.6, maxWidth: 340, margin: '0 auto 20px' }}>
            {errorMsg || "We couldn't send your results. Please check your email and try again."}
          </p>

          <div style={{ marginBottom: 14 }}>
            <PushButton
              variant="secondary"
              text="Try Again"
              icon={<RefreshCw size={15} />}
              onClick={() => { setStatus('idle'); setErrorMsg(''); }}
              style={{ width: '100%' }}
            />
          </div>
          <p style={{ fontSize: '0.78rem', color: '#aaa' }}>
            If the problem continues, contact us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: '#00838F', fontWeight: 600 }}>
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    );
  }

  /* ── IDLE (default) ──────────────────────────────────────────────────────── */
  return (
    <div style={card}>
      <div style={topBorder(skillColor)} />
      <div style={{ padding: '28px 32px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 20 }}>
          <div style={{
            width: 42, height: 42, borderRadius: 12, flexShrink: 0,
            background: skillColor + '18',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Mail size={20} color={skillColor} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1a1a2e', marginBottom: 3 }}>
              Get Your Results in Your Inbox
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#777', lineHeight: 1.55 }}>
              Enter your email address and we'll send you your score and personalized feedback.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSend} noValidate>
          {/* Email input */}
          <div style={{ position: 'relative', marginBottom: 12 }}>
            <input
              id="email-result-input"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email address"
              style={{
                width: '100%',
                padding: '13px 44px 13px 16px',
                borderRadius: 30,
                border: `2px solid ${email ? (valid ? '#43a047' : '#e0e0e0') : '#e0e0e0'}`,
                fontSize: '16px', /* Prevent iOS zoom */
                minHeight: '48px',
                outline: 'none',
                fontFamily: 'Poppins, Inter, sans-serif',
                color: '#1a1a2e',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s, box-shadow 0.2s',
                boxShadow: email && valid ? '0 0 0 3px rgba(0,131,143,0.12)' : 'none',
              }}
              onFocus={e => {
                e.target.style.borderColor = valid ? '#43a047' : skillColor;
                e.target.style.boxShadow = `0 0 0 3px ${skillColor}20`;
              }}
              onBlur={e => {
                e.target.style.borderColor = email ? (valid ? '#43a047' : '#e0e0e0') : '#e0e0e0';
                e.target.style.boxShadow = 'none';
              }}
            />
            {/* Validation checkmark */}
            {email && valid && (
              <div style={{
                position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
                animation: 'fadeIn 0.2s ease',
              }}>
                <CheckCircle size={18} color="#43a047" />
              </div>
            )}
          </div>

          {/* Waiting for AI feedback notice */}
          {aiLoading && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: '#fff8e1', border: '1px solid #ffe082',
              borderRadius: 12, padding: '10px 16px', marginBottom: 12,
            }}>
              <div style={{
                width: 18, height: 18, border: '2.5px solid #f9a825',
                borderTopColor: 'transparent', borderRadius: '50%',
                animation: 'spin 0.8s linear infinite', flexShrink: 0,
              }} />
              <p style={{ fontSize: '0.82rem', color: '#e65100', fontWeight: 600, margin: 0 }}>
                Please wait — AI feedback is still generating...
              </p>
            </div>
          )}

          <div style={{ width: '100%', marginBottom: 14 }}>
            <PushButton
              variant="email"
              text={aiLoading ? 'Waiting for AI Feedback...' : 'Send My Results'}
              icon={<Send size={16} />}
              type="submit"
              disabled={!canSend}
              isLoading={status === 'loading'}
              style={{ width: '100%', minHeight: '52px' }}
            />
          </div>
        </form>

        {/* Privacy note */}
        <p style={{ fontSize: '0.76rem', color: '#aaa', textAlign: 'center', lineHeight: 1.5 }}>
          🔒 We only use your email to send your results. We do not store or share your information.
        </p>
      </div>
    </div>
  );
}

/* ── Shared style helpers ───────────────────────────────────────────────────── */
const card = {
  background: 'white',
  borderRadius: 20,
  boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
  overflow: 'hidden',
  fontFamily: 'Poppins, Inter, sans-serif',
  position: 'relative',
};

const topBorder = (color) => ({
  height: 5,
  background: color,
  width: '100%',
});

const spinner = (color) => ({
  width: 48, height: 48,
  border: `4px solid ${color}22`,
  borderTopColor: color,
  borderRadius: '50%',
  animation: 'spin 0.8s linear infinite',
  margin: '0 auto',
});

const solidBtn = (color) => ({
  display: 'inline-flex', alignItems: 'center', gap: 7,
  padding: '11px 22px', borderRadius: 30, border: 'none',
  background: color, color: 'white', fontWeight: 700,
  fontSize: '0.88rem', cursor: 'pointer',
  fontFamily: 'Poppins, Inter, sans-serif', transition: 'filter 0.2s',
});

const outlineBtn = (color) => ({
  display: 'inline-flex', alignItems: 'center', gap: 7,
  padding: '11px 22px', borderRadius: 30,
  border: `2px solid ${color}`, background: 'transparent',
  color: color, fontWeight: 700, fontSize: '0.88rem',
  cursor: 'pointer', fontFamily: 'Poppins, Inter, sans-serif',
  transition: 'background 0.2s',
});

const bounceInKeyframe = `
  @keyframes bounceIn {
    0%   { transform: scale(0.3); opacity: 0; }
    50%  { transform: scale(1.1); opacity: 1; }
    70%  { transform: scale(0.95); }
    100% { transform: scale(1); }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  @keyframes fadeIn {
    from { opacity: 0; } to { opacity: 1; }
  }
`;
