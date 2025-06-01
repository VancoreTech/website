// File: src/app/blog/page.tsx
'use client';

import React from 'react';
import BlogHeader from '@/components/BlogHeader';
import BlogTop from '@/components/BlogTop';
import BlogCard, { Post } from '@/components/BlogCard';

export default function BlogPage() {
  // Dummy data: replace this with your real data later
  const allPosts: Post[] = [
    {
      slug: 'how-online-payment-works-on-vancore',
      title: 'How does Online Payment Work on Vancore?',
      excerpt: 'A beginner’s guide to launching your business online with tools like Vancore.',
      coverImage: '/images/blog-image-1.jpg',
      category: 'Marketing',
      publishedAt: 'Oct 22, 2024',
    },
    {
      slug: 'take-small-business-online',
      title: 'How to Take Your Small Business Online in 5 Simple Steps',
      excerpt: '...',
      coverImage: '/images/blog-image-2.jpg',
      category: 'Tips',
      publishedAt: 'Oct 26, 2024',
    },
    {
      slug: 'digital-invoices-build-trust',
      title: 'Why Digital Invoices Help Build Customer Trust',
      excerpt: '...',
      coverImage: '/images/blog-image-3.jpg',
      category: 'Technology',
      publishedAt: 'Oct 28, 2024',
    },
    {
      slug: 'mastering-inventory-management',
      title: 'Mastering Inventory Management: A Simple Guide for Growing Brands',
      excerpt: '...',
      coverImage: '/images/blog-image-4.jpg',
      category: 'Operations',
      publishedAt: 'Oct 16, 2024',
    },
    // …more posts…
  ];

  // Pull out first 4 posts:
  const featuredAndNextThree = allPosts.slice(0, 4);
  // The remainder for “Latest Posts” grid:
  const restOfPosts = allPosts.slice(4);

  return (
    <>
      <BlogHeader />

      {/* Top Section (Featured + 3 small side cards) */}
      <BlogTop posts={featuredAndNextThree} />

      {/* ─── LATEST POSTS GRID ───────────────────────────────────── */}
      <section className="relative w-full bg-transparent px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="text-3xl font-bold text-[#1D2939] text-center mb-8">
            Latest Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {restOfPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
