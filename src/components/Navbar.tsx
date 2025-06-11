'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'
import {
  FaGlobe,
  FaFileAlt,
  FaStore,
  FaWallet,
  FaLink,
  FaHeart,
  FaTrophy,
  FaLightbulb,
} from 'react-icons/fa'
import Logo from '@/assets/logo.svg'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <nav className="w-full bg-background/90 backdrop-blur-[22px] z-50 overflow-visible">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Logo className="w-36 h-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <MenuDropdown label="Features" />
          <NavLink href="/">How it works</NavLink>
          <NavLink href="/pricingpage">Pricing</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <MenuDropdown label="Company" />
        </div>

        {/* Desktop Auth / CTA */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link
            href="https://app.getvancore.com"
            className="px-4 py-2 rounded-[8px] text-[15px] font-sans text-grey-90 hover:underline"
          >
            Log In
          </Link>
          <Link href="https://app.getvancore.com">
            <CTAButton hovered={hovered} setHovered={setHovered} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-2xl"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Panel */}
      {mobileOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-[22px] py-10 px-4">
          <div className="flex flex-col space-y-4">
            <MenuDropdown label="Features" mobile />
            <NavLink href="/" mobile>
              How it works
            </NavLink>
            <NavLink href="/pricingpage" mobile>
              Pricing
            </NavLink>
            <NavLink href="/contact" mobile>
              Contact Us
            </NavLink>
            <MenuDropdown label="Company" mobile />

            <div className="mt-6 border-t border-grey-200 pt-6 flex flex-col space-y-4">
              <Link
                href="https://app.getvancore.com"
                className="w-full text-center py-3 rounded-md text-sm font-medium text-grey-90"
              >
                Log In
              </Link>
              <Link
                href="https://app.getvancore.com"
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

function CTAButton({
  hovered,
  setHovered,
}: {
  hovered: boolean
  setHovered: (v: boolean) => void
}) {
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
  // For both Features and Company menus:
  const [open, setOpen] = useState(false)

  // Refs for trigger element and menu container:
  const triggerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Track dropdown position
  const [coords, setCoords] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  })

  // Close menu on route change
  const pathname = usePathname()
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Update coords when menu opens
  useEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setCoords({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      })
    }
  }, [open])

  // Close when clicking outside trigger or menu
  useEffect(() => {
    if (!open) return

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node
      if (
        triggerRef.current &&
        !triggerRef.current.contains(target) &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  // Common trigger styles:
  const trigger = mobile
    ? 'flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium text-secondary hover:bg-background/50'
    : 'flex items-center space-x-1 text-[15px] font-sans text-secondary cursor-pointer'

  // Mobile submenu container:
  const mobileMenu = 'mt-1 space-y-1 pl-4'

  // Desktop submenu container (positioned via portal)
  const desktopMenuPortal = [
    'absolute',
    'flex flex-col z-[9999]',
    'w-[352px] rounded-[24px] bg-white border border-gray-200',
    'p-4 px-3 gap-2',                       // reduced from p-6 px-4 gap-3
    'shadow-[0px_193px_54px_0px_rgba(0,0,0,0.05)]',
  ].join(' ')

  // Menu items for “Features”
  const features = [
    {
      Icon: FaGlobe,
      title: 'Start selling online',
      desc: 'Set up your online store fast',
      href: '/features/start-selling',
      bg: 'bg-purple-100 text-purple-600',
    },
    {
      Icon: FaFileAlt,
      title: 'Manage your orders',
      desc: 'Easily keep track of all your orders',
      href: '/features/manage-orders',
      bg: 'bg-blue-100 text-blue-600',
    },
    {
      Icon: FaStore,
      title: 'Orders & Customers',
      desc: 'Keep all customer data organized',
      href: '/features/orders-customers',
      bg: 'bg-green-100 text-green-600',
    },
    {
      Icon: FaWallet,
      title: 'Payment & Invoices',
      desc: 'Collect payments and issue invoices',
      href: '/features/payment-invoices',
      bg: 'bg-yellow-100 text-yellow-600',
    },
    {
      Icon: FaLink,
      title: 'Invoice links',
      desc: 'Share payment links with customers',
      href: '/features/invoice-links',
      bg: 'bg-pink-100 text-pink-600',
    },
  ]

  // Menu items for “Company”
  const company = [
    {
      Icon: FaHeart,
      title: 'About us',
      desc: 'Learn why over 10k+ businesses choose Vancore',
      href: '/company/about',
      bg: 'bg-purple-100 text-purple-600',
    },
    {
      Icon: FaTrophy,
      title: 'Careers',
      desc: 'Build the future of commerce with us',
      href: '/company/careers',
      bg: 'bg-green-100 text-green-600',
    },
    {
      Icon: FaLightbulb,
      title: 'Blog',
      desc: 'Get helpful business tips & learn more about Vancore',
      href: '/blog',
      bg: 'bg-yellow-100 text-yellow-600',
    },
  ]

  // Choose which list to render based on label
  const items = label === 'Features' ? features : company

  if (mobile) {
    return (
      <div>
        <div
          className={trigger}
          onClick={() => setOpen((v) => !v)}
        >
          <span>{label}</span>
          <FiChevronDown size={16} />
        </div>
        {open && (
          <div className={mobileMenu}>
            {items.map(({ title, href }, i) => (
              <Link
                key={i}
                href={href}
                className={`block py-1 text-sm text-secondary hover:underline ${
                  label === 'Features' ? 'pointer-events-none' : ''
                }`}
              >
                {title}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  // --- DESKTOP VERSION (click to open/close) with portal for proper stacking ---
  return (
    <div className="relative overflow-visible" ref={triggerRef}>
      <div className={trigger} onClick={() => setOpen((v) => !v)}>
        <span>{label}</span>
        <FiChevronDown size={16} />
      </div>

      {open &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            ref={menuRef}
            className={desktopMenuPortal}
            style={{ top: coords.top, left: coords.left }}
          >
            {items.map(({ Icon, title, desc, href, bg }, i) => (
              <Link
                key={i}
                href={href}
                className={`flex items-center gap-4 p-1.5 rounded-[12px] hover:bg-gray-50 ${
                  label === 'Features' ? 'pointer-events-none' : ''
                }`}
              >
                <div className={`${bg} p-2 rounded-full flex-shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">{title}</p>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
              </Link>
            ))}
          </div>,
          document.body
        )}
    </div>
  )
}
