import React from 'react';

export interface BadgeProps {
  variant?: 'green' | 'yellow' | 'pink' | 'purple' | 'cyan' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'purple',
  size = 'md',
  children,
  icon,
  className = '',
  style,
}) => {
  const getPadding = () => {
    switch (size) {
      case 'sm':
        return '0.2rem 0.65rem';
      case 'lg':
        return '0.5rem 1.25rem';
      case 'md':
      default:
        return '0.35rem 0.9rem';
    }
  };

  const getFontSize = () => {
    switch (size) {
      case 'sm':
        return '0.75rem';
      case 'lg':
        return '0.95rem';
      case 'md':
      default:
        return '0.85rem';
    }
  };

  return (
    <span
      className={`badge-pill ${variant} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        padding: getPadding(),
        fontSize: getFontSize(),
        fontWeight: 700,
        fontFamily: 'var(--font-display)',
        borderRadius: 'var(--radius-pill)',
        letterSpacing: '0.02em',
        ...style,
      }}
    >
      {icon && icon}
      <span>{children}</span>
    </span>
  );
};
