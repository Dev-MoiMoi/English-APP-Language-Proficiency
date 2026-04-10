import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import logoImg from '../assets/Logo.png';

export default function Footer() {
  return (
    <>


      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-brand" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.04em', fontFamily: 'Poppins, Inter, sans-serif' }}>
                <img src={logoImg} alt="DigiLing Logo" style={{ height: '0.58em', transform: 'translateY(0.04em)' }} />
                DigiLing
              </div>
              <div className="footer-tagline">Your English Learning Companion</div>
            </div>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#skills">Skills</Link></li>
              <li><Link to="/#how-to">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-bottom">
            © 2025 DigiLing. All rights reserved. Designed for Filipino students.
          </div>
        </div>
      </footer>
    </>
  );
}
