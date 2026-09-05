import React from 'react';
import { CalendarDays, CheckCircle2, Clock3, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { columns } from './columns';
import { DataTable } from '@/components/data-table';
import Link from 'next/link';
import { listEvent } from '@/services/event';

export const dynamic = 'force-dynamic';

export default async function EventPage() {
  const events = await listEvent();

  const totalEvent = events?.length ?? 0;

  const activeEvent = events?.filter((event) => event.isActive === true).length ?? 0;

  const inactiveEvent = events?.filter((event) => event.isActive === false).length ?? 0;

  return (
    <main className='min-h-screen w-full bg-[#F7F4ED]'>
      <div className='mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10'>
        {/* =====================================================
            HEADER
        ====================================================== */}
        <section className='flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <div className='mb-3 flex items-center gap-2'>
              <span className='h-2 w-2 rounded-full bg-[#EFCB2D]' />

              <span className='text-xs font-bold uppercase tracking-wider text-[#8E2730]/60'>Master Data</span>
            </div>

            <h1 className='text-3xl font-black tracking-tight text-[#172536] sm:text-4xl'>Event</h1>

            <p className='mt-2 text-sm text-[#172536]/50'>Kelola seluruh event HEYJONG Community.</p>
          </div>

          <Link
            href='/activity/add'
            className='
              inline-flex
              h-11
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#8E2730]
              px-5
              font-bold
              text-white
              shadow-lg
              shadow-[#8E2730]/10
              transition-all
              hover:-translate-y-0.5
              hover:bg-[#a73e47]
            '
          >
            <Plus className='h-4 w-4' />
            Buat Event Baru
          </Link>
        </section>

        {/* =====================================================
            STATISTICS
        ====================================================== */}
        <section className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3'>
          {/* Total */}
          <div className='rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#8E2730]/10'>
                <CalendarDays className='h-5 w-5 text-[#8E2730]' />
              </div>

              <span className='text-xs font-bold text-[#172536]/30'>TOTAL</span>
            </div>

            <p className='mt-5 text-sm font-medium text-[#172536]/50'>Total Event</p>

            <p className='mt-1 text-3xl font-black text-[#172536]'>{totalEvent}</p>
          </div>

          {/* Active */}
          <div className='rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFCB2D]/20'>
                <CheckCircle2 className='h-5 w-5 text-[#8E2730]' />
              </div>

              <span className='rounded-full bg-[#EFCB2D]/20 px-2.5 py-1 text-[10px] font-bold text-[#8E2730]'>
                AKTIF
              </span>
            </div>

            <p className='mt-5 text-sm font-medium text-[#172536]/50'>Event Aktif</p>

            <p className='mt-1 text-3xl font-black text-[#172536]'>{activeEvent}</p>
          </div>

          {/* Inactive */}
          <div className='rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#172536]/5'>
                <Clock3 className='h-5 w-5 text-[#172536]/60' />
              </div>

              <span className='rounded-full bg-[#172536]/5 px-2.5 py-1 text-[10px] font-bold text-[#172536]/40'>
                NON AKTIF
              </span>
            </div>

            <p className='mt-5 text-sm font-medium text-[#172536]/50'>Event Non Aktif</p>

            <p className='mt-1 text-3xl font-black text-[#172536]'>{inactiveEvent}</p>
          </div>
        </section>

        {/* =====================================================
            TABLE
        ====================================================== */}
        <section className='mt-8 rounded-2xl border border-[#172536]/10 bg-white shadow-sm'>
          <div className='border-b border-[#172536]/10 px-6 py-5'>
            <h2 className='text-lg font-black text-[#172536]'>Daftar Event</h2>

            <p className='mt-1 text-xs text-[#172536]/45'>Kelola event dan QR absensi komunitas.</p>
          </div>

          <div className='p-4 sm:p-6'>
            <DataTable columns={columns} data={events || []} />
          </div>
        </section>
      </div>
    </main>
  );
}
