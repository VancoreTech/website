'use client'

import React from 'react'
import Link from 'next/link'

interface Role {
  title: string
  description: string
  type: string
  schedule: string
  location: string
}

const ROLES: Role[] = [
  {
    title: 'Product Designer',
    description: 'We’re looking for a mid-level product designer to join our team.',
    type: 'Design',
    schedule: 'Full time',
    location: 'Remote',
  },
  {
    title: 'UX Designer',
    description: 'We’re looking for a mid-level UX designer to join our team.',
    type: 'Design',
    schedule: 'Full time',
    location: 'Remote',
  },
  {
    title: 'Engineering Manager',
    description: 'We’re looking for an experienced engineering manager to join our team.',
    type: 'Engineering',
    schedule: 'Full time',
    location: 'Remote',
  },
  {
    title: 'Frontend Developer',
    description: 'We’re looking for an experienced frontend developer to join our team.',
    type: 'Engineering',
    schedule: 'Full time',
    location: 'Remote',
  },
  {
    title: 'Backend Developer',
    description: 'We’re looking for an experienced backend developer to join our team.',
    type: 'Engineering',
    schedule: 'Full time',
    location: 'Remote',
  },
  {
    title: 'Customer Success Manager',
    description: 'We’re looking for a mid-level customer success manager to join our team.',
    type: 'Growth',
    schedule: 'Full time',
    location: 'Remote',
  },
]

export default function OpenRoles() {
  return (
    <section id="open-roles" className="w-full bg-[#F3F8FF] py-20">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Leadership label + paragraph: only on mobile */}
        <div className="block sm:hidden mb-6 text-center">
          <p className="text-sm font-semibold uppercase text-[#0A6DEE] mb-1">
            Leadership
          </p>
          <p className="text-gray-600 text-base">
            These business tools and many more to come, work well with your Vancore app
          </p>
        </div>

        {/* “All open roles” title: centered on mobile, left on desktop */}
        <h2 className="text-3xl font-bold text-[#1D2939] mb-8 text-center sm:text-left">
          All open roles
        </h2>

        {/* Roles list */}
        <div className="space-y-8">
          {ROLES.map((role) => (
            <div
              key={role.title}
              className="flex flex-col sm:flex-row sm:justify-between bg-white rounded-lg px-8 py-6 shadow"
            >
              <div>
                <h3 className="text-xl font-medium text-[#1D2939]">
                  {role.title}
                </h3>
                <p className="mt-1 text-gray-700">{role.description}</p>
                <p className="mt-2 text-sm text-gray-500 flex flex-wrap gap-1">
                  <span>{role.type}</span>
                  <span>•</span>
                  <span>{role.schedule}</span>
                  <span>•</span>
                  <span>{role.location}</span>
                </p>
              </div>

              <div className="mt-4 sm:mt-0 sm:ml-6 flex-shrink-0">
                <Link
                  href="#apply"
                  className="
                    block            /* full‐width on mobile */
                    sm:inline        /* shrink to content on sm+ */
                    sm:w-auto
                    text-center
                    px-6 py-2
                    bg-[#0A6DEE] text-white
                    rounded-lg shadow-lg
                    hover:bg-[#0856C1] transition
                    font-medium
                  "
                >
                  Apply here
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
