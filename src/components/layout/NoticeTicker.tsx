import React from 'react';
import { Bell, ChevronRight } from 'lucide-react';
import { noticesData } from '../../data/noticesData';
import type { NavTab } from './Navbar';

interface NoticeTickerProps {
  onNavigate: (tab: NavTab) => void;
  onSelectNotice?: (id: string) => void;
}

export const NoticeTicker: React.FC<NoticeTickerProps> = ({ onNavigate }) => {
  const latestNotice = noticesData && noticesData.length > 0 ? noticesData[0] : null;

  if (!latestNotice) {
    return (
      <div style={{ backgroundColor: '#fdf4ff', borderBottom: '2px solid #f5d0fe', padding: '0.65rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0, flex: 1 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', backgroundColor: '#facc15', color: '#581c87', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.04em', flexShrink: 0, fontFamily: 'var(--font-display)', boxShadow: '0 2px 6px rgba(250,204,21,0.3)' }}>
              <Bell size={12} /> Notice
            </span>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#581c87', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              <span style={{ fontWeight: 600, marginRight: '0.5rem', color: '#db2777' }}>[Admissions]</span>
              Admissions open for academic session 2025–26 from Playgroup onwards.
            </p>
          </div>

          <button
            onClick={() => onNavigate('notices')}
            style={{ background: 'none', border: 'none', color: '#7e22ce', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', padding: 0, flexShrink: 0, fontFamily: 'var(--font-display)', minHeight: '36px' }}
          >
            <span>Notice Board</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#fdf4ff', borderBottom: '2px solid #f5d0fe', padding: '0.65rem 0' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0, flex: 1 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', backgroundColor: '#facc15', color: '#581c87', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.75rem', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.04em', flexShrink: 0, fontFamily: 'var(--font-display)', boxShadow: '0 2px 6px rgba(250,204,21,0.3)' }}>
            <Bell size={12} /> Notice
          </span>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#581c87', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <span style={{ fontWeight: 600, marginRight: '0.5rem', color: '#db2777' }}>[{latestNotice.category}]</span>
            {latestNotice.title}
          </p>
        </div>

        <button
          onClick={() => onNavigate('notices')}
          style={{ background: 'none', border: 'none', color: '#7e22ce', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer', padding: 0, flexShrink: 0, fontFamily: 'var(--font-display)', minHeight: '36px' }}
        >
          <span>View All Notices</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};
