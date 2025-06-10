'use client'

import React from 'react'
import Image from 'next/image'

export default function AboutStory() {
  return (
    <section className="relative w-full bg-[#F5F8F7] py-20">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image
          src="/images/logo.svg"
          alt=""
          fill
          className="object-contain object-right"
          unoptimized
        />
      </div>

      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-8">
        <div className="w-full lg:w-1/3">
          <p className="uppercase text-sm text-vancoreBlue font-medium mb-2">
            About us
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1D2939] leading-tight">
            Built for Hustle, Backed by Purpose
          </h2>
        </div>

        <div className="w-full lg:w-2/3 space-y-6 text-[#36394A] text-base sm:text-lg leading-relaxed">
          <p>
            Vancore was born out of real conversations with merchants—fashion
            vendors, electronics dealers, food suppliers—all trying to stay
            organized and scale in a digital-first world that often forgets
            them.
          </p>
          <p>
            We didn’t start with a massive tech stack or funding. We started
            with a mission: to help African businesses sell smarter, manage
            better, and grow faster. Our first version was basic, but it
            worked. Business owners could track their inventory, fulfill orders
            quickly, and get paid faster—all from one place.
          </p>
          <p>
            Since then, we’ve been building with one goal in mind: to remove the
            chaos of daily business operations. Today, Vancore powers modern
            commerce for small and medium-sized businesses, giving them
            everything they need—from online stores to payments, analytics,
            invoicing, and multi-channel sales tools.
           </p> 

            <p> And we’re just getting started.
          </p>
        </div>
      </div>
    </section>
  )
}