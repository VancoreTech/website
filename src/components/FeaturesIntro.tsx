// src/components/FeaturesIntro.tsx
'use client';

export default function FeaturesIntro() {
  return (
    <section
      className="
        mx-auto max-w-[1440px] w-full
        px-[100px]
        mt-[40px]
        flex flex-col items-start gap-[8px]
      "
    >
      {/* Section label */}
      <div className="text-[12px] font-medium uppercase tracking-[2px] text-[#2575E5]">
        FEATURES
      </div>

      {/* Main heading */}
      <h2
        className="
          text-[56px] font-semibold
          leading-[64px] tracking-[-1.12px]
          text-greys-grey900 font-sora
        "
      >
        Everything you need, in one place
      </h2>

      {/* Subtext */}
      <p
        className="
          w-[465px] text-[18px] font-normal
          leading-[24px] tracking-[-0.36px]
          text-[#667085] font-sora
        "
      >
        From inventory to payments, Vancore gives you the tools to run, grow,
        and scale your business; your way.
      </p>
    </section>
  );
}
