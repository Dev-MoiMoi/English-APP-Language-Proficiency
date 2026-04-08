import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      padding: '32px 0',
      marginTop: 'auto'
    }}>
      <div className="container flex-between" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        <p>&copy; {new Date().getFullYear()} EnglishApp for Filipino Students. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>Privacy Policy</Link>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>Terms of Service</Link>
          <Link to="/" style={{ color: 'var(--text-muted)' }}>Contact</Link>
        </div>
      </div>
    </footer>
  );
}
