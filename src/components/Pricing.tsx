// src/components/Pricing.tsx
'use client'

import Image from 'next/image'
import React from 'react'

const PLANS = [
  {
    title: 'Starter',
    price: '₦0.00',
    unit: '/month',
    description: 'For new businesses still figuring things out.',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      'Feature 4',
      'Feature 5',
    ],
    buttonText: 'Continue for free',
    popular: false,
    darkBg: false,
  },
  {
    title: 'Standard',
    price: '₦25,000',
    unit: '/month',
    description: 'For solopreneurs with few products & a small customer base.',
    features: [
      'Everything in free plus',
      'Feature 1',
      'Feature 2',
      'Feature 3',
      'Feature 4',
    ],
    buttonText: 'Get started for free',
    popular: true,
    darkBg: true,
  },
  {
    title: 'Enterprise',
    price: '₦250,000',
    unit: '/month',
    description:
      'For large scale businesses with multiple stores, staff and a large inventory.',
    features: [
      'Everything Standard plus',
      'Feature 1',
      'Feature 2',
      'Feature 3',
      'Feature 4',
    ],
    buttonText: 'Contact us',
    popular: false,
    darkBg: false,
  },
]

export default function Pricing() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* 1) full‐bleed, fading gradient + pattern */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/pricingbg-pattern.svg"
          alt=""
          fill
          className="object-cover"
          unoptimized
          priority
        />
      </div>

      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center gap-6">
        {/* 2) label */}
        <p className="uppercase text-sm sm:text-base font-medium text-[#F28E1B]">
          Pricing
        </p>

        {/* 3) heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1D2939] text-center">
          Choose the perfect plan for your needs
        </h2>

        {/* 4) subhead */}
        <p className="mt-2 text-base sm:text-lg text-[#667085] max-w-2xl text-center">
          Simple, transparent pricing that grows with you. Try any plan free for
          30 days.
        </p>

        {/* 5) cards */}
        <div className="mt-12 w-full grid gap-8 grid-cols-1 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className={`
                group relative flex flex-col
                w-full h-[450px]
                rounded-2xl overflow-hidden shadow-lg
                transform transition-transform duration-300
                ${plan.darkBg ? 'bg-[#111827] text-white' : 'bg-white text-[#111827]'}
                hover:scale-105 hover:shadow-2xl hover:z-10
              `}
            >
              {/* 7) “Most Popular” badge w/ tiny star */}
              {plan.popular && (
                <span className="absolute top-4 right-4 flex items-center space-x-1 bg-blue-600 text-white text-xs font-medium py-1 px-3 rounded-full z-10">
                  <svg
                    className="w-3 h-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                  <span>Most Popular</span>
                </span>
              )}

              <div className="px-6 py-8 flex-1 flex flex-col">
                {/* plan name */}
                <h3 className="text-lg font-medium">{plan.title}</h3>

                {/* price */}
                <div className="mt-4 flex items-baseline space-x-2">
                  <span className="text-3xl font-semibold">{plan.price}</span>
                  <span className="text-sm text-[#9CA3AF]">{plan.unit}</span>
                </div>

                {/* description */}
                <p className="mt-2 text-sm text-[#6B7280]">{plan.description}</p>

                {/* 5) call-to-action button (before features) */}
                <div className="mt-6">
                  <button
                    className={`
                      w-full py-3 rounded-full font-medium overflow-hidden relative
                      transition-colors duration-200
                      ${plan.darkBg
                        ? 'bg-blue-600 text-white hover:bg-blue-500'
                        : 'bg-[#111827] text-white hover:bg-opacity-90'}
                    `}
                  >
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
                      {plan.buttonText}
                    </span>
                  </button>
                </div>

                {/* 6) features list */}
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1
                             0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0
                             000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={plan.darkBg ? 'text-white/90' : 'text-[#6B7280]'}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
