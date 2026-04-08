import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Edit3, Mic, Headphones } from 'lucide-react';

export default function LandingPage() {
  const [selectedLevel, setSelectedLevel] = useState('B1');
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  const features = [
    { title: 'Reading', desc: 'Improve comprehension with tailored texts.', icon: <BookOpen color="var(--accent-reading)" />, color: 'var(--accent-reading-light)' },
    { title: 'Writing', desc: 'Write effectively with instant grammar feedback.', icon: <Edit3 color="var(--accent-writing)" />, color: 'var(--accent-writing-light)' },
    { title: 'Speaking', desc: 'Practice pronunciation with AI evaluation.', icon: <Mic color="var(--accent-speaking)" />, color: 'var(--accent-speaking-light)' },
    { title: 'Listening', desc: 'Understand real-world spoken English.', icon: <Headphones color="var(--accent-listening)" />, color: 'var(--accent-listening-light)' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ background: 'var(--primary-light)', padding: '80px 24px', textAlign: 'center', color: 'var(--text-main)' }}>
        <div className="container">
          <h1 style={{ color: 'var(--primary-dark)', marginBottom: '16px', fontSize: '3rem', fontWeight: 'bold' }}>
            Improve Your English, One Skill at a Time
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 32px', color: '#333' }}>
            The ultimate academic platform designed for Filipino students to master Reading, Writing, Speaking, and Listening.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/dashboard" className="btn-primary">Get Started</Link>
            <Link to="/dashboard" className="btn-outline" style={{ background: 'white' }}>Sign In</Link>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section style={{ padding: '64px 24px' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Master 4 Core Skills</h2>
          <div className="grid-2x2">
            {features.map((feat, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ background: feat.color, padding: '16px', borderRadius: 'var(--radius-full)' }}>
                  {feat.icon}
                </div>
                <div>
                  <h3 style={{ marginBottom: '4px' }}>{feat.title}</h3>
                  <p style={{ color: 'var(--text-muted)' }}>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEFR Level Selector Section */}
      <section style={{ padding: '40px 24px 80px', background: 'white' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Tailored to Your Level (CEFR)</h2>
          <div style={{ display: 'flex', justifyContent: 'center', overflowX: 'auto', paddingBottom: '16px' }}>
            <div style={{ 
              display: 'flex', 
              background: 'var(--bg)', 
              borderRadius: 'var(--radius-full)',
              padding: '8px',
              border: '1px solid var(--border)'
            }}>
              {levels.map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  style={{
                    padding: '8px 24px',
                    borderRadius: 'var(--radius-full)',
                    background: selectedLevel === lvl ? 'var(--primary)' : 'transparent',
                    color: selectedLevel === lvl ? 'white' : 'var(--text-main)',
                    fontWeight: '600',
                    transition: 'all 0.2s',
                  }}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '8px' }}>
            From absolute beginner to proficient, we have materials for you.
          </p>
        </div>
      </section>
    </div>
  );
}
