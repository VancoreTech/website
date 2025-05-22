// src/components/FeatureItem.tsx
'use client';

import React from 'react';

export interface FeatureItemProps {
  /** Title can be JSX so we can inject a <br/> */
  title: React.ReactNode;
  /** Description can now also be JSX so you can add <br/> */
  description: React.ReactNode;

  /** Gradient stops, e.g. "134deg, #F9E7FF 10%, #E8C1F4 74%" */
  gradient: string;
  /** Panel height in px (e.g. 542) */
  height: number;

  /** Width of the image column in px (e.g. 443) */
  imageWidth?: number;
  /** URL for the screenshot (only used if fullWidth=false) */
  imageUrl?: string;

  /** If true, this block spans the full width and does _not_ render an image */
  fullWidth?: boolean;

  /** If true (and fullWidth=false), the image goes on the left instead of the right */
  reverse?: boolean;
}

export default function FeatureItem({
  title,
  description,
  gradient,
  height,
  imageWidth = 443,
  imageUrl,
  fullWidth = false,
  reverse = false,
}: FeatureItemProps) {
  const showImage = !fullWidth && !!imageUrl;
  // determine flex direction only when we're showing an image
  const flexDir = showImage && reverse ? 'flex-row-reverse' : 'flex-row';

  return (
    <div
      className={`
        flex ${flexDir}
        w-full max-w-[1440px]
        mb-[32px] px-[100px]
        gap-[24px]
      `}
      style={{ height: `${height}px` }}
    >
      {/* TEXT PANEL */}
      <div
        className={`
          ${fullWidth ? 'w-full' : 'w-[803px]'}
          rounded-[15px] p-[24px]
          flex flex-col justify-start
        `}
        style={{ background: `linear-gradient(${gradient})` }}
      >
        <h3 className="text-[32px] font-semibold text-greys-grey900 font-sora leading-[40px]">
          {title}
        </h3>
        <p className="mt-4 text-[18px] text-[#36394A] font-sora leading-[24px]">
          {description}
        </p>
      </div>

      {/* IMAGE PANEL */}
      {showImage && (
        <div
          className="rounded-[15px] overflow-hidden"
          style={{
            width: `${imageWidth}px`,
            height: `${height}px`,
            background: `url('${imageUrl}') lightgray 50% / cover no-repeat`,
          }}
        />
      )}
    </div>
  );
}
