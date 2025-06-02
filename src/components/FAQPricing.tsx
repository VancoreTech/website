'use client'

import React from 'react'
import { Disclosure } from '@headlessui/react'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid'

const QUESTIONS = [
  {
    question: 'What can the Vancore app do for me?',
    answer:
      'Vancore helps you manage your entire store—from product listings to payments—all in one place.',
  },
  {
    question: 'What kind of products can I sell?',
    answer:
      'You can sell physical goods, digital downloads, or services—whatever your business needs.',
  },
  {
    question: 'How long does it take to set up a store?',
    answer:
      'You can have your store live in under five minutes. Simply add your details, products, and you’re off!',
  },
  {
    question: "What’s the cost for setting up a store?",
    answer:
      'There is no setup fee. You pay only when you start making sales—just a small transaction fee applies.',
  },
]

export default function FAQPricing() {
  return (
    <section
      className="
        w-full
        bg-[linear-gradient(134deg,_#F9E7FF,_#E8C1F4)]
        rounded-[15px]
        pt-20 pb-20
        pl-10 pr-6
      "
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left column */}
          <div className="md:w-1/2">
            <p className="uppercase text-sm text-fuchsia-500 font-medium">FAQs</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-[#1D2939]">
              Some of the things you may want to know
            </h2>
            <p className="mt-2 text-base text-[#374151]">
              We answered questions so you don’t have to ask them.
            </p>
          </div>

          {/* Right column */}
          <div className="md:w-1/2 space-y-4">
            {QUESTIONS.map((item, idx) => (
              <Disclosure as="div" key={idx} className="border-b border-gray-300">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full py-4 text-left text-[#1D2939] focus:outline-none">
                      <span className="font-medium">{item.question}</span>
                      {open ? (
                        <MinusIcon className="w-5 h-5 text-gray-600" />
                      ) : (
                        <PlusIcon className="w-5 h-5 text-gray-600" />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="pt-2 pb-4 text-gray-600">
                      {item.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
