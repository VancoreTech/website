'use client'

import Image from 'next/image'

const PHOTOS = [
  '/images/career-1.png', 
  '/images/career-2.png', 
  '/images/career-3.png', 
  '/images/career-4.png', 
  '/images/career-5.png',
  '/images/career-6.png', 
] as const

export default function CareersGrid() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6">

        <div className="
            relative w-full h-[300px] sm:h-[400px] lg:h-auto
            lg:row-span-2
          ">
          <Image
            src={PHOTOS[0]}
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
            priority
          />
        </div>

        <div className="
            relative w-full h-[200px] sm:h-[300px] lg:h-[295px]
            lg:row-start-1 lg:col-start-2
          ">
          <Image
            src={PHOTOS[1]}
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>

        <div className="
            relative w-full h-[300px] sm:h-[400px] lg:h-auto
            lg:row-span-2 lg:col-start-3
          ">
          <Image
            src={PHOTOS[3]}
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>

        <div className="
            relative w-full h-[200px] sm:h-[300px] lg:h-[295px]
            lg:row-start-1 lg:col-start-4
          ">
          <Image
            src={PHOTOS[4]}
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>

        <div className="
            relative w-full h-[200px] sm:h-[300px] lg:h-[293px]
            lg:row-start-2 lg:col-start-2
          ">
          <Image
            src={PHOTOS[2]}
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>

        <div className="
            relative w-full h-[200px] sm:h-[300px] lg:h-[293px]
            lg:row-start-2 lg:col-start-4
          ">
          <Image
            src={PHOTOS[5]}
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>

      </div>
    </div>
  )
}
