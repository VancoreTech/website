'use client'

import React from 'react'
import CareersHero from '@/components/CareersHero'
import CareersGallery from '@/components/CareersGallery'
import WhyVancore from '@/components/WhyVancore'



export default function CareersPage() {
  return (
    <main className="overflow-x-hidden">
      <CareersHero />
      <CareersGallery />
     <WhyVancore />



    </main>
  )
}

