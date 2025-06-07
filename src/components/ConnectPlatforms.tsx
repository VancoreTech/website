'use client'

import React from 'react'
import Image from 'next/image'

export default function ConnectPlatforms() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-20">
        {/* 1) “All in one” label */}
        <p className="uppercase text-sm sm:text-base font-medium text-[#0A6DEE] text-center">
          All in one
        </p>

        {/* 2) Main heading */}
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-[#1D2939]">
          Connect your platforms
        </h2>

        {/* 3) Subhead */}
        <p className="mt-4 text-base sm:text-lg text-center text-[#667085] max-w-xl mx-auto">
          These business tools and many more to come, work well with your Vancore app
        </p>

        {/* 4) Diagram */}
        {/* on mobile, remove the wrapper’s px-4 gutters so the SVG spans edge-to-edge */}
        <div className="-mx-4 sm:mx-0">
          <Image
            src="/connectplatformanimated.svg"
            alt="Connector diagram showing Vancore logo linking to various platforms"
            className="w-screen sm:w-full max-w-none h-auto"
            width={1200}
            height={700}
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  )
}
