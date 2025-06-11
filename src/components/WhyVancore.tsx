'use client'

import React from 'react'
import {
  FaLaptop,       
  FaClock,      
  FaUmbrellaBeach,
  FaHeartbeat,  
  FaChartLine,   
  FaUsers,       
} from 'react-icons/fa'

const FEATURES = [
  {
    Icon: FaLaptop,
    title: 'Remote',
    desc: 'We offer a one-time budget to assist team members in making their home office as productive as possible.',
    bg: 'bg-purple-100',
    fg: 'text-purple-600',
  },
  {
    Icon: FaClock,
    title: 'Flexible hours',
    desc: 'We have a flexible work-hour schedule that helps you balance your work–life.',
    bg: 'bg-green-100',
    fg: 'text-green-600',
  },
  {
    Icon: FaUmbrellaBeach,
    title: 'Unlimited PTO',
    desc: 'All team members have 20 days of paid annual leave and are warmly encouraged to use them.',
    bg: 'bg-yellow-100',
    fg: 'text-yellow-600',
  },
  {
    Icon: FaHeartbeat,
    title: 'Medical insurance',
    desc: 'We provide comprehensive medical insurance for all team members.',
    bg: 'bg-blue-100',
    fg: 'text-blue-600',
  },
  {
    Icon: FaChartLine,
    title: 'Career growth',
    desc: 'We invest in our people so they can achieve their short, medium, and long-term professional goals.',
    bg: 'bg-pink-100',
    fg: 'text-pink-600',
  },
  {
    Icon: FaUsers,
    title: 'Great culture',
    desc: 'Learn and grow with highly accomplished colleagues who’re invested in your development.',
    bg: 'bg-orange-100',
    fg: 'text-orange-600',
  },
] as const

export default function WhyVancore() {
  return (
    <section className="w-full bg-transparent py-16">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2939] text-center mb-8">
          Why Vancore?
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map(({ Icon, title, desc, bg, fg }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-lg shadow transition-shadow hover:shadow-lg text-left"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full ${bg} ${fg}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1D2939] mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
