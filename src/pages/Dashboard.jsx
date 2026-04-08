import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Edit3, Mic, Headphones } from 'lucide-react';
import LevelSelectorModal from '../components/LevelSelectorModal';

export default function Dashboard() {
  const [showLevelModal, setShowLevelModal] = useState(true);
  const [level, setLevel] = useState('B1'); // Default fallback

  const handleSelectLevel = (selected) => {
    setLevel(selected);
    setShowLevelModal(false);
  };

  const modules = [
    { title: 'Reading Module', path: '/reading', desc: 'Read a passage and answer questions.', progress: 15, max: 20, icon: <BookOpen color="var(--accent-reading)" />, color: 'var(--accent-reading)' },
    { title: 'Writing Module', path: '/writing', desc: 'Write a response to a prompt.', progress: 4, max: 20, icon: <Edit3 color="var(--accent-writing)" />, color: 'var(--accent-writing)' },
    { title: 'Speaking Module', path: '/speaking', desc: 'Record your reading of a phrase.', progress: 8, max: 20, icon: <Mic color="var(--accent-speaking)" />, color: 'var(--accent-speaking)' },
    { title: 'Listening Module', path: '/listening', desc: 'Listen to audio and answer the quiz.', progress: 12, max: 20, icon: <Headphones color="var(--accent-listening)" />, color: 'var(--accent-listening)' },
  ];

  return (
    <div style={{ padding: '40px 24px', backgroundColor: 'var(--bg)', minHeight: 'calc(100vh - 140px)' }}>
      {showLevelModal && <LevelSelectorModal onSelect={handleSelectLevel} onSkip={() => setShowLevelModal(false)} />}
      
      <div className="container">
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>Welcome back, Student!</h1>
          <p style={{ color: 'var(--text-muted)' }}>Continue your {level} English language journey.</p>
        </div>

        <div className="grid-2x2">
          {modules.map((mod, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ background: `${mod.color}22`, padding: '12px', borderRadius: 'var(--radius-lg)' }}>
                  {mod.icon}
                </div>
                <div>
                  <h2 style={{ fontSize: '1.25rem', margin: 0 }}>{mod.title}</h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{mod.desc}</p>
                </div>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '8px', color: 'var(--text-muted)' }}>
                  <span>Progress</span>
                  <span>{mod.progress}/{mod.max} Lessons</span>
                </div>
                <div style={{ background: 'var(--border)', height: '8px', borderRadius: 'var(--radius-full)', marginBottom: '24px', overflow: 'hidden' }}>
                  <div style={{ background: mod.color, height: '100%', width: `${(mod.progress / mod.max) * 100}%` }}></div>
                </div>

                <Link to={mod.path} className="btn-primary" style={{ display: 'block', textAlign: 'center', background: mod.color }}>
                  Continue
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
