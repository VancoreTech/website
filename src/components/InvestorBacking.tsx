'use client'

import React from 'react'
import Image from 'next/image'

const INVESTORS = [
  '/images/logos/a16z.svg',
  '/images/logos/gbv.svg',
  '/images/logos/altimeter.svg',
  '/images/logos/spark-capital.svg',
  '/images/logos/emerson-collective.svg',
  '/images/logos/y-combinator.svg',
  '/images/logos/neo.svg',
]

export default function InvestorBacking() {
  return (
    <section className="w-full bg-[#F5F8F7] py-20">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="uppercase text-sm font-medium text-[#667085] tracking-wide mb-6">
          Backed by the world’s top investors
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {INVESTORS.map((src) => (
            <div key={src} className="h-8">
              <Image
                src={src}
                alt=""
                height={32}
                width={120}
                style={{ objectFit: 'contain' }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
