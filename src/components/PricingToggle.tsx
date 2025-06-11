import React from 'react'

interface PricingToggleProps {
  activeIndex: number
  onChange: (idx: number) => void
}

const OPTIONS = ['Monthly', 'Bi-Quarterly', 'Yearly']

export default function PricingToggle({
  activeIndex,
  onChange,
}: PricingToggleProps) {
  return (
    <div className="inline-flex rounded-full bg-white shadow-sm ring-1 ring-gray-200">
      {OPTIONS.map((label, idx) => {
        const isActive = idx === activeIndex

        return (
          <button
            key={label}
            onClick={() => onChange(idx)}
            className={`
              relative flex-1 px-8 py-3 text-base font-medium whitespace-nowrap
              ${
                isActive
                  ? 'bg-vancoreBlue text-white'
                  : 'text-[#6B7280] hover:bg-gray-50'
              }
              focus:z-10 focus:outline-none focus:ring-2 focus:ring-vancoreBlue focus:ring-offset-2
              first:rounded-l-full last:rounded-r-full
            `}
          >
            {label}
            {isActive && <span className="sr-only">(active)</span>}
          </button>
        )
      })}
    </div>
  )
}
