import React from 'react';

export default function DashboardPage() {
  return (
    <div className='w-full'>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='rounded-md shadow-lg border border-gray-200 p-4'></div>
        <div className='rounded-md shadow-lg border border-gray-200 p-4'></div>
        <div className='rounded-md shadow-lg border border-gray-200 p-4'></div>
        <div className='rounded-md shadow-lg border border-gray-200 p-4'></div>
      </section>
      <div className=''>
        <p>DashboardPage</p>
      </div>
    </div>
  );
}
