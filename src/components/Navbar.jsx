import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/Logo.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* LEFT: Logo */}
        <Link to="/" className="navbar-logo" onClick={() => setMobileMenuOpen(false)}>
          <img src={logoImg} alt="DigiLing Logo" style={{ height: '36px' }} />
          DigiLing
        </Link>

        {/* RIGHT (Desktop): Links */}
        <ul className="navbar-links">
          <li><a href="/#skills">Skills</a></li>
          <li><a href="/#how-to">How to Use</a></li>
          <li><a href="/#levels">Find Your Level</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* MOBILE: Hamburger Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={24} color="#00838F" /> : <Menu size={24} color="#00838F" />}
        </button>
      </div>

      {/* MOBILE: Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-menu-links">
            <li><a href="/#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="/#how-to" onClick={() => setMobileMenuOpen(false)}>How to Use</a></li>
            <li><a href="/#levels" onClick={() => setMobileMenuOpen(false)}>Find Your Level</a></li>
            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
