'use client'

import React from 'react'
import Image from 'next/image'

const TEAM = [
  {
    name: 'Chigozie Okereke',
    role: 'Co-founder, CEO',
    photo: '/images/team-1.png',
  },
  {
    name: 'Ada Uche',
    role: 'Head of Product',
    photo: '/images/team-1.png',
  },
  {
    name: 'Tobi Ade',
    role: 'Lead Engineer',
    photo: '/images/team-1.png',
  },
]

export default function MeetTheTeam() {
  return (
    <section className="w-full bg-[#F5F8F7] py-20">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <p className="uppercase text-sm font-medium text-vancoreBlue tracking-wide text-center mb-2">
          Leadership
        </p>
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-[#1D2939] text-center mb-10">
          Meet the team
        </h2>

        {/* Grid of profiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {TEAM.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="w-[350px] h-[430px] rounded-lg overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={350}
                  height={430}
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
              <p className="mt-4 text-lg font-medium text-[#1D2939]">
                {member.name}
              </p>
              <p className="text-sm text-[#667085]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
