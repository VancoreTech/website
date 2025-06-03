'use client';

import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function BlogHeader() {
  const [search, setSearch] = useState<string>('');

  return (
    <section className="w-full bg-transparent py-12">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold tracking-wide text-purple-600 uppercase">
          Our Blog
        </p>

        {/* Main heading */}
        <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1D2939]">
          Trending topics that helps you stay informed
        </h1>

        {/* Subheading */}
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
          Let us be your go-to for all things order and inventory management. Take a look at our helpful blog articles
        </p>

        {/* Search bar + blue icon */}
        <div className="mt-8 relative mx-auto w-full max-w-md">
          <input
            type="text"
            placeholder="Search blog title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full 
              rounded-full 
              border border-gray-300 
              bg-white 
              py-3 pl-4 pr-12 
              text-gray-700 
              placeholder-gray-400 
              focus:outline-none focus:ring-2 focus:ring-purple-600
            "
          />
          <button
            type="button"
            className="
              absolute right-3 top-1/2 -translate-y-1/2 
              text-white bg-blue-600 
              p-2 rounded-full 
              hover:bg-blue-700 
              transition-colors
            "
          >
            <FiSearch className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
