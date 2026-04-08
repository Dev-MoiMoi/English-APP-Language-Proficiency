import { Link } from 'react-router-dom';
import { BookOpen, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header style={{ 
      backgroundColor: 'var(--surface)', 
      borderBottom: '1px solid var(--border)',
      padding: '16px 0',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container flex-between">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.25rem' }}>
          <BookOpen />
          <span>EnglishApp</span>
        </Link>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {/* Level Badge Placeholder */}
          <div style={{
            background: 'var(--primary-light)',
            color: 'white',
            padding: '4px 12px',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.875rem',
            fontWeight: '600'
          }}>
            B1 Intermediate
          </div>
          
          <button style={{
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-full)',
            width: '40px', height: '40px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text-main)'
          }}>
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
