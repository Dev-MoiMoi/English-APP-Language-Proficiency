import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

export default function EmailResultComponent({ skillName, score }) {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    // Simulate email send
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <div className="email-result-box">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Mail size={20} color="var(--primary)" />
        <div>
          <p style={{ fontWeight: '600', fontSize: '0.95rem' }}>Want to save your results?</p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Enter your email to receive your {skillName} results
          </p>
        </div>
      </div>

      {sent ? (
        <div className="email-success">
          <CheckCircle size={18} color="var(--writing)" />
          Results sent! Check your inbox.
        </div>
      ) : (
        <form onSubmit={handleSend}>
          <div className="email-input-row">
            <input
              type="email"
              className="email-input"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ padding: '10px 22px', fontSize: '0.88rem' }}
              disabled={loading}
            >
              {loading ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{
                    width: '14px', height: '14px',
                    border: '2px solid rgba(255,255,255,0.4)',
                    borderTopColor: 'white',
                    borderRadius: '50%',
                    animation: 'spin 0.7s linear infinite'
                  }} />
                  Sending...
                </span>
              ) : (
                <>
                  <Send size={14} />
                  Send to My Email
                </>
              )}
            </button>
          </div>
        </form>
      )}

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
