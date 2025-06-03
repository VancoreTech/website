'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  {
    bg: '/images/testimonial-flair.png',
    logo: '/images/flair.png',
    staticImg: '/images/flair.png',
    quote: `“I have never seen an excellent app like Vancore!
Their business analytics feature that helped me
navigate business growth so much better”`,
    author: 'Chukwudumebi Asiangwo',
    role: 'Founder, The Flair Store',
    avatar: '/images/testilogo1.png',
  },
  {
    bg: '/images/testimonial-bolt.png',
    logo: '/images/bolt.png',
    staticImg: '/images/bolt-green.png',
    quote: `“Bolt’s integration literally doubled our foot
traffic in Lagos within a month.”`,
    author: 'Emeka Okafor',
    role: 'CEO, Bolt Retail',
    avatar: '/images/testilogo1.png',
  },
  {
    bg: '/images/testimonial-trendsta.png',
    logo: '/images/trendsta.png',
    staticImg: '/images/trendsta-black.png',
    quote: (
      <>
        “Trendsta’s seamless sync with Vancore saved us
        <br />
        hours every week on inventory.”
      </>
    ),
    author: 'Adaobi Nwachukwu',
    role: 'COO, Trendsta',
    avatar: '/images/testilogo1.png',
  },
]

export default function WallOfLove() {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<HTMLDivElement[]>([])
  const [active, setActive] = useState(0)

  // Auto‐advance every 5s: update active index, loop back
  useEffect(() => {
    const len = TESTIMONIALS.length
    const iv = setInterval(() => {
      setActive((prev) => (prev + 1) % len)
    }, 5000)
    return () => clearInterval(iv)
  }, [])

  // Whenever active changes, animate translateX on inner container (center active card)
  useEffect(() => {
    const containerEl = containerRef.current
    const innerEl = innerRef.current
    const cardEl = cardRefs.current[active]
    if (!containerEl || !innerEl || !cardEl) return

    const cw = containerEl.clientWidth
    const cardW = cardEl.clientWidth
    const offsetLeft = cardEl.offsetLeft

    // center the active card
    const desiredOffset = offsetLeft - (cw - cardW) / 2
    const maxScroll = innerEl.scrollWidth - cw
    const finalOffset = Math.max(0, Math.min(desiredOffset, maxScroll))

    innerEl.style.transform = `translateX(-${finalOffset}px)`
    innerEl.style.transition = 'transform 0.6s ease'
  }, [active])

  return (
    <section className="w-full bg-background py-12">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
        <p className="uppercase text-blue-600 text-sm sm:text-base font-medium">
          Wall of love
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 text-center">
          Why 10,000 businesses love Vancore
        </h2>
        <p className="text-gray-600 text-base sm:text-lg text-center max-w-2xl">
          These business tools and many more to come, work well with your Vancore
          app
        </p>

        <div ref={containerRef} className="relative w-full overflow-hidden">
          <div ref={innerRef} className="flex gap-4">
            {TESTIMONIALS.map((t, i) => {
              const isActive = i === active
              // Determine which logo to show in active overlay:
              let activeCardLogo = t.logo
              if (i === 1 && isActive) {
                activeCardLogo = '/images/bolt-green.png'
              }
              if (i === 2 && isActive) {
                activeCardLogo = '/images/trendsta-black.png'
              }

              return (
                <div
                  key={i}
                  ref={(el) => {
                    if (el) cardRefs.current[i] = el
                  }}
                  className={`
                    flex-shrink-0
                    w-[280px] sm:w-[320px] md:w-96 lg:w-[600px]
                    h-[380px] rounded-2xl overflow-hidden relative
                    transform transition-transform duration-500
                    ${isActive ? 'scale-100' : 'scale-90'}
                  `}
                >
                  {/* faded background */}
                  <Image
                    src={t.bg}
                    alt={t.author}
                    fill
                    className="object-cover opacity-90"
                    priority={i === 0}
                  />

                  {/* Extra static image when not active, now lower-left */}
                  {!isActive && (
                    <div className="absolute bottom-8 left-4 opacity-80 z-10">
                      <Image
                        src={t.staticImg}
                        alt="static-overlay"
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                  )}

                  {/* only active slide shows overlay + animated children */}
                  {isActive && (
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-30">
                      <div className="relative h-full flex flex-col justify-end p-4">
                        <AnimatePresence>
                          <motion.div
                            key="logo"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="mb-3"
                          >
                            <Image
                              src={activeCardLogo}
                              alt="logo-active"
                              width={80}
                              height={80}
                              className="object-contain"
                            />
                          </motion.div>
                          <motion.p
                            key="quote"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="text-white text-sm sm:text-base leading-relaxed"
                          >
                            {t.quote}
                          </motion.p>
                          <motion.div
                            key="author"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="mt-4 flex items-center"
                          >
                            <Image
                              src={t.avatar}
                              alt={t.author}
                              width={40}
                              height={40}
                              className="rounded-full object-cover mr-3"
                            />
                            <div>
                              <p className="text-white font-medium text-sm">
                                {t.author}
                              </p>
                              <p className="text-white/80 text-xs">
                                {t.role}
                              </p>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Logos row with individual small lines */}
        <div className="flex items-center justify-center space-x-6 mt-6">
          {TESTIMONIALS.map((t, i) => {
            const isActive = i === active
            // Determine which logo to show in the logo row:
            let logoSrc = t.logo
            if (i === 1) {
              logoSrc = isActive ? '/images/bolt-green.png' : '/images/bolt.png'
            }
            if (i === 2) {
              logoSrc = isActive
                ? '/images/trendsta-black.png'
                : '/images/trendsta.png'
            }

            return (
              <div key={i} className="flex flex-col items-center w-16 md:w-20">
                <motion.div
                  animate={isActive ? { y: -10, scale: 1.2 } : { y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="w-full h-auto"
                >
                  <Image
                    src={logoSrc}
                    alt={`logo-${i}`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </motion.div>
                {isActive && (
                  <div className="w-full h-1 bg-gray-200 rounded overflow-hidden mt-1">
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 5, ease: 'linear' }}
                      className="h-full bg-blue-600"
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
