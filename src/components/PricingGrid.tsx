'use client'

import React from 'react'
import Link from 'next/link'
import PlanCard from './PlanCard'

// Define Tier data with a numeric “monthly” price so we can multiply
type TierData = {
  name: string
  monthlyPrice: number  // e.g. 0, 25000, 250000
  description: string
  features: string[]
  buttonText: string
  popular: boolean       // “Most Popular” badge
  darkBg: boolean        // dark background card
}

// Base data for each tier
const TIERS: TierData[] = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    description: 'For new businesses still figuring things out.',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    buttonText: 'Continue for free',
    popular: false,
    darkBg: false,
  },
  {
    name: 'Standard',
    monthlyPrice: 25000,
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
    name: 'Enterprise',
    monthlyPrice: 250000,
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

// Helper: format number → “₦#,###” or “₦0.00”
function formatCurrency(value: number): string {
  if (value === 0) return '₦0.00'
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

interface PricingGridProps {
  activeIndex: number
}

// activeIndex: 0=Monthly, 1=Bi-Quarterly (x3), 2=Yearly (x12)
export default function PricingGrid({ activeIndex }: PricingGridProps) {
  return (
    <div className="mt-12 w-full grid gap-8 grid-cols-1 md:grid-cols-3">
      {TIERS.map((tier) => {
        // Calculate the price based on activeIndex
        let rawAmount: number
        let unitLabel: string

        if (activeIndex === 0) {
          rawAmount = tier.monthlyPrice
          unitLabel = '/month'
        } else if (activeIndex === 1) {
          rawAmount = tier.monthlyPrice * 3
          unitLabel = '/3 months'
        } else {
          rawAmount = tier.monthlyPrice * 12
          unitLabel = '/year'
        }

        const priceLabel = formatCurrency(rawAmount)

        // wrap each card so its button (and the card) links to the app
        return (
          <Link
            key={tier.name}
            href="https://app.getvancore.com"
            className="block"
          >
            <PlanCard
              tierName={tier.name}
              priceLabel={priceLabel}
              unitLabel={unitLabel}
              description={tier.description}
              features={tier.features}
              buttonText={tier.buttonText}
              popular={tier.popular}
              darkBg={tier.darkBg}
            />
          </Link>
        )
      })}
    </div>
  )
}
