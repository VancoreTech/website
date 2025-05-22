// src/components/TrustedBy.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { src: '/images/image (1).png', alt: 'Unified Payment' },
  { src: '/images/image (2).png', alt: 'Hope Bank' },
  { src: '/images/image (3).png', alt: 'PayAttitude' },
  { src: '/images/image (5).png', alt: 'TM SaaS' },
  { src: '/images/image 6.png',     alt: 'EduSponsor' },
  { src: '/images/image 7.png',     alt: 'Oracle' },
  { src: '/images/image (3).png',   alt: 'Mastercard' },
  { src: '/images/image (4).png',   alt: 'Partner Eight' },
  { src: '/images/image 7.png',     alt: 'Partner Nine' },
];

const logos = partners.concat(partners);

export default function TrustedBy() {
  return (
    <section className="flex flex-col items-center gap-8 py-16">
      {/* label */}
      <p className="text-sm font-medium text-secondary">
        Trusted by 10K+ businesses
      </p>

      {/* full-bleed marquee wrapper */}
      <div className="relative w-full overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
        <motion.div
          className="flex items-center gap-20 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
        >
          {logos.map((p, i) => (
            <div key={`${p.src}-${i}`} className="flex-shrink-0">
              <Image
                src={p.src}
                alt={p.alt}
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
                draggable={false}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
