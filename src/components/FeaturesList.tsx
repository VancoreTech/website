'use client';

import React from 'react';
import FeatureItem, { FeatureItemProps } from './FeatureItem';

const features: FeatureItemProps[] = [
  {
    title: (
      <>
        Launch your online store and <br/>
        start selling in minutes
      </>
    ),
    description: (
      <>
        Showcase your products, accept payments, and manage orders<br/>
        from one simple dashboard.
      </>
    ),
    imageUrl: '/images/feature1.png',
    gradient: '134deg, #F9E7FF 10%, #E8C1F4 74%',
    height: 542,
    // Removed `imageWidth: 443,` because FeatureItemProps no longer declares it
  },
  {
    title: (
      <>
        Let Vancore handle your orders<br/>
        while you focus on selling
      </>
    ),
    description: (
      <>
        Vancore updates your inventory after every sale, handles delivery,<br/>
        workflows, and sends professional email notifications at every stage,<br/>
        from shipping to delivery and feedback.
      </>
    ),
    gradient: '134deg, #E7F0FF 10%, #C1D4F4 74%',
    height: 443,
    fullWidth: true,
  },
  {
    title: (
      <>
        Track your stock in real-time, <br/>
         without guesswork
      </>
    ),
    description: (
      <>
        Stay on top of what’s in stock, what’s low, and what’s selling fast,<br/>
        Vancore gives you full visibility and control over your inventory,<br/>
        across all your sales channels, in one simple dashboard.
      </>
    ),
    imageUrl: '/images/feature2.png',
    gradient: '200deg, #E7FFE7 10%, #C1F4C4 74%',
    height: 542,
    reverse: true,
  },
  {
    title: (
      <>
        Get paid faster, securely, and <br/>
         on your terms
      </>
    ),
    description: (
      <>
        Accept payments through multiple channels; bank transfer or card.<br/>
        With Vancore your transactions are secure, your records are,<br/>
        organized and your cash flow stays steady.
      </>
    ),
    imageUrl: '/images/feature3.png',
    gradient: '220deg, #FFF4E7 10%, #F4DDC1 74%',
    height: 542,
  },
  {
    title: (
      <>
        Send invoices, track sales, and,<br/>
        stay organized
      </>
    ),
    description: (
      <>
        Create and share professional invoices, send digital receipts, and,<br/>
        log every sale or expense all in one place. With Vancore, your,<br/>
        records are always accurate, secure, and easy to find.
      </>
    ),
    gradient: '240deg, #F9E7FF 10%, #E8C1F4 74%',
    height: 443,
    fullWidth: true,
  },
];

export default function FeaturesList() {
  return (
    <section
      className="
        mx-auto w-full max-w-screen-xl
        px-4 sm:px-6 lg:px-8
        mt-12 space-y-12
      "
    >
      {features.map((f, i) => (
        <FeatureItem key={i} {...f} />
      ))}
    </section>
  );
}
