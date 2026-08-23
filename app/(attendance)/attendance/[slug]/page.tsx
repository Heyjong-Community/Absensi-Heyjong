import AttendanceForm from '@/components/AttendanceForm';
import { getEventBySlug } from '@/services/event';
import Link from 'next/link';
import Image from 'next/image';
import { listMemberHeyjong } from '@/services/member';

export default async function AttendanceEventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const event = await getEventBySlug(slug);
  const members = await listMemberHeyjong();

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-[#F7F4ED] text-[#172536]'>
      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      {/* Maroon circle - top left */}
      <div
        className='
          absolute
          -left-32
          -top-32
          h-80
          w-80
          rounded-full
          bg-[#8E2730]
          opacity-95
          blur-sm
        '
      />

      {/* Yellow circle - top right */}
      <div
        className='
          absolute
          -right-32
          -top-20
          h-72
          w-72
          rounded-full
          bg-[#EFCB2D]
          opacity-90
        '
      />

      {/* White decorative circle */}
      <div
        className='
          absolute
          -bottom-40
          -left-32
          h-96
          w-96
          rounded-full
          bg-white
        '
      />

      {/* Maroon decorative shape */}
      <div
        className='
          absolute
          -bottom-20
          -right-20
          h-64
          w-64
          rotate-12
          rounded-[4rem]
          bg-[#8E2730]/10
        '
      />

      {/* Small dots */}
      <div className='absolute left-[12%] top-[30%] h-3 w-3 rounded-full bg-[#EFCB2D]' />

      <div className='absolute right-[15%] top-[35%] h-4 w-4 rounded-full bg-[#8E2730]' />

      <div className='absolute bottom-[25%] left-[8%] h-2.5 w-2.5 rounded-full bg-[#8E2730]' />

      <div className='absolute bottom-[20%] right-[12%] h-5 w-5 rounded-full bg-[#EFCB2D]' />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className='relative z-10 flex min-h-screen flex-col px-5 py-6 sm:px-8'>
        {/* =========================
            HEADER
        ========================== */}
        <div className='flex justify-center'>
          <Link
            href='/'
            className='
              inline-flex
              items-center
              justify-center
              rounded-2xl
              bg-white/80
              p-2
              shadow-lg
              shadow-[#8E2730]/5
              backdrop-blur-sm
              transition
              hover:-translate-y-0.5
            '
          >
            <Image
              src='/images/logo-color.png'
              width={500}
              height={500}
              alt='HEYJONG Community'
              className='size-24 object-contain sm:size-28'
            />
          </Link>
        </div>

        {/* =========================
            MAIN
        ========================== */}
        <div className='flex flex-1 items-center justify-center py-10'>
          <div className='w-full max-w-2xl'>
            {/* Small heading */}
            <div className='mb-6 text-center'>
              <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-[#8E2730]/10 px-4 py-2 text-xs font-bold text-[#8E2730]'>
                <span className='h-2 w-2 rounded-full bg-[#EFCB2D]' />
                HEYJONG COMMUNITY
              </div>

              <h1 className='text-3xl font-black tracking-tight text-[#172536] sm:text-4xl'>Isi Kehadiranmu</h1>

              <p className='mx-auto mt-2 max-w-md text-sm leading-6 text-[#172536]/55'>
                Jangan lupa isi absensi untuk mencatat kehadiranmu di event ini.
              </p>
            </div>

            {/* =========================
                ATTENDANCE CARD
            ========================== */}
            <div
              className='
                rounded-[2rem]
                border
                border-[#172536]/10
                bg-white/95
                p-5
                shadow-2xl
                shadow-[#8E2730]/10
                backdrop-blur-sm
                sm:p-8
              '
            >
              {/* Card header */}
              <div className='mb-7 flex items-center gap-4 border-b border-[#172536]/10 pb-6'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#8E2730] shadow-md shadow-[#8E2730]/15'>
                  <span className='text-lg font-black text-white'>✓</span>
                </div>

                <div>
                  <p className='text-xs font-bold uppercase tracking-wider text-[#8E2730]/60'>Attendance</p>

                  <h2 className='mt-0.5 text-lg font-black text-[#172536]'>Kehadiran Event</h2>
                </div>

                <div className='ml-auto hidden h-10 w-10 rotate-12 rounded-xl bg-[#EFCB2D] sm:block' />
              </div>

              {/* Existing form */}
              <AttendanceForm event={event} members={members} />
            </div>
          </div>
        </div>

        {/* =========================
            FOOTER
        ========================== */}
        <div className='py-5 text-center'>
          <Link
            href='/'
            className='
              text-xs
              font-medium
              text-[#172536]/40
              transition
              hover:text-[#8E2730]
            '
          >
            © HEYJONG Community {new Date().getFullYear()}.
          </Link>
        </div>
      </div>
    </div>
  );
}
