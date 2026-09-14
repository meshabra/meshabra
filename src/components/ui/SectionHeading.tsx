import React from 'react';
import { ScribbleUnderline } from '../common/DoodleDecorations';

export interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowIcon?: React.ReactNode;
  eyebrowVariant?: 'purple' | 'green' | 'yellow' | 'pink';
  title: React.ReactNode;
  highlightText?: string;
  highlightColor?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  style?: React.CSSProperties;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  eyebrowIcon,
  eyebrowVariant = 'purple',
  title,
  highlightText,
  highlightColor = '#facc15',
  subtitle,
  align = 'center',
  className = '',
  style,
}) => {
  return (
    <div
      className={`section-header-component ${className}`}
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? '820px' : '720px',
        margin: align === 'center' ? '0 auto 3rem auto' : '0 0 2.5rem 0',
        ...style,
      }}
    >
      {eyebrow && (
        <span
          className={`section-eyebrow ${eyebrowVariant}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginBottom: '0.85rem',
          }}
        >
          {eyebrowIcon && eyebrowIcon}
          {eyebrow}
        </span>
      )}

      <h2
        style={{
          fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
          fontWeight: 800,
          color: 'var(--color-purple-deep)',
          lineHeight: 1.2,
          marginBottom: subtitle ? '1rem' : '0',
          fontFamily: 'var(--font-display)',
        }}
      >
        {title}
        {highlightText && (
          <span style={{ position: 'relative', display: 'inline-block', marginLeft: '0.4rem' }}>
            <span style={{ color: 'var(--color-pink-accent)' }}>{highlightText}</span>
            <ScribbleUnderline color={highlightColor} />
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
            marginTop: '0.75rem',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
