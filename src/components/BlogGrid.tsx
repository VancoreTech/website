// File: src/components/BlogGrid.tsx
'use client'

import React, { useState } from 'react'
import BlogCard, { Post } from './BlogCard'
import { Category } from './BlogCategories'

/**
 * Dummy data for “other posts.” 
 * Replace these objects with real data once your backend is ready.
 */
const OTHER_POSTS: Post[] = [
  {
    slug: 'accepting-payments-works-best',
    title: 'Accepting Payments in Nigeria: What Works Best',
    excerpt:
      'A simple breakdown of payment methods Nigerian businesses can use—and how Vancore supports them.',
    coverImage: '/images/blog1.jpg',
    category: 'Feature',
    publishedAt: 'Oct 22, 2024',
  },
  {
    slug: 'easy-seo-tips-online-store',
    title: '5 Easy SEO Tips for Your New Online Store',
    excerpt:
      'Improve your search rankings without spending a dime on ads.',
    coverImage: '/images/blog2.jpg',
    category: 'Tips',
    publishedAt: 'Oct 18, 2024',
  },
  {
    slug: 'choosing-right-hosting',
    title: 'Choosing the Right Hosting for Your Ecommerce Site',
    excerpt:
      'Shared vs. VPS vs. dedicated: which hosting tier makes sense for you?',
    coverImage: '/images/blog3.jpg',
    category: 'Technology',
    publishedAt: 'Oct 12, 2024',
  },
  {
    slug: 'online-security-tips',
    title: '5 Tips to Keep Your Online Store Secure',
    excerpt:
      'Practical measures you can take to protect customer data and payment information.',
    coverImage: '/images/blog4.jpg',
    category: 'Technology',
    publishedAt: 'Oct 10, 2024',
  },
  {
    slug: 'boosting-customer-success',
    title: 'From Signups to Sales: Boosting Customer Success with Vancore',
    excerpt:
      'Discover how to onboard new merchants effectively and reduce churn with in-app guidance.',
    coverImage: '/images/blog5.jpg',
    category: 'Customer Success',
    publishedAt: 'Oct 02, 2024',
  },
  {
    slug: 'mobile-optimization-matters',
    title: 'Why Mobile Optimization Matters in 2024',
    excerpt:
      'Ensure your store is mobile-friendly to capture today’s on-the-go shoppers.',
    coverImage: '/images/blog6.jpg',
    category: 'Tips',
    publishedAt: 'Sep 25, 2024',
  },
  {
    slug: 'low-cost-marketing-strategies',
    title: 'Top 7 Low-Cost Marketing Strategies for Small Shops',
    excerpt:
      'Effective, budget-friendly ways to put your store in front of more eyes.',
    coverImage: '/images/blog7.jpg',
    category: 'Marketing',
    publishedAt: 'Sep 15, 2024',
  },
  {
    slug: 'seo-best-practices-ecommerce',
    title: 'SEO Best Practices for E-commerce in 2024',
    excerpt:
      'Learn how to optimize your product pages to rank higher in Google search.',
    coverImage: '/images/blog8.jpg',
    category: 'Technology',
    publishedAt: 'Sep 01, 2024',
  },
  {
    slug: 'leverage-customer-feedback',
    title: 'How to Leverage Customer Feedback to Improve Sales',
    excerpt:
      'Turning real-world feedback into actionable improvements for your store.',
    coverImage: '/images/blog9.jpg',
    category: 'Customer Success',
    publishedAt: 'Aug 20, 2024',
  },
  {
    slug: 'running-email-campaigns',
    title: 'Running Effective Email Campaigns in 2024',
    excerpt:
      'Tips on building a mailing list and writing copy that converts.',
    coverImage: '/images/blog10.jpg',
    category: 'Marketing',
    publishedAt: 'Aug 10, 2024',
  },
  // …you can append more dummy posts here if needed…
]

interface BlogGridProps {
  /** Which category is currently active (All / Features / Tips / etc.) */
  activeCategory: Category
}

export default function BlogGrid({ activeCategory }: BlogGridProps) {
  // How many posts are currently visible (start at 9)
  const [visibleCount, setVisibleCount] = useState(9)

  // Filter by category (unless “All” is chosen)
  const filteredPosts = 
    activeCategory === 'All'
      ? OTHER_POSTS
      : OTHER_POSTS.filter((p) => p.category === activeCategory)

  // Then slice out the first `visibleCount` of whatever remains
  const visiblePosts = filteredPosts.slice(0, visibleCount)

  // If we’ve already shown every filtered post, hide the “Load more” button
  const allLoaded = visibleCount >= filteredPosts.length

 return (
  <section className="w-full bg-transparent py-16">
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visiblePosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {/* ── Only show “Load more” if there are more posts to reveal ── */}
      {!allLoaded && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 9)}
            className="
              inline-flex
                px-[58px] py-[18px]
                border-2 border-[#0A6DEE]
                text-[#0A6DEE]
                text-[18px] font-semibold leading-[28px]
                rounded-[10px]
                bg-transparent
                hover:bg-[#0A6DEE]/10
                transition-colors
              "
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
