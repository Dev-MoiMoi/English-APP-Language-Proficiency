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
  onTryAgain,
}) {
  const navigate = useNavigate();

  const [email, setEmail]     = useState('');
  const [status, setStatus]   = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const valid = isValidEmail(email);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!valid) return;
    setStatus('loading');
    setErrorMsg('');

    const templateParams = {
      // Core fields we expect the user to use in the template
      to_email: email,
      to_name: email.split('@')[0], // Guess a name for "Hello, {{to_name}}!"
      
      skill_name: skillName,
      Skill: skillName, // Fallback for uppercase template
      
      cefr_level: levelLabel || level,
      CEFR_Level: levelLabel || level, // Fallback
      
      activity_name: activityName,
      Activity: activityName, // Fallback
      
      date_completed: new Date().toLocaleDateString('en-PH', {
        year: 'numeric', month: 'long', day: 'numeric',
      }),
      Date_Completed: new Date().toLocaleDateString('en-PH'), // Fallback
      
      score_display: score !== undefined ? `${score} / ${totalQuestions}` : 'N/A',
      score: score !== undefined ? score : 'N/A',
      total_points: totalQuestions !== undefined ? totalQuestions : 'N/A',
      YOUR_SCORE: score !== undefined ? score : 'N/A', // Fallback
      
      ai_feedback: aiFeedback || 'No feedback available.',
      AI_Feedback: aiFeedback || 'No feedback available.', // Fallback
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
                fontSize: '0.9rem',
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

          {/* Send button */}
          <div style={{ width: '100%', marginBottom: 14 }}>
            <PushButton
              variant="email"
              text="Send My Results"
              icon={<Send size={16} />}
              type="submit"
              disabled={!valid}
              isLoading={status === 'loading'}
              style={{ width: '100%' }}
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
