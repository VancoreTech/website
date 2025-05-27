// src/app/page.tsx
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import DashboardPreview from '@/components/DashboardPreview'
import TrustedBy from '@/components/TrustedBy'
import FeaturesIntro from '@/components/FeaturesIntro'
import FeaturesList from '@/components/FeaturesList'
import HowItWorks from '@/components/HowItWorks'
import ConnectPlatforms  from '@/components/ConnectPlatforms'
import WallOfLove from '@/components/WallOfLove'
import Pricing from '@/components/Pricing'
import FAQSection from '@/components/FAQSection'


export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero / dashboard / logos all capped at ~1280px */}
      <main className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <DashboardPreview />
        <TrustedBy />
      </main>

      {/* Features stretch to ~1536px */}
      <section className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <FeaturesIntro />
        <FeaturesList />
      </section>

    {/* HOW IT WORKS (true full-bleed + gap above) */}
<section
  className="
    relative
    w-screen         /* span entire viewport width */
    left-1/2         /* push its left edge to the 50% point */
    -translate-x-1/2 /* pull it back half its own width */
    mt-12            /* vertical gap above (3rem) */
  "
  style={{
    background: 'linear-gradient(180deg, #0B121B 36.38%, #101925 63.62%)',
  }}
>
  {/* cap your content at 1280px again */}
  <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16">
    <HowItWorks />
  </div>
</section>


    <ConnectPlatforms />
    <WallOfLove />
    <Pricing />
    <FAQSection />

      {/* …whatever comes after… */}
    </>
  )
}
