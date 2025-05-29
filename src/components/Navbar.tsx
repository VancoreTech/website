// src/components/Navbar.tsx
'use client';

import { useState } from 'react'
import Link from 'next/link'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'
import Logo from '@/assets/logo.svg'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="w-full bg-background/90 backdrop-blur-[22px] z-10">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-6">
        <Link href="/" className="flex-shrink-0">
          <Logo className="w-36 h-auto" />
        </Link>

        {/* desktop */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <MenuDropdown label="Features" />
          <NavLink href="/">How it works</NavLink>
          <NavLink href="/">Pricing</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
          <MenuDropdown label="Company" />
        </div>

        {/* desktop CTA */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 rounded-[8px] text-[15px] font-sans text-grey-90 hover:underline"
          >
            Log In
          </Link>
          <Link href="/signup">
            <CTAButton />
          </Link>
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden p-2 text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Panel */}
      {mobileOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-[22px] py-10 px-4">
          <div className="flex flex-col space-y-4">
            <MenuDropdown label="Features" mobile />
            <NavLink href="/" mobile>How it works</NavLink>
            <NavLink href="/" mobile>Pricing</NavLink>
            <NavLink href="/contact" mobile>Contact Us</NavLink>
            <MenuDropdown label="Company" mobile />

            <div className="mt-6 border-t border-grey-200 pt-6 flex flex-col space-y-4">
              <Link
                href="/login"
                className="w-full text-center py-3 rounded-md text-sm font-medium text-grey-90"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="w-full text-center py-3 rounded-md bg-[#0A6DEE] text-white text-sm font-medium"
              >
                Create Free Account
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({
  href,
  children,
  mobile = false,
}: {
  href: string
  children: React.ReactNode
  mobile?: boolean
}) {
  const base = mobile
    ? 'block px-4 py-2 rounded-md text-sm font-medium text-secondary hover:bg-background/50'
    : 'text-[15px] font-sans text-secondary hover:underline'

  return (
    <Link href={href} className={base}>
      {children}
    </Link>
  )
}

function CTAButton() {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-[177px] h-[44px] rounded-[8px] bg-[#0A6DEE] shadow-[0px_12px_20px_-1px_rgba(59,115,255,0.40),0px_2px_1px_-1px_rgba(255,255,255,0.50)_inset,0px_-1px_2px_0px_rgba(16,24,40,0.60)_inset,0px_0px_0px_1px_#126BDF] overflow-hidden"
    >
      <motion.span
        initial={{ y: 0, opacity: 1 }}
        animate={hovered ? { y: -30, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 320, damping: 40 }}
        className="absolute inset-0 flex items-end justify-center pb-[12px] text-white font-sans font-medium text-[15px]"
      >
        Create Free Account
      </motion.span>
      <motion.span
        initial={{ y: 30, opacity: 0 }}
        animate={hovered ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 320, damping: 40 }}
        className="absolute inset-0 flex items-end justify-center pb-[12px] text-white font-sans font-medium text-[15px]"
      >
        Get Started Now
      </motion.span>
    </motion.div>
  )
}

function MenuDropdown({
  label,
  mobile = false,
}: {
  label: string
  mobile?: boolean
}) {
  const [open, setOpen] = useState(false)

  // trigger styling
  const trigger = mobile
    ? 'flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium text-secondary hover:bg-background/50'
    : 'relative flex items-center space-x-1 text-[15px] font-sans text-secondary group cursor-pointer'

  // menu styling
  const menu = mobile
    ? 'mt-1 space-y-1 pl-4'
    : 'absolute left-0 top-full mt-2 hidden group-hover:block w-48 rounded bg-white p-4 shadow-md'

  return (
    <div className={mobile ? '' : 'relative'}>
      <div
        className={trigger}
        onClick={() => mobile && setOpen((v) => !v)}
      >
        <span>{label}</span>
        <FiChevronDown size={16} />
      </div>

      {/* only render mobile submenu when open */}
      {mobile ? (
        open && (
          <div className={menu}>
            <Link href="/" className="block py-1 text-sm text-secondary hover:underline">
              Option 1
            </Link>
            <Link href="/" className="block py-1 text-sm text-secondary hover:underline">
              Option 2
            </Link>
          </div>
        )
      ) : (
        <div className={menu}>
          <Link href="/" className="block py-1 text-sm text-secondary hover:underline">
            Option 1
          </Link>
          <Link href="/" className="block py-1 text-sm text-secondary hover:underline">
            Option 2
          </Link>
        </div>
      )}
    </div>
  )
}