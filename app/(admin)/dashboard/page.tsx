import { ArrowRight, CalendarDays, CheckCircle2, ChevronRight, Clock3, Users, UserCheck, Plus } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function DashboardPage() {
  return (
    <main className='min-h-screen w-full bg-[#F7F4ED] text-[#172536]'>
      {/* =====================================================
          HEADER
      ====================================================== */}
      <section className='border-b border-[#172536]/10 bg-white'>
        <div className='mx-auto max-w-7xl px-6 py-7 sm:px-8 lg:px-10'>
          <div className='flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <div className='mb-2 flex items-center gap-2'>
                <span className='h-2.5 w-2.5 rounded-full bg-[#EFCB2D]' />

                <span className='text-xs font-bold uppercase tracking-wider text-[#8E2730]/70'>HEYJONG COMMUNITY</span>
              </div>

              <h1 className='text-3xl font-black tracking-tight sm:text-4xl'>Dashboard 👋</h1>

              <p className='mt-1 text-sm text-[#172536]/55'>Pantau aktivitas dan kehadiran komunitas hari ini.</p>
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
                text-sm
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
              Buat Event
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className='mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10'>
        {/* ===================================================
            STATISTICS
        ==================================================== */}
        <section className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {/* Total Event */}
          <div className='group rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg'>
            <div className='flex items-start justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#8E2730]/10'>
                <CalendarDays className='h-5 w-5 text-[#8E2730]' />
              </div>

              <span className='rounded-full bg-[#EFCB2D]/20 px-2.5 py-1 text-[10px] font-bold text-[#8E2730]'>
                EVENT
              </span>
            </div>

            <div className='mt-5'>
              <p className='text-sm font-medium text-[#172536]/50'>Total Event</p>

              <p className='mt-1 text-3xl font-black'>24</p>
            </div>
          </div>

          {/* Total Member */}
          <div className='group rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg'>
            <div className='flex items-start justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFCB2D]/20'>
                <Users className='h-5 w-5 text-[#8E2730]' />
              </div>

              <span className='rounded-full bg-[#172536]/5 px-2.5 py-1 text-[10px] font-bold text-[#172536]/50'>
                MEMBER
              </span>
            </div>

            <div className='mt-5'>
              <p className='text-sm font-medium text-[#172536]/50'>Total Member</p>

              <p className='mt-1 text-3xl font-black'>186</p>
            </div>
          </div>

          {/* Attendance */}
          <div className='group rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg'>
            <div className='flex items-start justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#8E2730]'>
                <UserCheck className='h-5 w-5 text-white' />
              </div>

              <span className='rounded-full bg-[#8E2730]/10 px-2.5 py-1 text-[10px] font-bold text-[#8E2730]'>
                HARI INI
              </span>
            </div>

            <div className='mt-5'>
              <p className='text-sm font-medium text-[#172536]/50'>Kehadiran Hari Ini</p>

              <div className='mt-1 flex items-end gap-2'>
                <p className='text-3xl font-black'>84</p>

                <p className='mb-1 text-xs font-semibold text-[#8E2730]'>/ 100</p>
              </div>
            </div>
          </div>

          {/* Active Event */}
          <div className='group rounded-2xl border border-[#172536]/10 bg-[#172536] p-5 text-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg'>
            <div className='flex items-start justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFCB2D]'>
                <Clock3 className='h-5 w-5 text-[#8E2730]' />
              </div>

              <span className='rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold text-white/70'>LIVE</span>
            </div>

            <div className='mt-5'>
              <p className='text-sm font-medium text-white/50'>Event Aktif</p>

              <p className='mt-1 text-3xl font-black'>2</p>
            </div>
          </div>
        </section>

        {/* ===================================================
            MAIN GRID
        ==================================================== */}
        <section className='mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]'>
          {/* =================================================
              EVENT TERBARU
          ================================================== */}
          <div className='rounded-2xl border border-[#172536]/10 bg-white p-6 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-xs font-bold uppercase tracking-wider text-[#8E2730]/60'>Community</p>

                <h2 className='mt-1 text-xl font-black'>Event Terbaru</h2>
              </div>

              <Link
                href='/activity'
                className='
                  group
                  inline-flex
                  items-center
                  gap-1
                  text-xs
                  font-bold
                  text-[#8E2730]
                '
              >
                Lihat semua
                <ArrowRight
                  className='
                    h-3.5
                    w-3.5
                    transition-transform
                    group-hover:translate-x-1
                  '
                />
              </Link>
            </div>

            {/* Event 1 */}
            <div className='mt-6 flex items-center gap-4 border-b border-[#172536]/10 pb-5'>
              <div className='flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-[#8E2730] text-white'>
                <span className='text-[10px] font-bold uppercase'>Aug</span>

                <span className='text-lg font-black'>28</span>
              </div>

              <div className='min-w-0 flex-1'>
                <h3 className='truncate text-sm font-bold'>Jong Impact #03</h3>

                <p className='mt-1 text-xs text-[#172536]/50'>Community Event • 09:00 WIB</p>
              </div>

              <span className='hidden rounded-full bg-[#EFCB2D]/20 px-3 py-1 text-[10px] font-bold text-[#8E2730] sm:block'>
                UPCOMING
              </span>

              <ChevronRight className='h-4 w-4 text-[#172536]/30' />
            </div>

            {/* Event 2 */}
            <div className='mt-5 flex items-center gap-4 border-b border-[#172536]/10 pb-5'>
              <div className='flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-[#F7F4ED] text-[#8E2730]'>
                <span className='text-[10px] font-bold uppercase'>Aug</span>

                <span className='text-lg font-black'>24</span>
              </div>

              <div className='min-w-0 flex-1'>
                <h3 className='truncate text-sm font-bold'>Community Gathering</h3>

                <p className='mt-1 text-xs text-[#172536]/50'>Gathering • 19:00 WIB</p>
              </div>

              <span className='hidden rounded-full bg-[#8E2730]/10 px-3 py-1 text-[10px] font-bold text-[#8E2730] sm:block'>
                TODAY
              </span>

              <ChevronRight className='h-4 w-4 text-[#172536]/30' />
            </div>

            {/* Event 3 */}
            <div className='mt-5 flex items-center gap-4'>
              <div className='flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-[#F7F4ED] text-[#8E2730]'>
                <span className='text-[10px] font-bold uppercase'>Sep</span>

                <span className='text-lg font-black'>05</span>
              </div>

              <div className='min-w-0 flex-1'>
                <h3 className='truncate text-sm font-bold'>Jong Connect</h3>

                <p className='mt-1 text-xs text-[#172536]/50'>Networking • 13:00 WIB</p>
              </div>

              <span className='hidden rounded-full bg-[#172536]/5 px-3 py-1 text-[10px] font-bold text-[#172536]/50 sm:block'>
                UPCOMING
              </span>

              <ChevronRight className='h-4 w-4 text-[#172536]/30' />
            </div>
          </div>

          {/* =================================================
              ATTENDANCE SUMMARY
          ================================================== */}
          <div className='rounded-2xl bg-[#8E2730] p-6 text-white shadow-lg shadow-[#8E2730]/10'>
            <div className='flex items-start justify-between'>
              <div>
                <p className='text-xs font-bold uppercase tracking-wider text-white/50'>Attendance</p>

                <h2 className='mt-1 text-xl font-black'>Kehadiran</h2>
              </div>

              <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#EFCB2D]'>
                <CheckCircle2 className='h-5 w-5 text-[#8E2730]' />
              </div>
            </div>

            {/* Percentage */}
            <div className='mt-8 flex items-end gap-2'>
              <span className='text-5xl font-black'>84%</span>

              <span className='mb-2 text-xs text-white/50'>bulan ini</span>
            </div>

            {/* Progress */}
            <div className='mt-5 h-2 overflow-hidden rounded-full bg-white/15'>
              <div className='h-full rounded-full bg-[#EFCB2D]' style={{ width: '84%' }} />
            </div>

            <div className='mt-3 flex justify-between text-xs text-white/50'>
              <span>84 hadir</span>
              <span>100 total</span>
            </div>

            {/* Mini stats */}
            <div className='mt-8 grid grid-cols-2 gap-3'>
              <div className='rounded-xl bg-white/10 p-4'>
                <p className='text-xs text-white/45'>Hadir</p>

                <p className='mt-1 text-xl font-black'>84</p>
              </div>

              <div className='rounded-xl bg-white/10 p-4'>
                <p className='text-xs text-white/45'>Tidak Hadir</p>

                <p className='mt-1 text-xl font-black'>16</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            QUICK ACTION
        ==================================================== */}
        <section className='mt-8'>
          <div className='mb-4'>
            <p className='text-xs font-bold uppercase tracking-wider text-[#8E2730]/60'>Quick Actions</p>

            <h2 className='mt-1 text-xl font-black'>Aksi Cepat</h2>
          </div>

          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            <Link
              href='/activity/add'
              className='
                group
                rounded-2xl
                border
                border-[#172536]/10
                bg-white
                p-5
                shadow-sm
                transition-all
                hover:-translate-y-1
                hover:border-[#8E2730]/20
                hover:shadow-lg
              '
            >
              <div className='flex items-center justify-between'>
                <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFCB2D]/20'>
                  <Plus className='h-5 w-5 text-[#8E2730]' />
                </div>

                <ArrowRight className='h-4 w-4 text-[#172536]/20 transition-transform group-hover:translate-x-1' />
              </div>

              <h3 className='mt-5 text-sm font-bold'>Buat Event</h3>

              <p className='mt-1 text-xs leading-5 text-[#172536]/50'>Tambahkan event komunitas baru.</p>
            </Link>

            <Link
              href='/dashboard/activity'
              className='
                group
                rounded-2xl
                border
                border-[#172536]/10
                bg-white
                p-5
                shadow-sm
                transition-all
                hover:-translate-y-1
                hover:border-[#8E2730]/20
                hover:shadow-lg
              '
            >
              <div className='flex items-center justify-between'>
                <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#8E2730]/10'>
                  <CalendarDays className='h-5 w-5 text-[#8E2730]' />
                </div>

                <ArrowRight className='h-4 w-4 text-[#172536]/20 transition-transform group-hover:translate-x-1' />
              </div>

              <h3 className='mt-5 text-sm font-bold'>Kelola Event</h3>

              <p className='mt-1 text-xs leading-5 text-[#172536]/50'>Lihat dan kelola seluruh event.</p>
            </Link>

            <Link
              href='/members'
              className='
                group
                rounded-2xl
                border
                border-[#172536]/10
                bg-white
                p-5
                shadow-sm
                transition-all
                hover:-translate-y-1
                hover:border-[#8E2730]/20
                hover:shadow-lg
              '
            >
              <div className='flex items-center justify-between'>
                <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#172536]/5'>
                  <Users className='h-5 w-5 text-[#172536]' />
                </div>

                <ArrowRight className='h-4 w-4 text-[#172536]/20 transition-transform group-hover:translate-x-1' />
              </div>

              <h3 className='mt-5 text-sm font-bold'>Kelola Member</h3>

              <p className='mt-1 text-xs leading-5 text-[#172536]/50'>Lihat dan kelola data member.</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
