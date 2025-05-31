// File: src/components/PlanCard.tsx
import React from 'react'

interface PlanCardProps {
  tierName: string
  priceLabel: string    // e.g. “₦0.00” or “₦75,000”
  unitLabel: string     // e.g. “/month”, “/3 months”, “/year”
  description: string
  features: string[]
  buttonText: string
  popular: boolean
  darkBg: boolean
}

export default function PlanCard({
  tierName,
  priceLabel,
  unitLabel,
  description,
  features,
  buttonText,
  popular,
  darkBg,
}: PlanCardProps) {
  return (
    <div
      className={`
        group relative flex flex-col w-full h-[450px]
        rounded-2xl overflow-hidden shadow-lg
        transform transition-transform duration-300
        ${darkBg ? 'bg-secondary text-white' : 'bg-white text-[#1D2939]'}
        hover:scale-105 hover:shadow-2xl hover:z-10
      `}
    >
      {/* 7) “Most Popular” badge w/ star (top-right) */}
      {popular && (
        <span className="absolute top-4 right-4 flex items-center space-x-1 bg-vancoreBlue text-white text-xs font-medium py-1 px-3 rounded-full z-10">
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
        {/* Plan name */}
        <h3 className="text-lg font-medium">{tierName}</h3>

        {/* Price */}
        <div className="mt-4 flex items-baseline space-x-2">
          <span className="text-3xl font-semibold">{priceLabel}</span>
          <span className={darkBg ? 'text-[#9CA3AF]' : 'text-[#6B7280]'}>
            {unitLabel}
          </span>
        </div>

        {/* Description */}
        <p className={`mt-2 text-sm ${darkBg ? 'text-white/80' : 'text-[#6B7280]'}`}>
          {description}
        </p>

        {/* CTA button (before features) */}
        <div className="mt-6">
          <button
            className={`
              w-full py-3 rounded-full font-medium overflow-hidden relative
              transition-colors duration-200
              ${
                darkBg
                  ? 'bg-vancoreBlue text-white hover:bg-gradient-to-r hover:from-gradientStart1 hover:to-gradientEnd1'
                  : 'bg-[#1D2939] text-white hover:bg-opacity-90'
              }
            `}
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
              {buttonText}
            </span>
          </button>
        </div>

        {/* Feature list */}
        <ul className="mt-6 space-y-3 flex-1 overflow-y-auto">
          {features.map((f, idx) => (
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
              <span className={darkBg ? 'text-white/90' : 'text-[#6B7280]'}>
                {f}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
