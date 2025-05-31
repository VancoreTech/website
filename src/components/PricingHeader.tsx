// File: src/components/PricingHeader.tsx
import React from 'react'
import PricingToggle from './PricingToggle'

interface PricingHeaderProps {
  activeIndex: number
  onChange: (idx: number) => void
}

export default function PricingHeader({
  activeIndex,
  onChange,
}: PricingHeaderProps) {
  return (
    <header className="text-center max-w-2xl">
      {/* “PRICING” label in light-purple (#DABFBF) per Figma */}
      <p className="uppercase text-sm sm:text-base font-medium text-[#DC85F6]">
        Pricing
      </p>

      {/* Main heading (dark grey-90 #1D2939) */}
      <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1D2939]">
        Our affordable, fair pricing
      </h2>

      {/* Subtitle (mid-gray #667085) */}
      <p className="mt-4 text-base sm:text-lg text-[#667085]">
        Choose a free plan or pick the subscription plan that fits your business needs
      </p>

      {/* Toggle bar */}
      <div className="mt-8 flex justify-center">
        <PricingToggle activeIndex={activeIndex} onChange={onChange} />
      </div>
    </header>
  )
}
