// File: src/components/BlogCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;     // URL to the blog post’s hero image
  category: string;       // e.g. "Marketing"
  publishedAt: string;    // e.g. "Oct 22, 2024"
}

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        {/* ─── Shrink this “image” container height so that text below
                   has more vertical room ─────────────────────── */}
        <div className="relative w-full h-[280px] sm:h-[300px] md:h-[320px]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            unoptimized
          />
        </div>

        {/* ─── Text container underneath the image ───────────────── */}
        <div className="p-6">
          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
            {post.category}
          </span>
          <p className="mt-2 text-gray-500 text-xs">
            {post.publishedAt}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-[#1D2939] leading-snug">
            {post.title}
          </h3>
          <p className="mt-2 text-[#667085] text-base">
            {post.excerpt}
          </p>
        </div>
      </a>
    </Link>
  );
}
