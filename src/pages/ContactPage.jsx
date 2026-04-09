import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '80vh', background: '#f5f7fa', paddingTop: '60px', paddingBottom: '80px' }}>
        <section className="section" id="contact" style={{ padding: '0', background: 'transparent' }}>
          <div className="container">
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h1 className="section-title" style={{ marginBottom: '8px' }}>Contact Us</h1>
              <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '0 auto 16px', borderRadius: '4px' }}></div>
              <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
                Have questions or concerns? We'd love to hear from you.
              </p>
            </div>

            {/* Main Content */}
            <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              
              {/* Copyright Notice Box */}
              <div style={{ background: '#e0f2f1', border: '1px solid #b2dfdb', borderRadius: 'var(--radius-lg)', padding: '32px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                  <div style={{ background: 'white', padding: '12px', borderRadius: '50%', color: 'var(--primary)', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                    <Shield size={28} />
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px' }}>Copyright Notice</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.65', fontSize: '0.95rem' }}>
                  This website strictly adheres to copyright regulations and does not share any copyrighted content.
                  All posts shared on this platform are intended for educational purposes only.
                  If you believe that your content is being shared without proper authorization, please contact us at the email address below.
                </p>
              </div>

              {/* Contact Information Card */}
              <div style={{ background: 'white', border: '1px solid var(--border)', borderLeft: '6px solid var(--primary)', borderRadius: 'var(--radius-lg)', padding: '32px', display: 'flex', alignItems: 'center', gap: '24px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ background: 'var(--primary-light)', padding: '16px', borderRadius: '50%', color: 'var(--primary)' }}>
                  <Mail size={32} />
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Email Address</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' }}>
                    <a href="mailto:info@digilingph.edu" style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary)', textDecoration: 'none' }}>info@digilingph.edu</a>
                    <a href="mailto:jeffersoncaparas231@gmail.com" style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary)', textDecoration: 'none' }}>jeffersoncaparas231@gmail.com</a>
                    <a href="mailto:jhonpaulyangyang@gmail.com" style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary)', textDecoration: 'none' }}>jhonpaulyangyang@gmail.com</a>
                    <a href="mailto:alexisssssdelacruz@gmail.com" style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary)', textDecoration: 'none' }}>alexisssssdelacruz@gmail.com</a>
                    <a href="mailto:rafjasonm03@gmail.com" style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary)', textDecoration: 'none' }}>rafjasonm03@gmail.com</a>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    We typically respond within 1–2 business days.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
