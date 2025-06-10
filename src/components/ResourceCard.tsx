import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface ResourceCardProps {
  label: string
  title: string
  imageSrc: string
  href: string  
  buttonText: string
}

export default function ResourceCard({
  label,
  title,
  imageSrc,
  href,
  buttonText,
}: ResourceCardProps) {
  return (
    <Link href={href} className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow bg-white">
      <div className="relative w-full h-[240px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          unoptimized
        />
      </div>
      <div className="p-6 space-y-2">
        <p className="text-xs font-medium uppercase text-[#667085]">{label}</p>
        <h3 className="text-lg font-semibold text-[#1D2939]">{title}</h3>
        <button
          className="mt-4 inline-flex items-center px-4 py-2 bg-[#E3E5E8] hover:bg-gray-200 rounded-full text-sm font-medium text-[#1D2939] transition"
        >
          {buttonText}
        </button>
      </div>
    </Link>
  )
}
