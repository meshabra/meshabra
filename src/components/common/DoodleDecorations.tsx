import React from 'react';

export const StarDoodle: React.FC<{ size?: number; color?: string; className?: string; style?: React.CSSProperties }> = ({
  size = 24,
  color = '#facc15',
  style,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
  >
    <path
      d="M12 2L14.3 8.7L21.4 9.2L16 13.8L17.7 20.7L12 17.1L6.3 20.7L8 13.8L2.6 9.2L9.7 8.7L12 2Z"
      fill={color}
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const SparkleDoodle: React.FC<{ size?: number; color?: string; className?: string; style?: React.CSSProperties }> = ({
  size = 28,
  color = '#ec4899',
  className = '',
  style,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', ...style }}
  >
    <path
      d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z"
      fill={color}
    />
  </svg>
);

export const ScribbleUnderline: React.FC<{ color?: string; width?: string; style?: React.CSSProperties }> = ({
  color = '#facc15',
  width = '100%',
  style,
}) => (
  <svg
    style={{ width, height: '14px', display: 'block', marginTop: '2px', ...style }}
    viewBox="0 0 200 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 11C45 4 125 3 197 12C140 7 70 8 15 14"
      stroke={color}
      strokeWidth="4.5"
      strokeLinecap="round"
    />
  </svg>
);

export const WaveDivider: React.FC<{ flip?: boolean; color?: string; bgColor?: string; height?: number }> = ({
  flip = false,
  color = '#ffffff',
  bgColor = 'transparent',
  height = 48,
}) => (
  <div style={{ backgroundColor: bgColor, lineHeight: 0, width: '100%', overflow: 'hidden' }}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      style={{
        display: 'block',
        width: '100%',
        height: `${height}px`,
        transform: flip ? 'rotate(180deg)' : 'none',
      }}
    >
      <path
        d="M0,0 C150,90 350,-40 500,60 C650,140 900,10 1200,40 L1200,120 L0,120 Z"
        fill={color}
      />
    </svg>
  </div>
);

export const OrganicBlob: React.FC<{
  color?: string;
  size?: number;
  opacity?: number;
  style?: React.CSSProperties;
}> = ({ color = '#f3e8ff', size = 300, opacity = 0.6, style }) => (
  <div
    style={{
      position: 'absolute',
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '52% 48% 63% 37% / 41% 54% 46% 59%',
      backgroundColor: color,
      filter: 'blur(35px)',
      opacity,
      pointerEvents: 'none',
      zIndex: 0,
      ...style,
    }}
  />
);

export const CircleDoodle: React.FC<{ size?: number; color?: string; style?: React.CSSProperties }> = ({
  size = 32,
  color = '#facc15',
  style,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'inline-block', ...style }}
  >
    <circle cx="18" cy="18" r="14" stroke={color} strokeWidth="3" strokeDasharray="4 4" />
  </svg>
);

export const SpiralDoodle: React.FC<{ size?: number; color?: string; style?: React.CSSProperties }> = ({
  size = 36,
  color = '#a855f7',
  style,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'inline-block', ...style }}
  >
    <path
      d="M18 18C16 18 15 16.5 15 15C15 13 17 11 20 11C23.5 11 26 14 26 18C26 22.5 22 26 17 26C11 26 6 20.5 6 14C6 7 12 2 19 2"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const CrossDoodle: React.FC<{ size?: number; color?: string; style?: React.CSSProperties }> = ({
  size = 18,
  color = '#ec4899',
  style,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'inline-block', ...style }}
  >
    <path d="M4 4L16 16M16 4L4 16" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const PaperPlaneDoodle: React.FC<{ size?: number; color?: string; style?: React.CSSProperties }> = ({
  size = 32,
  color = '#0284c7',
  style,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'inline-block', ...style }}
  >
    <path
      d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={`${color}15`}
    />
  </svg>
);

export const PencilDoodle: React.FC<{ size?: number; color?: string; style?: React.CSSProperties }> = ({
  size = 28,
  color = '#f59e0b',
  style,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'inline-block', ...style }}
  >
    <path
      d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={`${color}20`}
    />
  </svg>
);

export const DottedPattern: React.FC<{
  color?: string;
  dotSize?: number;
  spacing?: number;
  style?: React.CSSProperties;
}> = ({ color = '#ddd6fe', dotSize = 2, spacing = 20, style }) => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: `radial-gradient(${color} ${dotSize}px, transparent ${dotSize}px)`,
      backgroundSize: `${spacing}px ${spacing}px`,
      pointerEvents: 'none',
      zIndex: 0,
      ...style,
    }}
  />
);

export const CloudDivider: React.FC<{ flip?: boolean; color?: string; bgColor?: string; height?: number }> = ({
  flip = false,
  color = '#ffffff',
  bgColor = 'transparent',
  height = 56,
}) => (
  <div style={{ backgroundColor: bgColor, lineHeight: 0, width: '100%', overflow: 'hidden' }}>
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      style={{
        display: 'block',
        width: '100%',
        height: `${height}px`,
        transform: flip ? 'rotate(180deg)' : 'none',
      }}
    >
      <path
        d="M0,0 C90,60 180,60 270,15 C360,-30 450,45 540,15 C630,-15 720,60 810,30 C900,0 990,45 1080,15 C1140,-5 1170,30 1200,10 L1200,120 L0,120 Z"
        fill={color}
      />
    </svg>
  </div>
);

export const CircularStampBadge: React.FC<{
  text?: string;
  centerText?: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}> = ({
  text = '★ KNOWLEDGE & CHARACTER ★ ESTD 2000 ★ MES HABRA ',
  centerText = 'MES',
  size = 110,
  color = '#4c1d95',
  style,
}) => (
  <div
    style={{
      position: 'relative',
      width: `${size}px`,
      height: `${size}px`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style,
    }}
  >
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className="animate-sparkle"
      style={{ animationDuration: '24s' }}
    >
      <path
        id="circlePath"
        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
        fill="none"
      />
      <text fill={color} fontSize="8.2" fontWeight="700" fontFamily="var(--font-display)" letterSpacing="1.8">
        <textPath href="#circlePath">
          {text}
        </textPath>
      </text>
    </svg>
    <div
      style={{
        position: 'absolute',
        width: `${size * 0.46}px`,
        height: `${size * 0.46}px`,
        borderRadius: '50%',
        backgroundColor: color,
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: `${size * 0.16}px`,
        fontWeight: 700,
        fontFamily: 'var(--font-display)',
        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
      }}
    >
      {centerText}
    </div>
  </div>
);

export const ConcentricArcs: React.FC<{
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}> = ({ size = 200, color = '#facc15', style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ pointerEvents: 'none', position: 'absolute', ...style }}
  >
    <circle cx="100" cy="100" r="90" stroke={color} strokeWidth="2.5" strokeDasharray="6 6" opacity="0.4" />
    <circle cx="100" cy="100" r="65" stroke={color} strokeWidth="3" opacity="0.6" />
    <circle cx="100" cy="100" r="40" stroke={color} strokeWidth="3.5" opacity="0.8" />
  </svg>
);

export const PillTagDoodle: React.FC<{
  label: string;
  bg?: string;
  color?: string;
  borderColor?: string;
  style?: React.CSSProperties;
}> = ({
  label,
  bg = '#fdf4ff',
  color = '#7e22ce',
  borderColor = '#f5d0fe',
  style,
}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.35rem',
      padding: '0.35rem 0.9rem',
      backgroundColor: bg,
      color,
      border: `1.5px solid ${borderColor}`,
      borderRadius: '9999px',
      fontSize: '0.825rem',
      fontWeight: 700,
      fontFamily: 'var(--font-display)',
      letterSpacing: '0.02em',
      boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
      ...style,
    }}
  >
    {label}
  </span>
);

