import React from 'react'
import { FiCheckCircle, FiMinusCircle } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa' // “Most Popular” star icon

/**
 * PLANS: the three actual slots (skipping an empty first cell)
 */
const PLANS = [
  {
    label: 'Free',
    price: '₦0.00',
    unit: '/month',
    buttonText: 'Continue for free',
    darkBg: false,
    popular: false,
  },
  {
    label: 'Standard',
    price: '₦25,000',
    unit: '/month',
    buttonText: 'Get started for free',
    darkBg: true,
    popular: true,
  },
  {
    label: 'Enterprise',
    price: '₦250,000',
    unit: '/month',
    buttonText: 'Contact us',
    darkBg: false,
    popular: false,
  },
] as const

type PlanValue = boolean | string | null

type FeatureItem = {
  name: string
  plans: [PlanValue, PlanValue, PlanValue]
}

const CATEGORIES: { title: string; items: FeatureItem[] }[] = [
  {
    title: 'Selling online',
    items: [
      {
        name: 'Custom Domain Name',
        plans: [false, 'Free .com.ng domain on 1 year plan', 'Free .com.ng domain'],
      },
      {
        name: 'SSL Certificate',
        plans: [false, true, true],
      },
    ],
  },
  {
    title: 'Inventory Management',
    items: [
      {
        name: 'Add & Manage Products',
        plans: [true, true, true],
      },
      {
        name: 'Bulk Edit',
        plans: [false, true, true],
      },
      {
        name: 'Product Variations',
        plans: [false, true, true],
      },
      {
        name: 'Banner Scanner Software',
        plans: [false, false, true],
      },
    ],
  },
  {
    title: 'Order Management',
    items: [
      {
        name: 'Sales Records',
        plans: [
          'Unlimited Sales Records',
          '50 Invoices & Receipts only',
          'Unlimited Sales Records',
        ],
      },
      {
        name: 'Business Invoice & Receipts',
        plans: [false, 'Unlimited Invoices & Receipts', 'Unlimited Invoices & Receipts'],
      },
      {
        name: 'In-store checkout software (Point of Sale)',
        plans: [false, false, true],
      },
      {
        name: 'Bulk Order Edit',
        plans: [false, true, true],
      },
      {
        name: 'Discounts & Coupons',
        plans: [false, true, true],
      },
    ],
  },
  {
    title: 'Payment',
    items: [
      {
        name: 'Online Payment Gateway',
        plans: [true, 'Naira', 'Naira & Dollar'],
      },
      {
        name: 'Currencies Supported',
        plans: [false, 'Naira & Dollar', 'Naira & Dollar'],
      },
    ],
  },
  {
    title: 'Technical Support',
    items: [
      {
        name: 'Customer Support',
        plans: [
          'Email/In App Support',
          'Email/In App Support',
          'Account Manager + Dedicated WhatsApp Helpline',
        ],
      },
    ],
  },
  {
    title: 'Customer Management',
    items: [
      {
        name: 'Customer Records',
        plans: [
          'Unlimited Customer Records',
          'Unlimited Customer Records',
          'Unlimited Customer Records',
        ],
      },
    ],
  },
  {
    title: 'Operations',
    items: [
      {
        name: 'Expense Records',
        plans: [true, true, true],
      },
      {
        name: 'Business Analytics',
        plans: [false, 'Simple app analytics', 'App + Email Analytics & Compare Data'],
      },
    ],
  },
]

export default function PricingCompare() {
  return (
    <section className="w-full bg-transparent">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* 1) Heading & Subheading (80px top padding = pt-20) */}
        <div className="pt-20 text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1D2939]">
            Compare all features
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[#667085]">
            Choose the subscription plan that fits your business needs.
          </p>
        </div>

        {/*
          2) Mini Price Cards Container
             • 4‐column grid on md+: [empty][Free][Standard][Enterprise]
             • Each slot is exactly w-[220px], gap-x-12 = 48px
             • On <md it collapses to a single column (hidden empty on sm).
        */}
        <div className="pt-10">
          <div className="mx-auto grid grid-cols-1 gap-y-6 md:grid-cols-4 md:gap-x-12 md:max-w-[1240px]">
            {/* 2.1) Empty placeholder on md+ */}
            <div className="hidden md:block w-[220px]" />

            {PLANS.map((plan, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col items-start ${
                  plan.darkBg ? 'bg-secondary text-white' : 'bg-white text-[#1D2939]'
                } rounded-2xl shadow-md overflow-hidden w-full md:w-[220px]`}
              >
                {/* 2.2 If “popular,” render small star at top-right */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 mt-2 mr-2">
                    <div className="bg-vancoreBlue text-white rounded-full p-1 shadow-md">
                      <FaStar className="h-3 w-3" />
                    </div>
                  </div>
                )}

                {/* 2.3 Card content */}
                <div className="px-4 py-5 flex flex-col w-full gap-2">
                  <h4 className="text-base font-medium">{plan.label}</h4>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-2xl font-semibold">{plan.price}</span>
                    <span className="text-xs text-gray-400">{plan.unit}</span>
                  </div>

                  <button
                    className={`relative overflow-hidden group w-full mt-3 py-2 rounded-full font-medium ${
                      plan.darkBg
                        ? 'bg-vancoreBlue text-white'
                        : 'bg-[#1D2939] text-white'
                    }`}
                  >
                    <span className="inline-block transform transition-transform duration-200 group-hover:-translate-y-1">
                      {plan.buttonText}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*
          3) Feature Comparison Table
             • Wrapped in overflow-x-auto so on narrow screens we can scroll
             • Table has min-w-[720px] so each of the 4 columns is at least ~180px wide
             • Cells use whitespace-normal to wrap cleanly
        */}
        <div className="w-full mt-10 overflow-x-auto">
          <table className="min-w-[720px] w-full table-fixed border-collapse">
            <thead>
              <tr>
                {/* Empty header for feature names */}
                <th className="w-1/4 px-4 py-2"></th>
                {/* Three equal plan columns */}
                <th className="w-1/4 px-4 py-2"></th>
                <th className="w-1/4 px-4 py-2"></th>
                <th className="w-1/4 px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {CATEGORIES.map((category, catIdx) => (
                <React.Fragment key={catIdx}>
                  {/* Category heading row spanning all columns */}
                  <tr className="bg-[#F9FAFB]">
                    <td
                      colSpan={4}
                      className="px-4 py-3 text-left font-semibold text-[#1D2939]"
                    >
                      {category.title}
                    </td>
                  </tr>

                  {category.items.map((feature, fIdx) => (
                    <tr key={fIdx}>
                      <td className="px-4 py-3 text-sm text-[#1D2939] whitespace-normal">
                        {feature.name}
                      </td>
                      {feature.plans.map((val, planIdx) => (
                        <td
                          key={planIdx}
                          className="px-4 py-3 text-center whitespace-normal"
                        >
                          {renderPlanValue(val)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

/**
 * Renders each cell in the comparison table:
 * - boolean true  → green‐circled check
 * - boolean false → gray‐circled minus
 * - string        → text (wrapable)
 * - null/undefined → gray‐circled minus
 */
function renderPlanValue(val: PlanValue) {
  if (typeof val === 'boolean') {
    return val ? (
      <FiCheckCircle className="mx-auto h-5 w-5 text-[#10B981]" aria-label="Included" />
    ) : (
      <FiMinusCircle className="mx-auto h-5 w-5 text-gray-300" aria-label="Not included" />
    )
  }

  if (typeof val === 'string') {
    return <span className="text-sm text-[#374151]">{val}</span>
  }

  // null / undefined
  return <FiMinusCircle className="mx-auto h-5 w-5 text-gray-300" aria-label="Not included" />
}
