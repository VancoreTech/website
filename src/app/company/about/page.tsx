import React from 'react'
import AboutHero   from '@/components/AboutHero'
import AboutImage  from '@/components/AboutImage'
import TrustedBy   from '@/components/TrustedBy'
import AboutStory  from '@/components/AboutStory'
import AboutMission from '@/components/AboutMission'
import MeetTheTeam from '@/components/MeetTheTeam'
import InvestorBacking from '@/components/InvestorBacking'
import ResourcesSection from '@/components/ResourcesSection'





export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutImage />
      <TrustedBy />
      <AboutStory />
      <AboutMission />

      <MeetTheTeam />
      <InvestorBacking />
      <ResourcesSection />

    </main>
  )
}
