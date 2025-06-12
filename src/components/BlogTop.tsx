'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from './BlogCard';

interface BlogTopProps {
  posts: Post[]; // must be at least 4 posts
}

export default function BlogTop({ posts }: BlogTopProps) {
  const [featured, ...rest] = posts;
  const nextThree = rest.slice(0, 3);

  return (
    <section className="w-full bg-transparent">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* ─── Featured (vertical split) ────────────────────────────────── */}
          <div className="w-full lg:w-[546px]">
            <Link href="/blog">
              <div className="flex flex-col w-full h-[627px] rounded-lg overflow-hidden bg-white shadow-md cursor-pointer">
                {/* Top half: cover image */}
                <div className="relative w-full h-1/2">
                  <Image
                    src={featured.coverImage}
                    alt={featured.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                </div>
                {/* Bottom half: text background */}
                <div className="w-full h-1/2 px-6 py-4 flex flex-col justify-center bg-white">
                  <span className="self-start inline-block whitespace-nowrap px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
                    {featured.category}
                  </span>
                  <p className="mt-2 text-gray-500 text-xs">
                    {featured.publishedAt}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-[#1D2939]">
                    {featured.title}
                  </h3>
                  <p className="mt-1 text-[#667085] text-sm">
                    {featured.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* ─── Next three smaller cards ────────────────────────────────── */}
          <div className="w-full lg:w-[694px] flex flex-col gap-6">
            {nextThree.map((p) => (
              <Link
                key={p.slug}
                href="/blog"
                className="block w-full"
              >
                <div className="flex w-full h-[187px] rounded-lg overflow-hidden bg-white shadow-sm cursor-pointer">
                  {/* Left half: thumbnail */}
                  <div className="relative w-1/2 h-full">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      unoptimized
                    />
                  </div>
                  {/* Right half: date + title */}
                  <div className="w-1/2 px-4 py-3 flex flex-col justify-center">
                    <p className="text-xs text-gray-400">
                      {p.publishedAt}
                    </p>
                    <h4 className="mt-1 text-lg font-medium text-[#1D2939] leading-tight">
                      {p.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
