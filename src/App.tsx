import React, { useState, useEffect } from 'react';
import { Navbar, type NavTab } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { NoticeTicker } from './components/layout/NoticeTicker';
import { EnquiryModal } from './components/common/EnquiryModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { NoticeBoardPage } from './pages/NoticeBoardPage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';
import { SEO } from './components/common/SEO';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  // Sync with URL hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavTab;
      const validTabs: NavTab[] = ['home', 'about', 'academics', 'admissions', 'notices', 'events', 'contact'];
      if (validTabs.includes(hash)) {
        setCurrentTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: NavTab) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-canvas)' }}>
      {/* Dynamic SEO metadata manager */}
      <SEO currentTab={currentTab} />

      {/* Navbar with Header Info */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
      />

      {/* Notice Banner Ticker on top */}
      <NoticeTicker onNavigate={handleSelectTab} />

      {/* Main Page Routing */}
      <main style={{ flex: 1 }}>
        {currentTab === 'home' && (
          <HomePage onNavigate={handleSelectTab} onOpenEnquiry={() => setIsEnquiryOpen(true)} />
        )}
        {currentTab === 'about' && (
          <AboutPage onNavigate={handleSelectTab} onOpenEnquiry={() => setIsEnquiryOpen(true)} />
        )}
        {currentTab === 'academics' && (
          <AcademicsPage onNavigate={handleSelectTab} onOpenEnquiry={() => setIsEnquiryOpen(true)} />
        )}
        {currentTab === 'admissions' && (
          <AdmissionsPage onNavigate={handleSelectTab} onOpenEnquiry={() => setIsEnquiryOpen(true)} />
        )}
        {currentTab === 'notices' && (
          <NoticeBoardPage onNavigate={handleSelectTab} onOpenEnquiry={() => setIsEnquiryOpen(true)} />
        )}
        {currentTab === 'events' && (
          <EventsPage onNavigate={handleSelectTab} onOpenEnquiry={() => setIsEnquiryOpen(true)} />
        )}
        {currentTab === 'contact' && (
          <ContactPage onNavigate={handleSelectTab} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleSelectTab} onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* Global Admission & General Enquiry Modal */}
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />

      {/* Floating Action Button for Quick Enquiry */}
      <button
        onClick={() => setIsEnquiryOpen(true)}
        className="btn-cta"
        style={{
          position: 'fixed',
          bottom: '1.75rem',
          right: '1.75rem',
          zIndex: 90,
          borderRadius: '9999px',
          padding: '0.85rem 1.6rem',
          fontSize: '1rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          border: '2px solid #ffffff',
          fontFamily: 'var(--font-display)',
        }}
      >
        <span>Admission Enquiry</span>
      </button>
    </div>
  );
};

export default App;
