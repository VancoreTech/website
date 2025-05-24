// src/components/FeatureItem.tsx
'use client';

import Image from 'next/image';
import React from 'react';

export interface FeatureItemProps {
  title: React.ReactNode;
  description: React.ReactNode;
  gradient: string;         // "134deg, #F9E7FF 10%, #C1D4F4 74%"
  height: number;           // panel height in px
  imageUrl?: string;        // screenshot URL
  fullWidth?: boolean;      // if true, spans only text (no image)
  reverse?: boolean;        // if true & md+, image on left
  imageWidth?: number;
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

  // on mobile: flex‐col; on md+: flex‐row or row‐reverse
  const mdDir = hasImage
    ? reverse
      ? 'md:flex-row-reverse'
      : 'md:flex-row'
    : '';

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
        style={{ height: `${height}px` }}
      >
        <div
          className="w-full h-full flex flex-col justify-center p-6"
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
          style={{ height: `${height}px` }}
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
