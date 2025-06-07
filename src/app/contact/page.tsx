'use client'

import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { FiMapPin, FiPhone } from 'react-icons/fi'
import { useForm, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import FAQSection from '@/components/FAQSection'

type FormData = {
  name: string
  email: string
  company: string
  phone: string
  message: string
}

export default function ContactPage() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // backend endpoint
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  return (
    <main className="w-full bg-transparent py-16">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Reach us
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
            Get in touch with us
          </h1>
          <p className="mt-2 text-gray-600">
            Our team is always here to answer your questions
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ── Left: Contact Information ───────────────── */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Contact Information
            </h3>
            <p className="text-gray-600 mb-6">
              You can contact us through any of the following ways:
            </p>

            <div className="space-y-6">
              {/* Chat us */}
              <div className="flex items-start bg-white rounded-lg shadow p-6">
                <div className="flex-shrink-0 p-4 bg-purple-100 text-purple-600 rounded-lg">
                  <HiOutlineMail className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Chat us</h4>
                  <p className="text-gray-500 text-sm">Send us an email</p>
                  <a
                    href="mailto:info@vancore.ng"
                    className="mt-1 block text-gray-700 text-sm"
                  >
                    info@vancore.ng
                  </a>
                </div>
              </div>

              {/* Visit us */}
              <div className="flex items-start bg-white rounded-lg shadow p-6">
                <div className="flex-shrink-0 p-4 bg-purple-100 text-purple-600 rounded-lg">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Visit us</h4>
                  <p className="text-gray-500 text-sm">Visit our office.</p>
                  <p className="mt-1 text-gray-700 text-sm">
                    3, Idowu Taylor Street, P.O. Box 70767, Victoria Island,
                    Lagos, Nigeria.
                  </p>
                </div>
              </div>

              {/* Call us */}
              <div className="flex items-start bg-white rounded-lg shadow p-6">
                <div className="flex-shrink-0 p-4 bg-purple-100 text-purple-600 rounded-lg">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">Call us</h4>
                  <p className="text-gray-500 text-sm">Sun–Sat from 8 am to 6 pm.</p>
                  <p className="mt-1 text-gray-700 text-sm">+234 (0) 701 358 2143</p>
                  <p className="text-gray-700 text-sm">+234 (0) 701 358 2143</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Message Form ─────────────────────────── */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Send a message
            </h3>
            <p className="text-gray-600 mb-6">You can send us a message</p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 bg-white p-6 rounded-lg shadow"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  {...register('name', { required: true })}
                  placeholder="Your name"
                  className="w-full bg-gray-100 rounded-lg px-4 py-3 focus:outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">Required</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  {...register('email', { required: true })}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-gray-100 rounded-lg px-4 py-3 focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">Required</p>
                )}
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your company
                </label>
                <input
                  {...register('company')}
                  placeholder="Your company"
                  className="w-full bg-gray-100 rounded-lg px-4 py-3 focus:outline-none"
                />
              </div>

              {/* Phone (Controller + PhoneInput) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Controller
                  control={control}
                  name="phone"
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      international
                      defaultCountry="NG"
                      value={value}
                      onChange={onChange}
                      placeholder="+234 801 234 5678"
                      className="w-full bg-gray-100 rounded-lg px-4 py-3 focus:outline-none"
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">Required</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  {...register('message', { required: true })}
                  placeholder="Write your message…"
                  rows={4}
                  className="w-full bg-gray-100 rounded-lg px-4 py-3 focus:outline-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">Required</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
              >
                {isSubmitting ? 'Sending…' : 'Submit'}
              </button>

              {isSubmitSuccessful && (
                <p className="text-green-600 text-center mt-4">
                  Thanks! We’ll be in touch soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <FAQSection />
    </main>
  )
}
