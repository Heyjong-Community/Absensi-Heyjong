import { CalendarDays, CheckCircle2, ClipboardCheck, Users } from 'lucide-react';

import { DataTable } from '@/components/data-table';
import { getAllAttendee } from '@/services/attendance';
import { columns } from './columns';

export default async function AbsensiDashPage() {
  const attendee = await getAllAttendee();

  const totalAbsensi = attendee?.length ?? 0;

  const hadir = attendee?.filter((item) => item.status?.toLowerCase() === 'hadir').length ?? 0;

  const tidakHadir = attendee?.filter((item) => item.status?.toLowerCase() !== 'hadir').length ?? 0;

  const totalEvent = new Set(attendee?.map((item) => item.event?.nama)).size;

  return (
    <main className='min-h-screen w-full bg-[#F7F4ED]'>
      <div className='mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10'>
        {/* =====================================================
            HEADER
        ====================================================== */}

        <section>
          <div className='mb-3 flex items-center gap-2'>
            <span className='h-2 w-2 rounded-full bg-[#EFCB2D]' />

            <span className='text-xs font-bold uppercase tracking-wider text-[#8E2730]/60'>Master Data</span>
          </div>

          <h1 className='text-3xl font-black tracking-tight text-[#172536] sm:text-4xl'>Rekap Absensi</h1>

          <p className='mt-2 text-sm text-[#172536]/50'>Pantau dan kelola data kehadiran kegiatan HEYJONG Community.</p>
        </section>

        {/* =====================================================
            STATISTICS
        ====================================================== */}

        <section className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {/* Total Absensi */}

          <div className='rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#8E2730]/10'>
                <ClipboardCheck className='h-5 w-5 text-[#8E2730]' />
              </div>

              <span className='text-xs font-bold text-[#172536]/30'>TOTAL</span>
            </div>

            <p className='mt-5 text-sm font-medium text-[#172536]/50'>Total Absensi</p>

            <p className='mt-1 text-3xl font-black text-[#172536]'>{totalAbsensi}</p>
          </div>

          {/* Hadir */}

          <div className='rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFCB2D]/20'>
                <CheckCircle2 className='h-5 w-5 text-[#8E2730]' />
              </div>

              <span className='rounded-full bg-[#EFCB2D]/20 px-2.5 py-1 text-[10px] font-bold text-[#8E2730]'>
                HADIR
              </span>
            </div>

            <p className='mt-5 text-sm font-medium text-[#172536]/50'>Kehadiran</p>

            <p className='mt-1 text-3xl font-black text-[#172536]'>{hadir}</p>
          </div>

          {/* Tidak Hadir */}

          <div className='rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#172536]/5'>
                <Users className='h-5 w-5 text-[#172536]/50' />
              </div>

              <span className='rounded-full bg-[#172536]/5 px-2.5 py-1 text-[10px] font-bold text-[#172536]/40'>
                LAINNYA
              </span>
            </div>

            <p className='mt-5 text-sm font-medium text-[#172536]/50'>Status Lainnya</p>

            <p className='mt-1 text-3xl font-black text-[#172536]'>{tidakHadir}</p>
          </div>

          {/* Event */}

          <div className='rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#8E2730]/10'>
                <CalendarDays className='h-5 w-5 text-[#8E2730]' />
              </div>

              <span className='text-xs font-bold text-[#172536]/30'>EVENT</span>
            </div>

            <p className='mt-5 text-sm font-medium text-[#172536]/50'>Event Terdata</p>

            <p className='mt-1 text-3xl font-black text-[#172536]'>{totalEvent}</p>
          </div>
        </section>

        {/* =====================================================
            TABLE
        ====================================================== */}

        <section className='mt-8 rounded-2xl border border-[#172536]/10 bg-white shadow-sm'>
          <div className='border-b border-[#172536]/10 px-6 py-5'>
            <h2 className='text-lg font-black text-[#172536]'>Data Absensi</h2>

            <p className='mt-1 text-xs text-[#172536]/45'>Daftar peserta yang telah melakukan absensi.</p>
          </div>

          <div className='p-4 sm:p-6'>
            <DataTable columns={columns} data={attendee || []} />
          </div>
        </section>
      </div>
    </main>
  );
}
