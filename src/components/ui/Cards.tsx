import React from 'react';
import { ChevronRight, Calendar, MapPin, Download, Phone, Mail, Clock, Quote } from 'lucide-react';
import { Badge } from './Badge';

/* 1. Image Card */
export interface ImageCardProps {
  imageUrl: string;
  title: string;
  caption?: string;
  tag?: string;
  onClick?: () => void;
  aspectRatio?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  title,
  caption,
  tag,
  onClick,
  aspectRatio = '4/3',
}) => (
  <div
    className="card-playful"
    onClick={onClick}
    style={{
      padding: 0,
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div style={{ position: 'relative', width: '100%', aspectRatio, overflow: 'hidden' }}>
      <img
        src={imageUrl}
        alt={title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
      />
      {tag && (
        <span
          className="badge-pill purple"
          style={{ position: 'absolute', top: '1rem', right: '1rem', backdropFilter: 'blur(8px)' }}
        >
          {tag}
        </span>
      )}
    </div>
    {(title || caption) && (
      <div style={{ padding: '1.25rem' }}>
        <h4 style={{ fontSize: '1.15rem', color: 'var(--color-purple-deep)', marginBottom: '0.25rem', fontFamily: 'var(--font-display)' }}>
          {title}
        </h4>
        {caption && <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>{caption}</p>}
      </div>
    )}
  </div>
);

/* 2. Activity Card */
export interface ActivityCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  tag?: string;
  highlight?: string;
  bgColor?: string;
  iconColor?: string;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  description,
  icon,
  tag,
  highlight,
  bgColor = 'var(--bg-surface)',
  iconColor = 'var(--color-purple-deep)',
}) => (
  <div
    className="card-playful"
    style={{
      backgroundColor: bgColor,
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      height: '100%',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {icon && (
        <div
          style={{
            width: '54px',
            height: '54px',
            borderRadius: '18px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: iconColor,
            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
          }}
        >
          {icon}
        </div>
      )}
      {tag && <Badge variant="pink" size="sm">{tag}</Badge>}
    </div>

    <div>
      <h3 style={{ fontSize: '1.3rem', color: 'var(--color-purple-deep)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>
    </div>

    {highlight && (
      <div
        style={{
          marginTop: 'auto',
          padding: '0.5rem 0.85rem',
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          borderRadius: '12px',
          fontSize: '0.85rem',
          fontWeight: 700,
          color: 'var(--color-purple-deep)',
          fontFamily: 'var(--font-display)',
        }}
      >
        ✨ {highlight}
      </div>
    )}
  </div>
);

/* 3. Program Card */
export interface ProgramCardProps {
  stage: string;
  grades: string;
  ageGroup: string;
  description: string;
  highlights: string[];
  colorTheme?: 'purple' | 'green' | 'yellow' | 'pink';
  onAction?: () => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  stage,
  grades,
  ageGroup,
  description,
  highlights,
  colorTheme = 'purple',
  onAction,
}) => {
  const getHeaderBg = () => {
    switch (colorTheme) {
      case 'green':
        return 'linear-gradient(135deg, #15803d, #22c55e)';
      case 'pink':
        return 'linear-gradient(135deg, #be185d, #ec4899)';
      case 'yellow':
        return 'linear-gradient(135deg, #b45309, #f59e0b)';
      case 'purple':
      default:
        return 'linear-gradient(135deg, #3b0764, #7e22ce)';
    }
  };

  return (
    <div className="card-playful" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: getHeaderBg(), color: '#ffffff', padding: '1.75rem 1.5rem' }}>
        <span
          style={{
            display: 'inline-block',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            padding: '0.2rem 0.75rem',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
            fontFamily: 'var(--font-display)',
          }}
        >
          {ageGroup}
        </span>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', margin: 0, fontFamily: 'var(--font-display)' }}>
          {stage}
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.85)', margin: '0.25rem 0 0 0' }}>{grades}</p>
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '1rem' }}>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
          {description}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
          {highlights.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
              <span style={{ color: '#16a34a', fontWeight: 'bold' }}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {onAction && (
          <button
            onClick={onAction}
            className="btn btn-outline btn-sm"
            style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}
          >
            <span>Learn More</span>
            <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

/* 4. Facility Card */
export interface FacilityCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  tag?: string;
}

export const FacilityCard: React.FC<FacilityCardProps> = ({
  title,
  description,
  icon,
  imageUrl,
  tag,
}) => (
  <div className="card-playful" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
    {imageUrl && (
      <div style={{ position: 'relative', height: '180px' }}>
        <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {tag && (
          <span className="badge-pill yellow" style={{ position: 'absolute', top: '0.85rem', right: '0.85rem' }}>
            {tag}
          </span>
        )}
      </div>
    )}
    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {icon && (
          <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: 'var(--color-purple-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-purple-deep)', flexShrink: 0 }}>
            {icon}
          </div>
        )}
        <h4 style={{ fontSize: '1.2rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
          {title}
        </h4>
      </div>
      <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>
    </div>
  </div>
);

/* 5. Notice Card */
export interface NoticeCardProps {
  title: string;
  date: string;
  category: string;
  summary: string;
  isUrgent?: boolean;
  onReadMore?: () => void;
  onDownload?: () => void;
}

export const NoticeCard: React.FC<NoticeCardProps> = ({
  title,
  date,
  category,
  summary,
  isUrgent,
  onReadMore,
  onDownload,
}) => (
  <div
    className="card-playful"
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.85rem',
      borderLeft: isUrgent ? '6px solid var(--color-pink-accent)' : '6px solid var(--color-purple-main)',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Badge variant={isUrgent ? 'pink' : 'purple'} size="sm">
          {category}
        </Badge>
        {isUrgent && <Badge variant="yellow" size="sm">Urgent</Badge>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        <Calendar size={14} />
        <span>{date}</span>
      </div>
    </div>

    <h4 style={{ fontSize: '1.15rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
      {title}
    </h4>

    <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
      {summary}
    </p>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '0.5rem' }}>
      {onReadMore && (
        <button onClick={onReadMore} className="btn-link" style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-purple-deep)', background: 'none', border: 'none', cursor: 'pointer' }}>
          View Details →
        </button>
      )}
      {onDownload && (
        <button onClick={onDownload} className="btn btn-subtle btn-sm" style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}>
          <Download size={14} /> PDF
        </button>
      )}
    </div>
  </div>
);

/* 6. Event Card */
export interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location?: string;
  category: string;
  description: string;
  imageUrl?: string;
  status?: string;
  onAction?: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  location,
  category,
  description,
  imageUrl,
  status,
  onAction,
}) => (
  <div className="card-playful" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
    {imageUrl && (
      <div style={{ position: 'relative', height: '200px' }}>
        <img src={imageUrl} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {status && (
          <span className={`badge-pill ${status === 'Upcoming' ? 'green' : 'pink'}`} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            {status}
          </span>
        )}
      </div>
    )}
    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-purple-main)', fontWeight: 700 }}>
          <Calendar size={15} />
          <span>{date}</span>
          {time && <span>• {time}</span>}
        </div>
        {category && <Badge variant="purple" size="sm">{category}</Badge>}
      </div>

      <h4 style={{ fontSize: '1.25rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
        {title}
      </h4>

      {location && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <MapPin size={14} />
          <span>{location}</span>
        </div>
      )}

      <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
        {description}
      </p>

      {onAction && (
        <button onClick={onAction} className="btn btn-outline btn-sm" style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}>
          <span>View Event Highlights</span>
          <ChevronRight size={15} />
        </button>
      )}
    </div>
  </div>
);

/* 7. Contact Card */
export interface ContactCardProps {
  title: string;
  type: 'address' | 'phone' | 'email' | 'hours';
  details: string[];
  subtext?: string;
  actionLabel?: string;
  actionUrl?: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  title,
  type,
  details,
  subtext,
  actionLabel,
  actionUrl,
}) => {
  const getIcon = () => {
    switch (type) {
      case 'phone':
        return <Phone size={24} />;
      case 'email':
        return <Mail size={24} />;
      case 'hours':
        return <Clock size={24} />;
      case 'address':
      default:
        return <MapPin size={24} />;
    }
  };

  const getThemeBg = () => {
    switch (type) {
      case 'phone':
        return { bg: '#f0fdf4', border: '#bbf7d0', iconColor: '#16a34a' };
      case 'email':
        return { bg: '#fdf4ff', border: '#f5d0fe', iconColor: '#7e22ce' };
      case 'hours':
        return { bg: '#fefce8', border: '#fef08a', iconColor: '#854d0e' };
      case 'address':
      default:
        return { bg: '#ffffff', border: 'var(--border-subtle)', iconColor: 'var(--color-purple-deep)' };
    }
  };

  const theme = getThemeBg();

  return (
    <div
      className="card-playful"
      style={{
        backgroundColor: theme.bg,
        borderColor: theme.border,
        display: 'flex',
        gap: '1.25rem',
      }}
    >
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '16px',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: theme.iconColor,
          flexShrink: 0,
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        }}
      >
        {getIcon()}
      </div>
      <div>
        <h4 style={{ fontSize: '1.15rem', color: 'var(--color-purple-deep)', marginBottom: '0.35rem', fontFamily: 'var(--font-display)' }}>
          {title}
        </h4>
        <div style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {details.map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </div>
        {subtext && <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>{subtext}</div>}
        {actionLabel && actionUrl && (
          <a href={actionUrl} className="btn-link" style={{ display: 'inline-block', marginTop: '0.5rem', fontWeight: 700 }}>
            {actionLabel} →
          </a>
        )}
      </div>
    </div>
  );
};

/* 8. Testimonial Card (Placeholder-ready for parent/community quotes if officially provided) */
export interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  relation?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  relation,
}) => (
  <div
    className="card-playful"
    style={{
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      position: 'relative',
    }}
  >
    <div style={{ color: 'var(--color-purple-main)', opacity: 0.3 }}>
      <Quote size={36} />
    </div>
    <p style={{ fontSize: '1rem', color: 'var(--text-primary)', fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>
      "{quote}"
    </p>
    <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
      <h5 style={{ fontSize: '1.05rem', color: 'var(--color-purple-deep)', margin: 0, fontFamily: 'var(--font-display)' }}>
        {author}
      </h5>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.2rem 0 0 0' }}>
        {role} {relation && `• ${relation}`}
      </p>
    </div>
  </div>
);
