// src/components/DownloadSection.tsx
'use client'

import Image from 'next/image'
import React from 'react'

export default function DownloadSection() {
  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden pt-0 pb-16">
      {/* 1) curve at the bottom */}
      <div
        className="absolute inset-x-0 bottom-0 translate-y-1/4 h-[850px] -z-10"
        style={{ willChange: 'transform' }}
      >
        <Image
          src="/images/section-bg-curve.svg"
          alt=""
          fill
          className="object-cover object-bottom"
          unoptimized
        />
      </div>

      <div className="mx-auto max-w-screen-2xl flex flex-col-reverse md:flex-row items-center px-4 sm:px-6 lg:px-8 gap-12">
        {/* text + QR */}
        <div className="w-full md:w-1/2 max-w-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
            Get smart order management at your fingertips
          </h2>
          <p className="mt-4 text-gray-600">
            We make sure more of your money goes to those you love, not to high service fees.
          </p>

          <div className="mt-8">
            <div className="border-2 border-dashed border-gray-400 rounded-xl p-6 flex items-start space-x-6">
              <Image
                src="/images/qr-code.png"
                alt="Scan to download Vancore app"
                width={120}
                height={120}
              />
              <div className="flex-1">
                <p className="text-sm text-gray-700">
                  Scan to download Vancore app now. Available on Appstore &amp; Playstore.
                </p>
                <div className="mt-4 flex items-center space-x-3">
                  <Image
                    src="/images/icon-apple.svg"
                    alt="App Store"
                    width={24}
                    height={24}
                  />
                  <Image
                    src="/images/icon-google-play.svg"
                    alt="Google Play"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* phone mockup */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-48 sm:w-64 md:w-72 lg:w-80 xl:w-[450px]">
            <Image
              src="/images/phone-mockup.png"
              alt="Vancore app on phone"
              width={450}
              height={900}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}