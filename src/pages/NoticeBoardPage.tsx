import React, { useState } from 'react';
import {
  Bell,
  Search,
  Calendar,
  X,
  FileText,
  Download,
} from 'lucide-react';
import { noticesData, type NoticeCategory, type NoticeItem } from '../data/noticesData';
import {
  OrganicBlob,
  WaveDivider,
  StarDoodle,
  CircleDoodle,
  ScribbleUnderline,
} from '../components/common/DoodleDecorations';
import type { NavTab } from '../components/layout/Navbar';

interface NoticeBoardPageProps {
  onNavigate?: (tab: NavTab) => void;
  onOpenEnquiry?: () => void;
}

export const NoticeBoardPage: React.FC<NoticeBoardPageProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<NoticeCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNotice, setActiveNotice] = useState<NoticeItem | null>(null);

  const categories: NoticeCategory[] = [
    'All',
    'Admissions',
    'Academic',
    'Events',
    'Holiday',
    'Important',
  ];

  // Filter notices based on category & search query
  const filteredNotices = noticesData.filter((item) => {
    const matchesCat =
      selectedCategory === 'All' ||
      (selectedCategory === 'Important' ? item.isImportant : item.category === selectedCategory);
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.shortDescription || item.description || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div>
      {/* ========================================================================= */}
      {/* HERO SECTION: "What's Happening at School?" */}
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
              <Bell size={16} /> Official Circulars &amp; Updates
            </span>

            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: 'var(--color-purple-deep)',
                marginBottom: '1.25rem',
                fontFamily: 'var(--font-display)',
              }}
            >
              What's Happening <br />
              <span className="highlight-yellow">at School?</span>
            </h1>

            <div style={{ maxWidth: '280px', margin: '0 auto 1.5rem auto' }}>
              <ScribbleUnderline color="#facc15" />
            </div>

            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
              Stay informed with official circulars, academic schedules, admissions notifications, and event announcements directly from the administrative desk.
            </p>

            {/* Live Search Input */}
            <div
              style={{
                maxWidth: '540px',
                margin: '0 auto',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Search
                size={20}
                style={{
                  position: 'absolute',
                  left: '1.25rem',
                  color: 'var(--color-purple-main)',
                  pointerEvents: 'none',
                }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search circulars by keyword..."
                className="form-input"
                style={{
                  paddingLeft: '3.2rem',
                  paddingRight: '1.25rem',
                  borderRadius: '9999px',
                  backgroundColor: '#ffffff',
                  boxShadow: 'var(--shadow-md)',
                  border: '2px solid var(--border-playful)',
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '1.25rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-muted)',
                  }}
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Wave transition */}
      <WaveDivider color="#ffffff" bgColor="#fafaf9" />

      {/* ========================================================================= */}
      {/* NOTICES LIST & CATEGORY FILTERS */}
      {/* ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#ffffff', minHeight: '500px' }}>
        <div className="container">
          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
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
                    padding: '0.6rem 1.4rem',
                    borderRadius: '9999px',
                    fontSize: '0.925rem',
                    fontWeight: isSelected ? 800 : 700,
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

          {/* Notices Grid or Empty State */}
          {filteredNotices.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              {filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="card-playful"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    backgroundColor: '#ffffff',
                    borderLeft: notice.isImportant ? '6px solid var(--color-pink-accent)' : '6px solid var(--color-purple-main)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span className={`badge-pill ${notice.isImportant ? 'pink' : 'purple'}`} style={{ fontSize: '0.8rem' }}>
                        {notice.category}
                      </span>
                      {notice.isImportant && (
                        <span className="badge-pill yellow" style={{ fontSize: '0.75rem' }}>
                          Important
                        </span>
                      )}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <Calendar size={14} />
                      <span>{notice.date}</span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)', lineHeight: 1.35 }}>
                    {notice.title}
                  </h3>

                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {notice.shortDescription}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <button
                      onClick={() => setActiveNotice(notice)}
                      className="btn-link"
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-purple-deep)',
                        fontWeight: 800,
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.925rem',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                    >
                      View Details →
                    </button>
                    {notice.attachmentUrl && (
                      <a
                        href={notice.attachmentUrl}
                        download
                        className="btn btn-subtle btn-sm"
                        style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem' }}
                      >
                        <Download size={14} /> PDF
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* ========================================================================= */
            /* EXACT REQUIRED FRIENDLY EMPTY STATE */
            /* ========================================================================= */
            <div
              style={{
                maxWidth: '620px',
                margin: '2rem auto 4rem auto',
                textAlign: 'center',
                padding: '3.5rem 2rem',
                borderRadius: '32px',
                backgroundColor: '#fbf7ff',
                border: '3px dashed var(--border-playful)',
                position: 'relative',
              }}
            >
              <div style={{ position: 'absolute', top: '-15px', right: '15px' }}>
                <StarDoodle size={30} color="#facc15" />
              </div>
              <div style={{ position: 'absolute', bottom: '-15px', left: '15px' }}>
                <CircleDoodle size={32} color="#ec4899" />
              </div>

              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-purple-light)',
                  color: 'var(--color-purple-deep)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                }}
              >
                <Bell size={32} />
              </div>

              <h3
                style={{
                  fontSize: '1.45rem',
                  color: 'var(--color-purple-deep)',
                  marginBottom: '0.75rem',
                  fontFamily: 'var(--font-display)',
                }}
              >
                No new notices right now.
              </h3>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Please check back soon for the latest updates.
              </p>

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="btn btn-outline btn-sm"
                  style={{ marginTop: '1.5rem' }}
                >
                  Clear Search Filter
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* NOTICE DETAIL MODAL (Ready for CMS Full Content) */}
      {/* ========================================================================= */}
      {activeNotice && (
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
          onClick={() => setActiveNotice(null)}
        >
          <div
            className="card-playful"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '32px',
              maxWidth: '650px',
              width: '100%',
              padding: '2.5rem',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: 'var(--shadow-floating)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveNotice(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'var(--color-purple-light)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--color-purple-deep)',
              }}
              aria-label="Close Notice Modal"
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className={`badge-pill ${activeNotice.isImportant ? 'pink' : 'purple'}`}>
                {activeNotice.category}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <Calendar size={14} />
                <span>{activeNotice.date}</span>
              </div>
            </div>

            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-purple-deep)', marginBottom: '1.25rem', fontFamily: 'var(--font-display)', lineHeight: 1.3 }}>
              {activeNotice.title}
            </h3>

            <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2rem' }}>
              {activeNotice.fullContent || activeNotice.shortDescription}
            </div>

            {activeNotice.attachmentName && (
              <div
                style={{
                  backgroundColor: '#f5f3ff',
                  padding: '1.25rem',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                  border: '1px solid #ddd6fe',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FileText size={24} color="var(--color-purple-main)" />
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {activeNotice.attachmentName}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Official PDF Circular</div>
                  </div>
                </div>
                <button className="btn btn-cta btn-sm" onClick={() => alert('Downloading official attachment...')}>
                  <Download size={14} /> Download
                </button>
              </div>
            )}

            <button onClick={() => setActiveNotice(null)} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
              Close Notice
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
