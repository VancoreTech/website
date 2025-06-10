import React from 'react'
import AboutHero   from '@/components/AboutHero'
import AboutImage  from '@/components/AboutImage'
import TrustedBy   from '@/components/TrustedBy'
import AboutStory  from '@/components/AboutStory'

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      {/* hero image section */}
      <AboutImage />

      {/* trusted-by logos marquee */}
      <TrustedBy />
      <AboutStory />

    </main>
  )
}
