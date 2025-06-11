'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start py-12 gap-8">
          {/* Logo + Social Icons */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Image
              src="/images/logo-on-DB.png"
              alt="Vancore"
              width={128}
              height={32}
            />
            <div className="flex space-x-4 text-gray-300">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://instagram.com/myvancore"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href="https://x.com/myvancore"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaFacebook size={24} />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h4 className="text-white font-semibold">Company</h4>
            <Link href="/company/about">About Vancore</Link>
            <Link href="/company/careers">Careers</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          {/* Support Info */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h4 className="text-white font-semibold">Support</h4>
            <Link href="tel:+614052619882">+61 405 261 9882</Link>
            <Link href="tel:+447401956683">+44 7401 956683</Link>
            <Link href="mailto:tech@getvancore.com">tech@getvancore.com</Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-gray-700 pt-6 pb-8 flex flex-col md:flex-row justify-center md:justify-between items-center text-sm space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Vancore. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="cursor-not-allowed">Terms &amp; Service</span>
            <span className="cursor-not-allowed">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
