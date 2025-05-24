// src/components/FeaturesIntro.tsx
'use client';

export default function FeaturesIntro() {
  return (
    <section className="
      mx-auto w-full max-w-screen-xl
      px-4 sm:px-6 lg:px-8
      mt-10
      flex flex-col items-start gap-2
    ">
      {/* Section label */}
      <div className="text-xs font-medium uppercase tracking-[2px] text-[#2575E5]">
        FEATURES
      </div>

      {/* Main heading */}
      <h2 className="
        text-2xl sm:text-3xl md:text-4xl lg:text-[56px]
        font-semibold
        leading-snug md:leading-[64px]
        tracking-tight lg:tracking-[-1.12px]
        text-[#1D2939]
      ">
        Everything you need, in one place
      </h2>

      {/* Subtext */}
      <p className="
        w-full max-w-md
        text-base sm:text-lg lg:text-[18px]
        leading-6 lg:leading-[24px]
        text-[#667085]
      ">
        From inventory to payments, Vancore gives you the tools to run, grow, and scale your business; your way.
      </p>
    </section>
  );
}
