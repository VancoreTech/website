'use client';

import Image from 'next/image';

export default function DashboardPreview() {
  return (
    <div
      className="relative mx-auto my-16 w-full max-w-[877px] aspect-[877/618] rounded-[28px] overflow-hidden"
      style={{
        boxShadow:
          '0px 120px 34px 0px rgba(0,0,0,0.00),' +
          ' 0px 77px 31px 0px rgba(0,0,0,0.01),' +
          ' 0px 43px 26px 0px rgba(0,0,0,0.05),' +
          ' 0px 19px 19px 0px rgba(0,0,0,0.09),' +
          ' 0px 5px 11px 0px rgba(0,0,0,0.10)',
      }}
    >
      <Image
        src="/images/dashboardandlogo1.jpg"
        alt="Vancore Dashboard preview"
        width={877}
        height={618}
        priority
        draggable={false}
        style={{ objectFit: 'cover' }}
      />

      {/* bottom fade‐out overlay */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: '200px',
          background: 'linear-gradient(to top, #F5F8F7 0%, transparent 100%)',
        }}
      />
    </div>
  );
}
