'use client';

import React, { useState } from 'react';

export type Category =
  | 'All'
  | 'Features'
  | 'Tips'
  | 'Technology'
  | 'Customer Success'
  | 'Marketing';

const ALL_CATEGORIES: Category[] = [
  'All',
  'Features',
  'Tips',
  'Technology',
  'Customer Success',
  'Marketing',
];

interface BlogCategoriesProps {
  onChange: (category: Category) => void;
}

export default function BlogCategories({ onChange }: BlogCategoriesProps) {
  const [activeCat, setActiveCat] = useState<Category>('All');

  function handleClick(cat: Category) {
    setActiveCat(cat);
    onChange(cat);
  }

  return (
    <nav
      aria-label="Blog categories"
      className="w-full overflow-x-auto text-center scrollbar-hide"
    >
      <ul className="inline-flex space-x-8 px-4 lg:px-0">
        {ALL_CATEGORIES.map((cat) => (
          <li key={cat} className="relative">
            <button
              onClick={() => handleClick(cat)}
              className={`
                font-medium text-sm whitespace-nowrap
                ${
                  activeCat === cat
                    ? 'text-purple-600 underline underline-offset-4 decoration-2'
                    : 'text-gray-500 hover:text-gray-900'
                }
              `}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
