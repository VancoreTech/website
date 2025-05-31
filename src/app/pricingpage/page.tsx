// File: src/app/pricingpage/page.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import PricingHeader from '@/components/PricingHeader'
import PricingGrid   from '@/components/PricingGrid'

export default function PricingPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* ─────────────────────────────────────────────── */}
      {/* STEP A: Debug background band for “Left Band 1” */}
      {/* A semi-transparent red box to prove the code is running */}
      {/* ─────────────────────────────────────────────── */}
      <div className="absolute inset-0 -z-10">
        <div className="
          absolute
          top-[120px]
          left-[-80px]
          w-[350px] h-[100px]
          bg-red-200
          opacity-50
        ">
          {/* Once you see this red box, you know the band wrapper is onscreen. */}
          <Image
            src="/images/left-band-1.png"
            alt="Debug: left band 1"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>

      {/* ─────────────────────────────────────────────── */}
      {/* STEP B: Pricing Content                          */}
      {/* ─────────────────────────────────────────────── */}
      <main className="relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 pt-20 pb-40 flex flex-col items-center gap-6">
        <PricingHeader activeIndex={activeIndex} onChange={setActiveIndex} />
        <PricingGrid activeIndex={activeIndex} />
      </main>
    </section>
  )
}
