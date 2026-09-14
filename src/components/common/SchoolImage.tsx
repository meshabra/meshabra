import React, { useState } from 'react';
import { imageAssets, type SchoolImageSlot } from '../../data/imageAssets';

interface SchoolImageProps {
  slotId: keyof typeof imageAssets | string;
  className?: string;
  style?: React.CSSProperties;
  overrideAlt?: string;
  aspectRatio?: string;
  roundedVariant?: 'standard' | 'blob1' | 'blob2' | 'blob3' | 'circle';
}

export const SchoolImage: React.FC<SchoolImageProps> = ({
  slotId,
  className = '',
  style,
  overrideAlt,
  aspectRatio,
  roundedVariant = 'standard',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const slot: SchoolImageSlot | undefined = imageAssets[slotId];
  const src = slot?.url || 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80';
  const alt = overrideAlt || slot?.alt || 'Millennium English School, South Habra';

  let borderRadius = '24px';
  if (roundedVariant === 'blob1') borderRadius = '42px 18px 42px 18px';
  if (roundedVariant === 'blob2') borderRadius = '20px 45px 20px 45px';
  if (roundedVariant === 'blob3') borderRadius = '36px 36px 16px 36px';
  if (roundedVariant === 'circle') borderRadius = '50%';

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius,
        backgroundColor: '#f3e8ff',
        aspectRatio: aspectRatio || 'auto',
        ...style,
      }}
      className={`school-image-wrapper ${className}`}
    >
      <img
        src={hasError ? 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80' : src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
          opacity: isLoaded ? 1 : 0.6,
        }}
      />
    </div>
  );
};
