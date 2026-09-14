import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import { schoolInfo } from '../data/schoolInfo';
import {
  OrganicBlob,
  WaveDivider,
  ScribbleUnderline,
} from '../components/common/DoodleDecorations';
import type { NavTab } from '../components/layout/Navbar';

interface ContactPageProps {
  onNavigate?: (tab: NavTab) => void;
  onOpenEnquiry?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please provide your full name.');
      return;
    }

    const cleanedPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanedPhone.length < 10) {
      setErrorMessage('Please provide a valid 10-digit phone number.');
      return;
    }

    // Simulate instantaneous validation and submission feedback
    setTimeout(() => {
      setIsSent(true);
    }, 400);
  };

  return (
    <div>
      {/* ========================================================================= */}
      {/* HERO SECTION: "Come Visit Us" */}
      {/* ========================================================================= */}
      <section
        style={{
          position: 'relative',
          padding: '4.5rem 0 5.5rem 0',
          background: 'linear-gradient(180deg, #fbf7ff 0%, #fafaf9 100%)',
          overflow: 'hidden',
        }}
        className="bg-dots-pattern"
      >
        <OrganicBlob color="#f3e8ff" size={450} style={{ top: '-10%', right: '-5%' }} />
        <OrganicBlob color="#fef9c3" size={350} style={{ bottom: '-10%', left: '-5%' }} />
        <OrganicBlob color="#fdf2f8" size={300} style={{ top: '30%', left: '35%' }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-eyebrow purple" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
              <MapPin size={16} /> Campus Location &amp; Inquiries
            </span>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 4.8vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: 'var(--color-purple-deep)',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-display)',
              }}
            >
              Come Visit Us
            </h1>

            <div style={{ maxWidth: '240px', margin: '0 auto 1.5rem auto' }}>
              <ScribbleUnderline color="#facc15" />
            </div>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '620px', margin: '0 auto 2.5rem auto' }}>
              If you have any questions, we will be happy to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Wave transition */}
      <WaveDivider color="#ffffff" bgColor="#fafaf9" />

      {/* ========================================================================= */}
      {/* CONTACT INFORMATION & FORM SECTION */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'flex-start' }}>
            {/* Left Column: Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* 1. Address Card */}
              <div className="card-playful" style={{ display: 'flex', gap: '1.25rem', backgroundColor: '#ffffff' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '18px', backgroundColor: 'var(--color-purple-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-purple-deep)', flexShrink: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                  <MapPin size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-purple-deep)', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                    Campus Address
                  </h3>
                  <p style={{ fontSize: '0.975rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                    {schoolInfo.address.line1},<br />
                    {schoolInfo.address.area},<br />
                    {schoolInfo.address.district},<br />
                    {schoolInfo.address.state} {schoolInfo.address.pincode}
                  </p>
                </div>
              </div>

              {/* 2. Primary Phone Card */}
              <div className="card-playful" style={{ display: 'flex', gap: '1.25rem', backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '18px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a', flexShrink: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                  <Phone size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#14532d', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                    Telephone Contacts
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '1rem' }}>
                    <a href="tel:+919475549596" style={{ color: '#16a34a', fontWeight: 800, fontFamily: 'var(--font-display)', fontSize: '1.15rem' }}>
                      +91 94755 49596
                    </a>
                    <a href="tel:03216356665" style={{ color: '#15803d', fontWeight: 700, fontSize: '1.05rem' }}>
                      03216-356665
                    </a>
                  </div>
                </div>
              </div>

              {/* 3. Additional Enquiry Contact Card */}
              <div className="card-playful" style={{ display: 'flex', gap: '1.25rem', backgroundColor: '#fdf2f8', borderColor: '#fbcfe8' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '18px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#db2777', flexShrink: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                  <MessageSquare size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#9d174d', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                    Additional Enquiry Contact
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.95rem' }}>
                    <a href="tel:+919564000143" style={{ color: '#db2777', fontWeight: 800, fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
                      +91 95640 00143
                    </a>
                    <a href={`mailto:${schoolInfo.contact.email}`} style={{ color: '#9d174d', fontWeight: 700 }}>
                      {schoolInfo.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* 4. Primary Email Card */}
              <div className="card-playful" style={{ display: 'flex', gap: '1.25rem', backgroundColor: '#fdf4ff', borderColor: '#f5d0fe' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '18px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7e22ce', flexShrink: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                  <Mail size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-purple-deep)', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                    Official Email
                  </h3>
                  <div style={{ fontSize: '0.95rem' }}>
                    <a href={`mailto:${schoolInfo.contact.email}`} style={{ color: 'var(--color-purple-main)', fontWeight: 700, fontSize: '1.05rem' }}>
                      {schoolInfo.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* 5. Office Hours Card */}
              <div className="card-playful" style={{ display: 'flex', gap: '1.25rem', backgroundColor: '#fefce8', borderColor: '#fef08a' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '18px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#854d0e', flexShrink: 0, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                  <Clock size={26} />
                </div>
                <div style={{ width: '100%' }}>
                  <h3 style={{ fontSize: '1.25rem', color: '#854d0e', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
                    Administrative Office Hours
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.35rem', borderBottom: '1px dashed #fef08a' }}>
                      <strong>Monday – Friday:</strong>
                      <span style={{ fontWeight: 700, color: '#854d0e' }}>09:00 AM – 02:00 PM</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.35rem', borderBottom: '1px dashed #fef08a' }}>
                      <strong>Saturday:</strong>
                      <span style={{ fontWeight: 700, color: '#854d0e' }}>09:30 AM – 01:30 PM</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <strong>Sunday:</strong>
                      <span style={{ fontWeight: 700, color: '#dc2626' }}>Office Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Enquiry Form */}
            <div
              className="card-playful"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '32px',
                padding: '2.5rem',
                boxShadow: 'var(--shadow-floating)',
                border: '3px solid var(--border-playful)',
              }}
            >
              <span className="section-eyebrow pink">
                Send a Message
              </span>
              <h2 style={{ fontSize: '1.85rem', color: 'var(--color-purple-deep)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
                Get in Touch
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Fill out the details below and our administrative desk will respond promptly.
              </p>

              {isSent ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'var(--color-green-light)', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-purple-deep)', fontFamily: 'var(--font-display)' }}>
                    Enquiry Sent Successfully!
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                    Thank you for contacting Millennium English School. A representative will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setFormData({ name: '', phone: '', email: '', message: '' });
                    }}
                    className="btn btn-cta"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {errorMessage && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', fontSize: '0.9rem' }}>
                      <AlertCircle size={18} />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Joyita Sen"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 94755 49596"
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. parent@example.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '2rem' }}>
                    <label className="form-label">Your Message</label>
                    <textarea
                      rows={4}
                      placeholder="Write your query regarding admissions, syllabus, or school visit..."
                      className="form-input"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-cta btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    <span>Send Enquiry</span>
                    <ArrowRight size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MAP SECTION: Live Interactive Google Map Embed & Directions */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#fbf7ff', paddingTop: '1rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow green">
              <Navigation size={14} color="#16a34a" /> Location &amp; Directions
            </span>
            <h2 className="section-title">Find Our Campus in South Habra</h2>
            <p className="section-subtitle">
              Located on K.N. Roy Road with convenient access from across Habra and North 24 Parganas.
            </p>
          </div>

          <div
            className="card-playful"
            style={{
              padding: 0,
              borderRadius: '36px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-floating)',
              position: 'relative',
              border: '3px solid var(--border-playful)',
              backgroundColor: '#ffffff',
            }}
          >
            {/* Live Interactive Google Map Iframe */}
            <div style={{ position: 'relative', width: '100%', height: '480px', backgroundColor: '#e2e8f0' }}>
              <iframe
                src={schoolInfo.address.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Millennium English School Habra Map Location"
              />
            </div>

            {/* Bottom Location & Directions Bar */}
            <div
              style={{
                padding: '1.75rem 2rem',
                backgroundColor: '#ffffff',
                borderTop: '2px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '16px',
                    backgroundColor: 'var(--color-purple-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-purple-deep)',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={26} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: 'var(--color-purple-deep)', fontSize: '1.15rem', fontFamily: 'var(--font-display)' }}>
                    Millennium English School
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                    {schoolInfo.address.line1}, {schoolInfo.address.area}, {schoolInfo.address.state} {schoolInfo.address.pincode}
                  </div>
                </div>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Millennium English School, K.N. Roy Road, South Habra, West Bengal 743263')}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-cta"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', minHeight: '44px' }}
              >
                <Navigation size={18} />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
