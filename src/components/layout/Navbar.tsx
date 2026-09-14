import React, { useState } from 'react';
import {
  GraduationCap,
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  MapPin,
} from 'lucide-react';
import { schoolInfo } from '../../data/schoolInfo';
import { StarDoodle } from '../common/DoodleDecorations';

export type NavTab = 'home' | 'about' | 'academics' | 'admissions' | 'notices' | 'events' | 'contact';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab, onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'academics', label: 'ACADEMICS' },
    { id: 'admissions', label: 'ADMISSIONS' },
    { id: 'notices', label: 'NOTICE BOARD' },
    { id: 'events', label: 'EVENTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(16px)', borderBottom: '2px solid var(--border-subtle)', boxShadow: '0 4px 20px -2px rgba(76, 29, 149, 0.06)' }}>
      {/* Top Notification Bar - Deep Purple with colorful accents */}
      <div style={{ backgroundColor: 'var(--color-purple-deep)', color: '#f5f3ff', fontSize: '0.825rem', padding: '0.45rem 0' }}>
        <div className="container top-bar-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div className="top-bar-left" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#e9d5ff' }}>
              <MapPin size={14} color="#facc15" /> {schoolInfo.address.area}, {schoolInfo.address.district}
            </span>
            <span className="hide-on-mobile" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#e9d5ff' }}>
              <Clock size={14} color="#86efac" /> Office: {schoolInfo.officeHours.weekdays}
            </span>
          </div>

          <div className="top-bar-right" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={`tel:${schoolInfo.contact.phone[0]}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#ffffff', fontWeight: 600, minHeight: '32px' }}>
              <Phone size={14} color="#4ade80" /> {schoolInfo.contact.phone[0]}
            </a>
            <a href={`mailto:${schoolInfo.contact.email}`} className="hide-on-mobile" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#ffffff', fontWeight: 600 }}>
              <Mail size={14} color="#f472b6" /> {schoolInfo.contact.email}
            </a>
            <span style={{ backgroundColor: '#facc15', color: 'var(--color-purple-deep)', padding: '0.2rem 0.65rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '0.3rem', letterSpacing: '0.02em' }}>
              <Sparkles size={12} /> Admissions Open
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container navbar-main-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1.5rem' }}>
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem', textAlign: 'left', padding: 0, minHeight: '44px' }}
        >
          <div style={{ width: '44px', height: '44px', minWidth: '44px', borderRadius: '14px', background: 'linear-gradient(135deg, #4c1d95 0%, #3b0764 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', boxShadow: '0 6px 16px -3px rgba(76,29,149,0.4)', position: 'relative' }}>
            <GraduationCap size={24} strokeWidth={2.2} />
            <div style={{ position: 'absolute', top: '-4px', right: '-4px' }}>
              <StarDoodle size={12} color="#facc15" />
            </div>
          </div>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-purple-deep)', letterSpacing: '-0.01em', lineHeight: 1.15, fontFamily: 'var(--font-display)' }}>
              Millennium English School
            </div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-pink-deep)', letterSpacing: '0.03em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span>Habra</span> • <span>Knowledge &amp; Character</span>
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', gap: '0.35rem', alignItems: 'center' }} className="desktop-nav">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-link-btn ${isActive ? 'active' : ''}`}
                style={{
                  background: isActive ? 'var(--color-purple-light)' : 'transparent',
                  color: isActive ? 'var(--color-purple-deep)' : 'var(--text-secondary)',
                  border: isActive ? '1px solid var(--border-playful)' : '1px solid transparent',
                  padding: '0.55rem 1rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.925rem',
                  fontWeight: isActive ? 800 : 600,
                  fontFamily: 'var(--font-display)',
                  cursor: 'pointer',
                  minHeight: '44px',
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '16px',
                      height: '3px',
                      backgroundColor: 'var(--color-pink-deep)',
                      borderRadius: '9999px',
                      animation: 'fadeIn 250ms ease-out',
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {/* Bright Green CTA */}
          <button
            onClick={onOpenEnquiry}
            className="btn btn-cta"
            style={{ padding: '0.55rem 1.15rem', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.45rem', minHeight: '44px' }}
          >
            <span>Enquire</span>
            <ArrowRight size={15} />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: 'none', background: 'var(--color-purple-light)', border: '1px solid var(--border-playful)', padding: '0.6rem', borderRadius: 'var(--radius-md)', cursor: 'pointer', color: 'var(--color-purple-deep)', minWidth: '44px', minHeight: '44px', alignItems: 'center', justifyContent: 'center' }}
            className="mobile-toggle"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: 'var(--bg-surface)', borderTop: '2px solid var(--border-subtle)', padding: '1rem 1.25rem 1.5rem 1.25rem', boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '0.85rem 1.15rem',
                    textAlign: 'left',
                    background: isActive ? 'var(--color-purple-light)' : 'transparent',
                    color: isActive ? 'var(--color-purple-deep)' : 'var(--text-primary)',
                    borderRadius: 'var(--radius-md)',
                    border: 'none',
                    fontWeight: isActive ? 700 : 600,
                    fontSize: '1rem',
                    fontFamily: 'var(--font-display)',
                    cursor: 'pointer',
                    minHeight: '44px',
                  }}
                >
                  <span>{item.label}</span>
                  {isActive && <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-purple-deep)' }} />}
                </button>
              );
            })}
            <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="btn btn-cta"
                style={{ width: '100%', justifyContent: 'center', minHeight: '46px' }}
              >
                Admission Enquiry Form
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
        }
        @media (max-width: 991px) {
          .mobile-toggle {
            display: inline-flex !important;
          }
        }
        @media (max-width: 640px) {
          .hide-on-mobile {
            display: none !important;
          }
          .top-bar-inner {
            justify-content: center !important;
            text-align: center;
          }
          .navbar-main-container {
            padding: 0.6rem 1rem !important;
          }
        }
      `}</style>
    </header>
  );
};
