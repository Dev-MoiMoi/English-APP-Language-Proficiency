import { useState } from 'react';

const levels = [
  { id: 'A1', label: 'Beginner', desc: 'Can understand basic phrases.' },
  { id: 'A2', label: 'Elementary', desc: 'Can communicate in simple routine tasks.' },
  { id: 'B1', label: 'Intermediate', desc: 'Can deal with most travel situations.' },
  { id: 'B2', label: 'Upper-Intermediate', desc: 'Can understand complex text.' },
  { id: 'C1', label: 'Advanced', desc: 'Can express ideas fluently.' },
  { id: 'C2', label: 'Proficient', desc: 'Can understand almost everything.' }
];

export default function LevelSelectorModal({ onSelect, onSkip }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="modal-overlay">
      <div className="card" style={{ maxWidth: '600px', width: '90%', maxHeight: '90vh', overflowY: 'auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '8px', color: 'var(--primary)' }}>Choose your English level</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '24px' }}>
          Select your CEFR proficiency level to personalize your learning experience.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {levels.map(lvl => (
            <button 
              key={lvl.id}
              onClick={() => setSelected(lvl.id)}
              style={{
                border: `2px solid ${selected === lvl.id ? 'var(--primary)' : 'var(--border)'}`,
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                textAlign: 'left',
                background: selected === lvl.id ? 'var(--primary-light)' : 'var(--surface)',
                color: selected === lvl.id ? 'white' : 'var(--text-main)',
                transition: 'all 0.2s',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ 
                  fontWeight: 'bold', 
                  fontSize: '1.25rem',
                  color: selected === lvl.id ? 'white' : 'var(--primary)'
                }}>{lvl.id}</span>
                <span style={{ fontWeight: '600' }}>{lvl.label}</span>
              </div>
              <p style={{ fontSize: '0.875rem', opacity: 0.9, margin: 0 }}>{lvl.desc}</p>
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginTop: '32px' }}>
          <button 
            className="btn-primary" 
            style={{ width: '100%', maxWidth: '300px' }}
            disabled={!selected}
            onClick={() => selected && onSelect(selected)}
          >
            Confirm Level
          </button>
          <button onClick={onSkip} style={{ color: 'var(--text-muted)', textDecoration: 'underline', fontSize: '0.875rem' }}>
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}
