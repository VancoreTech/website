'use client'

import React from 'react'
import CareersHero from '@/components/CareersHero'
import CareersGallery from '@/components/CareersGallery'
import WhyVancore from '@/components/WhyVancore'
import OpenRoles from '@/components/OpenRoles'




export default function CareersPage() {
  return (
    <main className="overflow-x-hidden">
      <CareersHero />
      <CareersGallery />
     <WhyVancore />
     <OpenRoles />
    </main>
  )
}

