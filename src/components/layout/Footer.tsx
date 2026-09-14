import React from 'react';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { schoolInfo } from '../../data/schoolInfo';
import { StarDoodle, CircleDoodle, ScribbleUnderline } from '../common/DoodleDecorations';
import type { NavTab } from './Navbar';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (tab: NavTab) => {
    onNavigate(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: 'var(--color-purple-deep)', color: '#e9d5ff', position: 'relative', overflow: 'hidden' }}>
      {/* Top Section: Large Playful CTA */}
      <div style={{ backgroundColor: '#2e0854', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', padding: '4.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-10px', left: '10%' }}>
            <StarDoodle size={30} color="#facc15" />
          </div>
          <div style={{ position: 'absolute', bottom: '-10px', right: '10%' }}>
            <CircleDoodle size={34} color="#ec4899" />
          </div>

          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                color: '#fef08a',
                padding: '0.35rem 1.1rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '1rem',
                fontFamily: 'var(--font-display)',
              }}
            >
              ★ Millennium English School
            </span>

            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '1rem',
                lineHeight: 1.2,
                fontFamily: 'var(--font-display)',
              }}
            >
              Ready to Begin the Journey?
            </h2>

            <div style={{ maxWidth: '280px', margin: '0 auto 1.5rem auto' }}>
              <ScribbleUnderline color="#facc15" />
            </div>

            <p style={{ fontSize: '1.1rem', color: '#e9d5ff', lineHeight: 1.65, marginBottom: '2rem' }}>
              Admissions are open for eligible students from Playgroup onwards. Connect with our admissions desk to schedule a personalized walkthrough.
            </p>

            <button
              onClick={onOpenEnquiry}
              className="btn btn-cta btn-lg"
              style={{
                backgroundColor: '#22c55e',
                color: '#ffffff',
                fontSize: '1.1rem',
                padding: '0.85rem 2.25rem',
                borderRadius: '9999px',
              }}
            >
              <span>Enquire About Admission</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Navigation & Columns */}
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>
          {/* Column 1: School */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '14px', background: 'linear-gradient(135deg, #facc15 0%, #f59e0b 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-purple-deep)', boxShadow: '0 4px 12px rgba(250,204,21,0.25)' }}>
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 800, margin: 0, fontFamily: 'var(--font-display)' }}>
                  School
                </h3>
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
              <li>
                <button onClick={() => handleLinkClick('about')} style={{ background: 'none', border: 'none', color: '#e9d5ff', cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('academics')} style={{ background: 'none', border: 'none', color: '#e9d5ff', cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Academics
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('admissions')} style={{ background: 'none', border: 'none', color: '#e9d5ff', cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Admissions
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('notices')} style={{ background: 'none', border: 'none', color: '#e9d5ff', cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Notice Board
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('events')} style={{ background: 'none', border: 'none', color: '#e9d5ff', cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Events &amp; School Life
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} style={{ background: 'none', border: 'none', color: '#e9d5ff', cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Contact &amp; Location
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Programs */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.25rem', fontFamily: 'var(--font-display)' }}>
              Programs
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
              <li>
                <button onClick={() => handleLinkClick('academics')} style={{ background: 'none', border: 'none', color: '#e9d5ff', cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Early Years
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('academics')} style={{ background: 'none', border: 'none', color: '#e9d5ff', cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Primary
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('academics')} style={{ background: 'none', border: 'none', color: '#e9d5ff', cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  STEAM
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('academics')} style={{ background: 'none', border: 'none', color: '#e9d5ff', cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Sports
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('academics')} style={{ background: 'none', border: 'none', color: '#e9d5ff', cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                  Creative Activities
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.25rem', fontFamily: 'var(--font-display)' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.925rem' }}>
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <MapPin size={18} color="#facc15" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  K.N. Roy Road, South Habra<br />
                  Habra, North 24 Parganas<br />
                  West Bengal 743263
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <Phone size={18} color="#4ade80" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <a href="tel:+919475549596" style={{ color: '#ffffff', fontWeight: 700 }}>+91 94755 49596</a>
                  <a href="tel:03216356665" style={{ color: '#ffffff', fontWeight: 700 }}>03216-356665</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <Mail size={18} color="#f472b6" style={{ flexShrink: 0, marginTop: '2px' }} />
                <a href={`mailto:${schoolInfo.contact.email}`} style={{ color: '#e9d5ff' }}>
                  {schoolInfo.contact.email}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <Clock size={18} color="#67e8f9" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#ffffff' }}>Office Hours:</strong><br />
                  Mon – Fri: 09:00 AM – 02:00 PM<br />
                  Sat: 09:30 AM – 01:30 PM (Sun Closed)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.12)', paddingTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem' }}>
          <div>
            © {currentYear} <strong>{schoolInfo.name}</strong>. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1rem', color: '#c4b5fd', flexWrap: 'wrap' }}>
            <span>English Medium Co-Educational School</span>
            <span>•</span>
            <span>CBSE Curriculum</span>
            <span>•</span>
            <span>NEP 2020 Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
