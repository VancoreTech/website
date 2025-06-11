'use client'

import Link from 'next/link'

export default function CareersHero() {
  return (
    <section className="relative w-full bg-background py-20">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase text-vancoreBlue mb-2">
          Careers at Vancore
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1D2939] mb-4">
          Join one of the fastest growing team
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#667085] mb-8">
          Join Vancore and help power growth for a new generation of businesses across Africa
        </p>

        {/* CTA (anchors down to the “open roles” section) */}
        <Link
          href="#open-roles"
          className="inline-block px-8 py-3 bg-vancoreBlue text-white font-medium rounded-lg shadow-lg hover:bg-[#0856C1] transition"
        >
          See open positions
        </Link>
      </div>
    </section>
  )
}
