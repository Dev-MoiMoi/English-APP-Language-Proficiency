import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

const LEVELS = [
  { code: 'A1', name: 'Beginner',          desc: 'Basic words and phrases' },
  { code: 'A2', name: 'Elementary',        desc: 'Simple everyday topics' },
  { code: 'B1', name: 'Intermediate',      desc: 'Clear, familiar topics' },
  { code: 'B2', name: 'Upper-Intermediate',desc: 'Complex texts and ideas' },
  { code: 'C1', name: 'Advanced',          desc: 'Fluent and flexible' },
  { code: 'C2', name: 'Proficient',        desc: 'Near-native mastery' },
];

export default function LevelSelectorModal({ skill, skillPath, accentColor, onClose }) {
  const [selected, setSelected] = useState('B1');
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate(`${skillPath}?level=${selected}`);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '4px' }}>
              Choose Your English Level
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              Select the level that best matches your current ability
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              padding: '6px', borderRadius: '8px', color: 'var(--text-muted)',
              transition: 'all 0.2s', flexShrink: 0
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Skill Context */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: `${accentColor}22`, border: `1px solid ${accentColor}44`,
          borderRadius: 'var(--radius-full)', padding: '4px 14px',
          fontSize: '0.8rem', fontWeight: '600', color: accentColor,
          marginBottom: '4px'
        }}>
          Skill: {skill}
        </div>

        {/* Level Grid */}
        <div className="level-grid">
          {LEVELS.map((lvl) => (
            <div
              key={lvl.code}
              className={`level-card ${selected === lvl.code ? 'selected' : ''}`}
              onClick={() => setSelected(lvl.code)}
            >
              <div className="level-card-badge" style={{ marginBottom: '8px' }}>{lvl.code}</div>
              <div className="level-card-name" style={{ marginBottom: '6px', fontSize: '1rem' }}>{lvl.name}</div>
              <div className="level-card-desc" style={{ lineHeight: '1.4', fontSize: '0.85rem' }}>{lvl.desc}</div>
            </div>
          ))}
        </div>

        {/* Confirm Button */}
        <button
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center', fontSize: '0.95rem', padding: '13px' }}
          onClick={handleConfirm}
        >
          Confirm Level — {selected}
        </button>
      </div>
    </div>
  );
}
