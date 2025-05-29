'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TESTIMONIALS = [
  {
    bg:  '/images/testimonial-flair.png',
    logo:'/images/flair.png',
    quote: `“I have never seen an excellent app like Vancore!
Their business analytics feature that helped me
navigate business growth so much better”`,
    author: 'Chukwudumebi Asiangwo',
    role:   'Founder, The Flair Store',
    avatar: '/images/testilogo1.png',
  },
  {
    bg:  '/images/testimonial-bolt.png',
    logo:'/images/bolt.png',
    quote:`“Bolt’s integration literally doubled our foot
traffic in Lagos within a month.”`,
    author: 'Emeka Okafor',
    role:   'CEO, Bolt Retail',
    avatar: '/images/testilogo1.png',
  },
  {
    bg:  '/images/testimonial-trendsta.png',
    logo:'/images/trendsta.png',
    quote:`“Trendsta’s seamless sync with Vancore saved us
hours every week on inventory.”`,
    author: 'Adaobi Nwachukwu',
    role:   'COO, Trendsta',
    avatar: '/images/testilogo1.png',
  },
]

export default function WallOfLove() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  // auto‐advance every 5s
  useEffect(() => {
    const len = TESTIMONIALS.length
    const iv = setInterval(() => {
      const nxt = (active + 1) % len
      setActive(nxt)
      if (ref.current) {
        ref.current.scrollTo({
          left: nxt * ref.current.clientWidth,
          behavior: 'smooth'
        })
      }
    }, 5000)
    return () => clearInterval(iv)
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
          These business tools and many more to come, work well with your Vancore app
        </p>

        <div ref={ref} className="relative w-full overflow-hidden">
          <div className="flex gap-6 snap-x snap-mandatory overflow-x-auto scroll-smooth scrollbar-hide">
            {TESTIMONIALS.map((t, i) => {
              const isActive = i === active
              return (
                <div
                  key={i}
                  className={`
                    snap-center flex-shrink-0
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

                  {/* only active slide shows overlay + animated children */}
                  {isActive && (
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm">
                      <div className="relative h-full flex flex-col justify-end p-4">
                        <AnimatePresence>
                          <motion.div
                            key="logo"
                            initial={{ y:30, opacity:0 }}
                            animate={{ y:0, opacity:1 }}
                            exit={{ opacity:0 }}
                            transition={{ duration:0.4 }}
                            className="mb-3"
                          >
                            <Image
                              src={t.logo}
                              alt="logo"
                              width={60}
                              height={60}
                              className="object-contain"
                            />
                          </motion.div>
                          <motion.p
                            key="quote"
                            initial={{ y:30, opacity:0 }}
                            animate={{ y:0, opacity:1 }}
                            exit={{ opacity:0 }}
                            transition={{ duration:0.4, delay:0.2 }}
                            className="text-white text-sm sm:text-base leading-relaxed"
                          >
                            {t.quote}
                          </motion.p>
                          <motion.div
    key="author" 
    initial={{ y:30, opacity:0 }} 
    animate={{ y:0, opacity:1 }} 
    exit={{ opacity:0 }} 
    transition={{ duration:0.4, delay:0.4 }} 
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
      </div>
    </section>
  )
}
