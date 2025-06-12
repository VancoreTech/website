'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  publishedAt: string;
}

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href="/blog">
      <div className="cursor-pointer flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
        {/* ─── IMAGE ────────────────────────────────────────────────────────── */}
        <div className="relative w-full h-[280px] sm:h-[300px] md:h-[320px]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            unoptimized
          />
        </div>

        {/* ─── TEXT & METADATA ───────────────────────────────────────────────── */}
        <div className="p-6 flex flex-col justify-between flex-1">
          {/* Top Row: category pill + “5 min read” */}
          <div className="flex items-center gap-4">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
              {post.category}
            </span>
            <span className="text-purple-600 text-xs font-medium">
              5 min read
            </span>
          </div>

          {/* Publication date */}
          <p className="mt-2 text-gray-500 text-xs">{post.publishedAt}</p>

          {/* Title + excerpt */}
          <div className="mt-2 flex-grow">
            <h3 className="text-xl font-semibold text-[#1D2939] leading-snug">
              {post.title}
            </h3>
            <p className="mt-2 text-[#667085] text-base">{post.excerpt}</p>
          </div>

          {/* Bottom: “Read post ↗” */}
          <div className="mt-4">
            <span className="inline-flex items-center text-blue-600 text-sm font-medium">
              Read post&nbsp;
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* “↗” arrow path */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14L21 3m0 0h-7m7 0v7"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
