import React from 'react'
import ResourceCard from './ResourceCard'

const RESOURCES = [
  {
    label: 'Blog',
    title: 'All press stories and brand resources at a glance',
    imageSrc: '/images/resources/blog.png',
    href: '/blog',
    buttonText: 'Read our blog',
  },
  {
    label: 'Careers',
    title: 'Join us, and build the future of global work',
    imageSrc: '/images/resources/careers.png',
    href: 'company/careers',
    buttonText: 'Join us',
  },
  {
    label: 'Reach Us',
    title: "Send us a message, we'd love to hear from you",
    imageSrc: '/images/resources/reach-us.png',
    href: '/contact',
    buttonText: 'Contact us',
  },
]

export default function ResourcesSection() {
  return (
    <section className="w-full bg-transparent py-20">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-left">
        <p className="uppercase text-sm font-medium text-vancoreBlue tracking-wide mb-6 text-center">
          Resources
        </p>
        <h2 className="text-3xl font-semibold text-[#1D2939] mb-10 text-center">
          Learn more about us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESOURCES.map((r) => (
            <ResourceCard key={r.label} {...r} />
          ))}
        </div>
      </div>
    </section>
  )
}
