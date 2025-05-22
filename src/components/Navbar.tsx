// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import Logo from '@/assets/logo.svg';

export default function Navbar() {
  return (
    <nav className="w-full bg-background/90 backdrop-blur-[22px]">
      <div className="
          mx-auto flex max-w-[1440px] w-full
          pl-[100px] pr-[48px]  /* left 100px, right 48px */
          py-[24px]
          justify-between items-center
        ">
        {/* Logo */}
        <Link href="/" className="inline-block">
          <Logo className="w-[183px] h-[50px]" />
        </Link>

        {/* Left nav links */}
        <div className="flex items-center gap-8 text-[15px] font-sans text-secondary">
          <div className="relative group cursor-pointer">
            <span className="flex items-center gap-1">
              Features <FiChevronDown size={16} />
            </span>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block w-48 rounded bg-white p-4 shadow-md">
              <p className="text-sm text-secondary">Dropdown content</p>
            </div>
          </div>
          <Link href="/" className="hover:underline">How it works</Link>
          <Link href="/" className="hover:underline">Pricing</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <div className="relative group cursor-pointer">
            <span className="flex items-center gap-1">
              Company <FiChevronDown size={16} />
            </span>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block w-48 rounded bg-white p-4 shadow-md">
              <p className="text-sm text-secondary">Dropdown content</p>
            </div>
          </div>
        </div>

        {/* Right auth/CTA links */}
        <div className="flex items-center gap-8">
          {/* Log In pill */}
          <Link
            href="/login"
            className="
              flex items-center justify-center gap-2
              px-[24px] py-[8px]
              rounded-[8px]
              text-[15px] font-sans text-grey-90
            "
          >
            Log In
          </Link>

          {/* Create Free Account */}
          <Link
            href="/signup"
            className="
              group relative flex flex-col items-center justify-end
              w-[177px] h-[44px]
              pt-[12px] pr-[19px] pb-0 pl-[21px]
              gap-[15px]
              rounded-[8px]
              bg-[#0A6DEE]
              shadow-[0px_12px_20px_-1px_rgba(59,115,255,0.40),
                      0px_2px_1px_-1px_rgba(255,255,255,0.50)_inset,
                      0px_-1px_2px_0px_rgba(16,24,40,0.60)_inset,
                      0px_0px_0px_1px_#126BDF]
              overflow-hidden
            "
          >
            <span className="
              absolute inset-0 flex items-end justify-center pb-[12px]
              text-white font-sans font-medium text-[15px]
              transform transition-transform duration-300 ease-out
              translate-y-0 group-hover:-translate-y-full
            ">
              Create Free Account
            </span>
            <span className="
              absolute inset-0 flex items-end justify-center pb-[12px]
              text-white font-sans font-medium text-[15px]
              transform transition-transform duration-300 ease-out
              translate-y-full group-hover:translate-y-0
            ">
              Get Started Now
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

