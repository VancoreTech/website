'use client'

import React from 'react'
import Image from 'next/image'

export default function AboutImage() {
  return (
    <div
      className="
        mx-auto my-16
        w-full max-w-[877px]
        rounded-[28px]
        overflow-hidden
      "
      style={{
        boxShadow:
          '0px 120px 34px 0px rgba(0,0,0,0.00),' +
          ' 0px 77px 31px 0px rgba(0,0,0,0.01),' +
          ' 0px 43px 26px 0px rgba(0,0,0,0.05),' +
          ' 0px 19px 19px 0px rgba(0,0,0,0.09),' +
          ' 0px 5px 11px 0px rgba(0,0,0,0.10)',
      }}
    >
      <Image
        src="/images/dashboardaboutpage.png"  
        alt="Vancore Team collaborating"
        width={877}
        height={618}
        priority
        draggable={false}
        style={{ objectFit: 'cover' }}
      />
     
    </div>
  )
}