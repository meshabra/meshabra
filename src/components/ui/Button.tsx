import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'purple' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  icon,
  iconPosition = 'right',
  className = '',
  style,
  ...props
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return 'btn-cta';
      case 'secondary':
        return 'btn-secondary';
      case 'outline':
        return 'btn-outline';
      case 'purple':
        return 'btn-purple';
      case 'subtle':
        return 'btn-subtle';
      default:
        return 'btn-cta';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'btn-sm';
      case 'lg':
        return 'btn-lg';
      default:
        return '';
    }
  };

  return (
    <button
      className={`btn ${getVariantClass()} ${getSizeClass()} ${className}`}
      style={{
        width: fullWidth ? '100%' : undefined,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        ...style,
      }}
      {...props}
    >
      {icon && iconPosition === 'left' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'right' && icon}
    </button>
  );
};

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'purple' | 'green' | 'pink' | 'muted';
}

export const TextLink: React.FC<TextLinkProps> = ({
  children,
  icon,
  variant = 'purple',
  className = '',
  style,
  ...props
}) => {
  const getColor = () => {
    switch (variant) {
      case 'green':
        return '#16a34a';
      case 'pink':
        return '#ec4899';
      case 'muted':
        return 'var(--text-secondary)';
      case 'purple':
      default:
        return 'var(--color-purple-deep)';
    }
  };

  return (
    <a
      className={`text-link ${className}`}
      style={{
        color: getColor(),
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        fontWeight: 600,
        fontFamily: 'var(--font-display)',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'var(--transition-fast)',
        ...style,
      }}
      {...props}
    >
      <span>{children}</span>
      {icon && icon}
    </a>
  );
};
