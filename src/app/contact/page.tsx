'use client'

import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { HiOutlineMail } from 'react-icons/hi'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import FAQSection from '@/components/FAQSection'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending'>('idle')

  function handleSubmit() {
    setStatus('sending')
  }

  return (
    <main className="w-full bg-transparent py-16">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold tracking-wide text-[#0A6DEE] uppercase">
            Reach us
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1D2939]">
            Get in touch with us
          </h1>
          <p className="mt-2 text-gray-600">
            Our team is always here to answer your questions
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-[#1D2939] mb-2">
              Contact Information
            </h3>
            <p className="text-gray-600 mb-6">
              You can contact us through any of the following ways:
            </p>

            <div className="space-y-6">
              {/* Chat us */}
              <div className="flex items-start bg-white rounded-lg shadow p-6">
                <div className="flex-shrink-0 p-4 bg-purple-100 rounded-lg text-purple-600">
                  <HiOutlineMail className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-[#1D2939]">Chat us</h4>
                  <p className="text-gray-500 text-sm">Send us an email</p>
                  <a
                    href="mailto:tech@getvancore.com"
                    className="mt-1 block text-[#0A6DEE] text-sm"
                  >
                    tech@getvancore.com
                  </a>
                </div>
              </div>

              {/* Visit us */}
              <div className="flex items-start bg-white rounded-lg shadow p-6">
                <div className="flex-shrink-0 p-4 bg-purple-100 rounded-lg text-purple-600">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-[#1D2939]">Visit us</h4>
                  <p className="text-gray-500 text-sm">Visit our office.</p>
                  <p className="mt-1 text-gray-700 text-sm">
                    3, Idowu Taylor Street, P.O. Box 70767,<br/>
                    Victoria Island, Lagos, Nigeria.
                  </p>
                </div>
              </div>

              {/* Call us */}
              <div className="flex items-start bg-white rounded-lg shadow p-6">
                <div className="flex-shrink-0 p-4 bg-purple-100 rounded-lg text-purple-600">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-[#1D2939]">Call us</h4>
                  <p className="text-gray-500 text-sm">Sun–Sat from 8 am to 6 pm.</p>
                  <p className="mt-1 text-gray-700 text-sm">+234 (0) 701 358 2143</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: FormSubmit form */}
          <div>
            <h3 className="text-xl font-semibold text-[#1D2939] mb-2">
              Send a message
            </h3>
            <p className="text-gray-600 mb-6">You can send us a message</p>

            <form
              onSubmit={handleSubmit}
              action="https://formsubmit.co/tech@getvancore.com"
              method="POST"
              className="space-y-4 bg-white p-6 rounded-lg shadow"
            >
              {/* Disable FormSubmit captcha */}
              <input type="hidden" name="_captcha" value="false" />
              {/* Redirect to Thank You page */}
              <input
                type="hidden"
                name="_next"
                value={`https://vancore-website.vercel.app/thank-you`}
              />

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-gray-100 rounded-lg px-4 py-3 focus:outline-none"
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-gray-100 rounded-lg px-4 py-3 focus:outline-none"
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your company"
                  className="w-full bg-gray-100 rounded-lg px-4 py-3 focus:outline-none"
                  onChange={(e) =>
                    setForm((f) => ({ ...f, company: e.target.value }))
                  }
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <PhoneInput
                  country={'ng'}
                  value={form.phone}
                  onChange={(phone) =>
                    setForm((f) => ({ ...f, phone: phone || '' }))
                  }
                  inputProps={{
                    name: 'phone',
                    required: true,
                  }}
                  containerClass="w-full"
                  inputClass="w-full bg-gray-100 rounded-lg px-4 py-3 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Write your message…"
                  rows={4}
                  className="w-full bg-gray-100 rounded-lg px-4 py-3 focus:outline-none resize-none"
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 bg-[#0A6DEE] text-white font-medium rounded-lg shadow hover:bg-[#0856C1] transition"
              >
                {status === 'sending' ? 'Sending…' : 'Submit'}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <FAQSection />
        </div>
      </div>
    </main>
  )
}
