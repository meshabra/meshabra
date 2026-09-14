import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  Image as ImageIcon,
  X,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import { eventsData, galleryData, type EventCategory, type EventItem, type GalleryItem } from '../data/eventsData';
import {
  StarDoodle,
  OrganicBlob,
  WaveDivider,
  CircleDoodle,
  ScribbleUnderline,
} from '../components/common/DoodleDecorations';
import type { NavTab } from '../components/layout/Navbar';

interface EventsPageProps {
  onNavigate?: (tab: NavTab) => void;
  onOpenEnquiry?: () => void;
}

export const EventsPage: React.FC<EventsPageProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All');
  const [activeEvent, setActiveEvent] = useState<EventItem | null>(null);
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const categories: EventCategory[] = [
    'All',
    'Annual Celebrations',
    'Competitions',
    'Cultural & Festivals',
    'Exhibitions & Field Trips',
    'Green & Community Drives',
  ];

  const filteredEvents = eventsData.filter(
    (evt) => selectedCategory === 'All' || evt.category === selectedCategory
  );

  return (
    <div>
      {/* ========================================================================= */}
      {/* HERO SECTION: "Big Moments. Bright Memories." */}
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow pink">
                Campus Celebrations
              </span>

              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 4.8vw, 3.8rem)',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: 'var(--color-purple-deep)',
                  marginBottom: '1.25rem',
                  fontFamily: 'var(--font-display)',
                }}
              >
                Big Moments. <br />
                <span className="highlight-yellow">Bright Memories.</span>
              </h1>

              <div style={{ maxWidth: '320px', marginBottom: '1.5rem' }}>
                <ScribbleUnderline color="#db2777" />
              </div>

              <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '560px' }}>
                From our signature <strong>CaNvAs Annual Day</strong> to environmental drives and cultural festivals, life at Millennium English School is filled with creative expression, joy, and shared celebration.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#events-grid" className="btn btn-cta btn-lg">
                  <span>Explore School Events</span>
                  <ChevronRight size={20} />
                </a>
                <a href="#gallery" className="btn btn-secondary btn-lg">
                  <ImageIcon size={18} color="var(--color-purple-deep)" />
                  <span>Campus Photo Gallery</span>
                </a>
              </div>
            </div>

            {/* Energetic Child-Friendly Visual Card */}
            <div style={{ position: 'relative' }}>
              <div
                className="card-playful animate-float"
                style={{
                  padding: '1.5rem',
                  borderRadius: '36px',
                  backgroundColor: '#ffffff',
                  boxShadow: 'var(--shadow-floating)',
                  border: '3px solid var(--border-playful)',
                  position: 'relative',
                }}
              >
                <div style={{ position: 'absolute', top: '-18px', right: '-18px', zIndex: 3 }}>
                  <StarDoodle size={36} color="#facc15" />
                </div>
                <div style={{ position: 'absolute', bottom: '-15px', left: '-15px', zIndex: 3 }}>
                  <CircleDoodle size={38} color="#ec4899" />
                </div>

                <div style={{ position: 'relative', borderRadius: '28px', overflow: 'hidden', height: '340px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
                    alt="Energetic children celebrating Annual Day at Millennium English School"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      right: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(8px)',
                      padding: '0.85rem 1.25rem',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-purple-deep)', fontFamily: 'var(--font-display)' }}>
                        CaNvAs Annual Day
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        Stage, Music, Drama &amp; Dance
                      </div>
                    </div>
                    <span className="badge-pill yellow">Signature Event</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave transition */}
      <WaveDivider color="#ffffff" bgColor="#fafaf9" />

      {/* ========================================================================= */}
      {/* EVENTS GRID WITH PROSPECTUS ACTIVITIES */}
      {/* ========================================================================= */}
      <section id="events-grid" className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow purple">
              <Calendar size={14} /> School Functions &amp; Drives
            </span>
            <h2 className="section-title">Co-Curricular Events &amp; Celebrations</h2>
            <p className="section-subtitle">
              All events and initiatives described below are integral parts of our annual calendar. Specific seasonal schedules are announced to parents prior to each event.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    backgroundColor: isSelected ? 'var(--color-purple-deep)' : '#ffffff',
                    color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                    border: isSelected ? '2px solid var(--color-purple-deep)' : '2px solid var(--border-subtle)',
                    padding: '0.55rem 1.35rem',
                    borderRadius: '9999px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-display)',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                    boxShadow: isSelected ? '0 6px 16px rgba(59,7,100,0.2)' : 'none',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Events Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="card-playful"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#ffffff',
                }}
              >
                <div style={{ position: 'relative', height: '220px' }}>
                  <img src={evt.imageUrl} alt={evt.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span
                    className="badge-pill purple"
                    style={{ position: 'absolute', top: '1rem', right: '1rem', backdropFilter: 'blur(8px)' }}
                  >
                    {evt.category}
                  </span>
                </div>

                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.85rem', color: '#16a34a', fontWeight: 600, fontFamily: 'var(--font-display)' }}>
                    <Calendar size={15} />
                    <span>{evt.date || 'Date to be announced'}</span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)', lineHeight: 1.3 }}>
                    {evt.title}
                  </h3>

                  {evt.venue && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <MapPin size={14} color="var(--color-purple-main)" />
                      <span>{evt.venue}</span>
                    </div>
                  )}

                  <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {evt.description}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <button
                      onClick={() => setActiveEvent(evt)}
                      className="btn-link"
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-purple-deep)',
                        fontWeight: 700,
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.925rem',
                        cursor: 'pointer',
                        padding: 0,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                      }}
                    >
                      <span>View Details</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave transition */}
      <WaveDivider color="#fbf7ff" bgColor="#ffffff" />

      {/* ========================================================================= */}
      {/* PHOTO / GALLERY SECTION */}
      {/* ========================================================================= */}
      <section id="gallery" className="section" style={{ backgroundColor: '#fbf7ff', position: 'relative' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow green">
              <ImageIcon size={14} color="#16a34a" /> Visual Memories
            </span>
            <h2 className="section-title">Campus Life &amp; Activities Gallery</h2>
            <p className="section-subtitle">
              Moments of teamwork, discovery, artistic flair, and daily joy captured across the Millennium English School campus.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {galleryData.map((item) => (
              <div
                key={item.id}
                className="card-playful"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  backgroundColor: '#ffffff',
                }}
                onClick={() => setActivePhoto(item)}
              >
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                    }}
                  />
                  <span
                    className="badge-pill yellow"
                    style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '0.75rem' }}
                  >
                    {item.category}
                  </span>
                </div>

                <div style={{ padding: '1.25rem' }}>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--color-purple-deep)', marginBottom: '0.35rem', fontFamily: 'var(--font-display)' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* EVENT DETAIL DRAWER MODAL */}
      {/* ========================================================================= */}
      {activeEvent && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(59, 7, 100, 0.65)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setActiveEvent(null)}
        >
          <div
            className="card-playful"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '32px',
              maxWidth: '680px',
              width: '100%',
              padding: 0,
              overflow: 'hidden',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: 'var(--shadow-floating)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: 'relative', height: '240px' }}>
              <img src={activeEvent.imageUrl} alt={activeEvent.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <button
                onClick={() => setActiveEvent(null)}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--color-purple-deep)',
                }}
                aria-label="Close Event Modal"
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <span className="badge-pill purple">{activeEvent.category}</span>
                <span style={{ fontSize: '0.85rem', color: '#16a34a', fontWeight: 600, fontFamily: 'var(--font-display)' }}>
                  📅 {activeEvent.date || 'Date to be announced'}
                </span>
              </div>

              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-purple-deep)', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
                {activeEvent.title}
              </h3>

              {activeEvent.venue && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  <MapPin size={16} color="var(--color-purple-main)" />
                  <span>Venue: {activeEvent.venue}</span>
                </div>
              )}

              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {activeEvent.description}
              </p>

              {activeEvent.highlights && activeEvent.highlights.length > 0 && (
                <div style={{ backgroundColor: '#fdf4ff', padding: '1.25rem', borderRadius: '18px', border: '1px solid #f5d0fe', marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-purple-deep)', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
                    Key Highlights &amp; Activities:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {activeEvent.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                        <CheckCircle2 size={16} color="#16a34a" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button onClick={() => setActiveEvent(null)} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PHOTO LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      {activePhoto && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(15, 23, 42, 0.92)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setActivePhoto(null)}
        >
          <div
            style={{
              maxWidth: '800px',
              width: '100%',
              backgroundColor: '#ffffff',
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                zIndex: 10,
                backgroundColor: 'rgba(0,0,0,0.6)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>

            <img src={activePhoto.imageUrl} alt={activePhoto.title} style={{ width: '100%', maxHeight: '65vh', objectFit: 'cover' }} />

            <div style={{ padding: '1.5rem 2rem' }}>
              <span className="badge-pill yellow" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                {activePhoto.category}
              </span>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--color-purple-deep)', margin: '0.35rem 0', fontFamily: 'var(--font-display)' }}>
                {activePhoto.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
