'use client'

import React from 'react'
import Image from 'next/image'

export default function AboutMission() {
  return (
    <section className="relative w-full bg-[#F5F8F7] pt-12 pb-32">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left: big photo */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[877/618] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about-team.png"
                alt="Vancore team standing together"
                fill
                style={{ objectFit: 'cover' }}
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Right: text + quote SVG */}
          <div className="w-full lg:w-1/2 relative">
            {/* Decorative quote behind text */}
            <div className="absolute -left-8 -top-8 w-[148px] h-[114px] opacity-10 pointer-events-none">
              <Image
                src="/images/quote.svg"
                alt=""
                width={148}
                height={114}
                unoptimized
              />
            </div>

            <p className="uppercase text-sm font-medium text-vancoreBlue tracking-wide mb-2">
              Our mission
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#090814] leading-[38px]">
              We’re building a platform that helps entrepreneurs move faster,
              stay organized, and grow without limits; whether they’re selling
              from a store, a smartphone, or both.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}