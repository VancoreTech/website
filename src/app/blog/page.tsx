'use client'

import React, { useState } from 'react'
import BlogHeader from '@/components/BlogHeader'
import BlogTop from '@/components/BlogTop'
import BlogCategories, { Category } from '@/components/BlogCategories'
import BlogGrid from '@/components/BlogGrid'
import { Post } from '@/components/BlogCard'

export default function BlogPage() {
  //The first 4 posts (for the “Featured + next 3” section)
  const allPosts: Post[] = [
    {
      slug: 'how-online-payment-works-on-vancore',
      title: 'How does Online Payment Work on Vancore?',
      excerpt:
        'A beginner’s guide to launching your business online with tools like Vancore.',
      coverImage: '/images/blog-image-1.jpg',
      category: 'Marketing',
      publishedAt: 'Oct 22, 2024',
    },
    {
      slug: 'take-small-business-online',
      title: 'How to Take Your Small Business Online in 5 Simple Steps',
      excerpt:
        'Step-by-step guide to set up your store quickly.',
      coverImage: '/images/blog-image-2.jpg',
      category: 'Features',
      publishedAt: 'Oct 26, 2024',
    },
    {
      slug: 'digital-invoices-build-trust',
      title: 'Why Digital Invoices Help Build Customer Trust',
      excerpt: '',
      coverImage: '/images/blog-image-3.jpg',
      category: 'Tips',
      publishedAt: 'Oct 28, 2024',
    },
    {
      slug: 'mastering-inventory-management',
      title: 'Mastering Inventory Management: A Simple Guide for Growing Brands',
      excerpt: '',
      coverImage: '/images/blog-image-4.jpg',
      category: 'Technology',
      publishedAt: 'Oct 16, 2024',
    },
  ]

  // First 4 for BlogTop
  const featuredAndNextThree = allPosts.slice(0, 4)

  // Track which category tab is active
  const [activeCategory, setActiveCategory] = useState<Category>('All')

  return (
    <>
      {/* ─── 1) Blog Header (search bar + “OUR BLOG”) ──────────────────────────── */}
      <BlogHeader />

      {/* ─── 2) Top Section: one large “featured” + 3 smaller posts ─────────────── */}
      <BlogTop posts={featuredAndNextThree} />

      {/* ─── 3) Category Tabs + “Latest Posts” heading + Grid with “Load more” ─── */}
      <section className="w-full bg-transparent px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-screen-2xl">
          {/* “Latest Posts” Title */}
          <h2 className="text-3xl font-bold text-[#1D2939] text-center mb-8">
            Latest Posts
          </h2>

          {/* Category Tabs (centered) */}
          <div className="flex justify-center mb-8">
            <BlogCategories onChange={(cat) => setActiveCategory(cat)} />
          </div>

          {/* BlogGrid filters & paginates itself based on activeCategory */}
          <BlogGrid activeCategory={activeCategory} />
        </div>
      </section>
    </>
  )
}
