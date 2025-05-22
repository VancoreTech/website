import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DashboardPreview from "@/components/DashboardPreview";
import TrustedBy from '@/components/TrustedBy';
import FeaturesIntro from '@/components/FeaturesIntro';
import FeaturesList from '@/components/FeaturesList';



export default function Home() {
  return (
    <>
      <Navbar />

      {/* 
        • max-w-screen-xl caps content at ~1280px wide 
        • px-4 / sm:px-6 / lg:px-8 gives 16/24/32px gutters 
      */}
      <main className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <DashboardPreview />
        <TrustedBy />
       </main>  

         {/* FEATURES: a little wider, cap at ~1536px */}
      <section className="mx-auto w-full max-w-screen-2xl pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-0 xl:pr-0">
        <FeaturesIntro />
        <FeaturesList />
      </section>
        {/* …other sections… */}
     
    </>
  );
}