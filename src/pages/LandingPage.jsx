import { useState } from 'react';
import { Headphones, Mic, BookOpen, Edit3, ChevronRight, CheckCircle, Shield, Mail, Target, BarChart2, CheckCircle2, RotateCcw, GraduationCap } from 'lucide-react';
import LevelSelectorModal from '../components/LevelSelectorModal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logoImg from '../assets/Logo.png';

const SKILLS = [
  {
    id: 'listening',
    label: 'Listening',
    icon: <Headphones size={36} />,
    color: '#7B1FA2',
    colorLight: '#F3E5F5',
    path: '/listening',
    desc: 'Train your ear by listening to audio clips and answering comprehension questions.',
    steps: ['Listen', 'Quiz', 'Result', 'Feedback'],
  },
  {
    id: 'speaking',
    label: 'Speaking',
    icon: <Mic size={36} />,
    color: '#F57C00',
    colorLight: '#FFF3E0',
    path: '/speaking',
    desc: 'Build your confidence by reading aloud and recording your spoken responses.',
    steps: ['Read Aloud', 'Record', 'Submit', 'Feedback'],
  },
  {
    id: 'reading',
    label: 'Reading',
    icon: <BookOpen size={36} />,
    color: '#1976D2',
    colorLight: '#E3F2FD',
    path: '/reading',
    desc: 'Strengthen your comprehension by reading passages and answering questions.',
    steps: ['Read', 'Answer', 'Result', 'Feedback'],
  },
  {
    id: 'writing',
    label: 'Writing',
    icon: <Edit3 size={36} />,
    color: '#388E3C',
    colorLight: '#E8F5E9',
    path: '/writing',
    desc: 'Express your ideas clearly by writing responses to given prompts.',
    steps: ['Read', 'Write', 'Submit', 'Feedback'],
  },
];

const LEVELS = [
  { code: 'A1', name: 'Beginner',          desc: 'You can understand and use basic everyday expressions and simple phrases.', difficultyColor: '#4CAF50' },
  { code: 'A2', name: 'Elementary',        desc: 'You can communicate in simple and routine tasks on familiar topics.', difficultyColor: '#4CAF50' },
  { code: 'B1', name: 'Intermediate',      desc: 'You can handle most situations while traveling and describe experiences.', difficultyColor: '#FF9800' },
  { code: 'B2', name: 'Upper-Intermediate',desc: 'You can interact with fluency and discuss a wide range of topics clearly.', difficultyColor: '#FF9800' },
  { code: 'C1', name: 'Advanced',          desc: 'You can express ideas fluently and spontaneously without much searching.', difficultyColor: '#F44336' },
  { code: 'C2', name: 'Proficient',        desc: 'You can understand virtually everything and express yourself with precision.', difficultyColor: '#F44336' },
];

const HOW_TO_STEPS = [
  {
    num: 1,
    icon: <Target size={24} color="white" />,
    title: 'Choose a Skill',
    desc: 'Select one of the four macro skills: Listening, Speaking, Reading, or Writing. Each skill targets a specific area of English communication.',
  },
  {
    num: 2,
    icon: <BarChart2 size={24} color="white" />,
    title: 'Pick Your Level',
    desc: 'Choose your CEFR level (A1–C2) based on your current English ability. The content will automatically adapt to your selected level.',
  },
  {
    num: 3,
    icon: <CheckCircle2 size={24} color="white" />,
    title: 'Complete the Tasks',
    desc: 'Follow the instructions and complete the activities provided. Each task is designed to build your skills step by step.',
  },
  {
    num: 4,
    icon: <RotateCcw size={24} color="white" />,
    title: 'Practice Regularly',
    desc: 'Repeat tasks and try different levels to improve your confidence and accuracy. Consistent practice leads to better results.',
  },
];

export default function LandingPage() {
  const [modalSkill, setModalSkill] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('B1');

  return (
    <>
      <Navbar />
      <div>
      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-orbs" aria-hidden>
          <div className="hero-orb" style={{ width: 400, height: 400, top: '-100px', right: '-100px', animationDelay: '0s' }} />
          <div className="hero-orb" style={{ width: 200, height: 200, bottom: '-40px', left: '5%', animationDelay: '2s' }} />
          <div className="hero-orb" style={{ width: 100, height: 100, top: '30%', left: '10%', animationDelay: '1s' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <GraduationCap size={16} /> Designed for Filipino Students &nbsp;·&nbsp; CEFR A1–C2
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '32px', gap: '20px', flexWrap: 'wrap' }}>
            <img src={logoImg} alt="DigiLing Logo" style={{ width: 'clamp(80px, 15vw, 120px)', height: 'auto' }} />
            <h1 className="hero-logo" style={{ marginBottom: 0 }}>DigiLing</h1>
          </div>

          <p className="hero-tagline">Improve Your English,<br className="mobile-only" /> One Skill at a Time</p>

          <p className="hero-body">
            Improve your English through the four essential communication skills: Listening, Speaking,
            Reading, and Writing. This platform is designed to help you practice step by step, from
            beginner to advanced levels (A1–C2).
            <br /><br />
            Each skill offers interactive and level-appropriate tasks that will help you understand,
            express, and communicate ideas effectively in real-life situations. Whether you are just
            starting or improving your fluency, this website will guide you at your own pace.
          </p>

          <div className="hero-cta">
            <a href="#skills" className="btn btn-primary">
              Get Started
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section" id="skills" style={{ background: '#f5f7fa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>Choose a Skill</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '0 auto 16px', borderRadius: '4px' }}></div>
            <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Select one of the four macro skills to begin practicing your English.
            </p>
          </div>

          <div className="skills-grid">
            {SKILLS.map((skill) => (
              <div 
                key={skill.id} 
                className={`skill-card ${skill.id}`}
                onClick={() => setModalSkill(skill)}
                style={{ padding: '20px' }} /* Required 20px card padding */
              >
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <div
                    className="skill-icon-wrap-large"
                    style={{ background: skill.colorLight, color: skill.color, width: 'clamp(40px, 10vw, 90px)', height: 'clamp(40px, 10vw, 90px)' }}
                  >
                    <span style={{ fontSize: '1.75rem' }}>{skill.icon}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-primary)', textAlign: 'center', marginBottom: '12px' }}>
                  {skill.label}
                </h3>

                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6', textAlign: 'center', marginBottom: '24px' }}>
                  {skill.desc}
                </p>

                <div className="skill-flow-steps" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
                  {skill.steps.map((step, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                      <span className="flow-pill" style={{ background: skill.colorLight, color: skill.color }}>
                        {step}
                      </span>
                      {i < skill.steps.length - 1 && (
                        <span style={{ color: 'var(--border)', margin: '0 4px', fontSize: '12px' }}>→</span>
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
                  <button
                    className="btn-skill"
                    style={{ background: skill.color, width: '100%', minHeight: '48px', fontSize: '16px', fontWeight: 'bold' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalSkill(skill);
                    }}
                  >
                    Start
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO USE ── */}
      <section className="section section-alt" id="how-to" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>How to Use DigiLing</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '0 auto 16px', borderRadius: '4px' }}></div>
            <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Follow these simple steps to get started on your English learning journey.
            </p>
          </div>

          <div className="steps-container">
            <div className="steps-connecting-line"></div>
            <div className="horizontal-steps">
              {HOW_TO_STEPS.map((step) => (
                <div key={step.num} className="step-card-modern">
                  <div className="step-background-number" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}>{step.num}</div>
                  <div className="step-content-inner">
                    <div className="step-icon-circle" style={{ width: '40px', height: '40px' }}>
                      {step.icon}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 2, position: 'relative' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-primary)', marginTop: '8px' }}>
                        Step {step.num} &mdash; {step.title}
                      </h3>
                      <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <a href="#skills" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1.1rem', borderRadius: '99px' }}>
              Start Practicing →
            </a>
          </div>
        </div>
      </section>

      {/* ── CEFR LEVELS ── */}
      <section className="section" id="levels" style={{ background: '#f5f7fa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="section-title" style={{ marginBottom: '8px' }}>Find Your Level</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '0 auto 16px', borderRadius: '4px' }}></div>
            <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Choose the CEFR level that best matches your current English ability.
            </p>
          </div>

          <div className="cefr-grid-modern">
            {LEVELS.map((lvl) => (
              <div
                key={lvl.code}
                className="cefr-card-modern"
                style={{ borderLeft: `6px solid ${lvl.difficultyColor}` }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div className="cefr-badge-modern" style={{ color: 'var(--primary)' }}>
                    {lvl.code}
                  </div>
                  <div style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--text-primary)' }}>{lvl.name}</div>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  {lvl.desc}
                </p>
                <div className="cefr-card-cta">
                  <a href="#skills" className="btn btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center', padding: '10px' }}>
                    Start with this Level
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="cefr-progress-container">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <span>Beginner</span>
              <span>Proficient</span>
            </div>
            <div className="cefr-progress-bar">
              {LEVELS.map((lvl) => (
                <div key={lvl.code} className="cefr-progress-segment" style={{ background: lvl.difficultyColor }} title={`${lvl.code} - ${lvl.name}`}>
                  <span className="cefr-progress-label">{lvl.code}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Level Selector Modal */}
      {modalSkill && (
        <LevelSelectorModal
          skill={modalSkill.label}
          skillPath={modalSkill.path}
          accentColor={modalSkill.color}
          onClose={() => setModalSkill(null)}
        />
      )}
      </div>
      <Footer />
    </>
  );
}
