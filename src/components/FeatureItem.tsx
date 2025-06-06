'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export interface FeatureItemProps {
  title: React.ReactNode;
  description: React.ReactNode;
  gradient: string;   // e.g. "134deg, #F9E7FF 10%, #C1D4F4 74%"
  height: number;     // panel height in px when viewport ≥768px
  imageUrl?: string;  // screenshot URL
  fullWidth?: boolean; // if true, spans only text (no image)
  reverse?: boolean;   // if true & md+, image on left
}

export default function FeatureItem({
  title,
  description,
  gradient,
  height,
  imageUrl,
  fullWidth = false,
  reverse = false,
}: FeatureItemProps) {
  const hasImage = !fullWidth && Boolean(imageUrl);

  // On md+ decide whether to reverse the flex-row
  const mdDir = hasImage
    ? reverse
      ? 'md:flex-row-reverse'
      : 'md:flex-row'
    : '';

  // Track if viewport is narrower than 768px
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute style for panel height: auto on mobile, fixed px otherwise
  const panelHeight = isMobile ? 'auto' : `${height}px`;

  return (
    <div
      className={`
        mx-auto w-full
        px-4 sm:px-6 lg:px-8
        mb-8

        flex flex-col ${mdDir}
        gap-6
      `}
    >
      {/* TEXT PANEL */}
      <div
        className={`
          w-full
          ${hasImage ? 'md:w-7/12' : ''}
          rounded-[15px]
          overflow-hidden
        `}
        style={{ height: panelHeight }}
      >
        <div
          className="w-full h-full flex flex-col justify-start p-8"
          style={{ background: `linear-gradient(${gradient})` }}
        >
          <h3 className="text-2xl md:text-[32px] font-semibold text-[#1D2939] leading-[40px]">
            {title}
          </h3>
          <p className="mt-4 text-base md:text-[18px] text-[#36394A] leading-[24px]">
            {description}
          </p>
        </div>
      </div>

      {/* IMAGE PANEL */}
      {hasImage && (
        <div
          className="w-full md:w-5/12 rounded-[15px] overflow-hidden relative"
          style={{ height: panelHeight }}
        >
          <Image
            src={imageUrl!}
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            priority
            draggable={false}
          />
        </div>
      )}
    </div>
  );
}
