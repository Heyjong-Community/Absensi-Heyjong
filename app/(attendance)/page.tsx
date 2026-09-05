import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, CalendarDays, Sparkles } from 'lucide-react';
import ListEvent from '@/components/event/ListEvent';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className='min-h-screen overflow-hidden bg-[#F7F4ED] text-[#172536]'>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className='relative min-h-[720px] overflow-hidden bg-[#8E2730]'>
        {/* Decorative shapes */}

        {/* Yellow circle - top left */}
        <div className='absolute -left-28 -top-28 h-80 w-80 rounded-full bg-[#EFCB2D] blur-sm' />

        {/* White circle - bottom right */}
        <div className='absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-white/10' />

        {/* Yellow rounded square */}
        <div className='absolute right-[10%] top-[18%] hidden h-28 w-28 rotate-12 rounded-[2.5rem] bg-[#EFCB2D] opacity-90 lg:block' />

        {/* Small circles */}
        <div className='absolute left-[12%] top-[32%] h-4 w-4 rounded-full bg-white/70' />

        <div className='absolute left-[18%] top-[38%] h-2.5 w-2.5 rounded-full bg-[#EFCB2D]' />

        <div className='absolute right-[30%] top-[12%] h-3 w-3 rounded-full bg-white/50' />

        <div className='absolute bottom-[25%] left-[8%] h-5 w-5 rounded-full bg-[#EFCB2D]' />

        {/* Main hero container */}
        {/* <div className='relative z-10 mx-auto flex min-h-[720px] max-w-7xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-12'> */}
        <div className='relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-12'>
          {/* =====================
              Navbar
          ====================== */}
          <nav className='flex items-center justify-between'>
            {/* Logo */}
            <Link href='/' className='flex items-center'>
              <Image
                src='/images/logo-white.png'
                width={100}
                height={100}
                alt='HEYJONG Community'
                className='h-16 w-16 object-contain'
              />
            </Link>

            {/* Navigation */}
            <div className='hidden items-center gap-8 text-sm font-semibold text-white/80 md:flex'>
              <Link href='#events' className='transition hover:text-white'>
                Events
              </Link>

              <Link href='#about' className='transition hover:text-white'>
                About
              </Link>

              <Link
                href='/login'
                className='
                  rounded-full
                  bg-white
                  px-5
                  py-2.5
                  text-[#8E2730]
                  transition
                  hover:-translate-y-0.5
                  hover:bg-[#EFCB2D]
                '
              >
                Masuk
              </Link>
            </div>

            {/* Mobile login */}
            <Link
              href='/login'
              className='
                rounded-full
                bg-white
                px-5
                py-2.5
                text-sm
                font-bold
                text-[#8E2730]
                md:hidden
              '
            >
              Masuk
            </Link>
          </nav>

          {/* =====================
              Hero Content
          ====================== */}
          <div className='grid items-center gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr]'>
            {/* Left */}
            <div className='max-w-3xl'>
              {/* Badge */}
              <div className='mb-7 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm'>
                <Sparkles className='h-4 w-4 text-[#EFCB2D]' />
                Welcome, Jongers!
              </div>

              {/* Heading */}
              <h1 className='text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl'>
                Let&apos;s Grow
                <br />
                <span className='text-[#EFCB2D]'>Together.</span>
              </h1>

              <p className='mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg'>
                Tempat untuk tumbuh, berkarya, berdampak, dan berbagi kebaikan bersama HEYJONG Community.
              </p>

              {/* CTA */}
              <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
                <Link
                  href='#events'
                  className='
                    group
                    inline-flex
                    h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#EFCB2D]
                    px-6
                    text-sm
                    font-bold
                    text-[#8E2730]
                    shadow-lg
                    shadow-black/10
                    transition-all
                    hover:-translate-y-0.5
                    hover:bg-[#f5d64f]
                  '
                >
                  Lihat Event
                  <ArrowRight
                    className='
                      h-4
                      w-4
                      transition-transform
                      group-hover:translate-x-1
                    '
                  />
                </Link>

                <Link
                  href='#about'
                  className='
                    inline-flex
                    h-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/25
                    px-6
                    text-sm
                    font-bold
                    text-white
                    transition
                    hover:bg-white/10
                  '
                >
                  Tentang Kami
                </Link>
              </div>
            </div>

            {/* Right visual */}
            <div className='relative hidden h-[380px] lg:block'>
              {/* Main card */}
              <div
                className='
                  absolute
                  right-8
                  top-8
                  w-72
                  rotate-3
                  rounded-[2rem]
                  bg-white
                  p-6
                  shadow-2xl
                '
              >
                <div className='mb-5 flex items-center justify-between'>
                  <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#8E2730]'>
                    <CalendarDays className='h-5 w-5 text-white' />
                  </div>

                  <span className='rounded-full bg-[#EFCB2D]/20 px-3 py-1 text-xs font-bold text-[#8E2730]'>EVENT</span>
                </div>

                <p className='text-xs font-semibold uppercase tracking-wider text-[#172536]/40'>Upcoming Event</p>

                <h3 className='mt-2 text-2xl font-black leading-tight text-[#172536]'>
                  Grow Together
                  <br />
                  with Jongers
                </h3>

                <div className='mt-6 h-2 rounded-full bg-[#F7F4ED]'>
                  <div className='h-2 w-2/3 rounded-full bg-[#8E2730]' />
                </div>

                <p className='mt-3 text-xs text-[#172536]/50'>Join the community & make an impact.</p>
              </div>

              {/* Yellow card */}
              <div
                className='
                  absolute
                  bottom-5
                  left-5
                  flex
                  h-32
                  w-32
                  -rotate-12
                  items-center
                  justify-center
                  rounded-[2rem]
                  bg-[#EFCB2D]
                  shadow-xl
                '
              >
                <span className='text-center text-sm font-black leading-tight text-[#8E2730]'>
                  GROW
                  <br />
                  CREATE
                  <br />
                  IMPACT
                </span>
              </div>

              {/* White circle */}
              <div className='absolute bottom-14 right-0 h-20 w-20 rounded-full bg-white/90' />
            </div>
          </div>

          {/* Scroll */}
          <a
            href='#events'
            className='mx-auto flex flex-col items-center gap-2 text-white/50 transition hover:text-white'
          >
            <span className='text-xs font-medium'>Explore</span>

            <ArrowDown className='h-4 w-4 animate-bounce' />
          </a>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}
      <section id='about' className='mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12'>
        <div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
          <div>
            <div className='mb-5 inline-flex items-center gap-2 rounded-full bg-[#8E2730]/10 px-4 py-2 text-xs font-bold text-[#8E2730]'>
              <span className='h-2 w-2 rounded-full bg-[#EFCB2D]' />
              About HEYJONG
            </div>

            <h2 className='text-4xl font-black leading-tight tracking-tight sm:text-5xl'>
              Bukan hanya
              <br />
              <span className='text-[#8E2730]'>sebuah komunitas.</span>
            </h2>

            <p className='mt-6 max-w-xl text-base leading-8 text-[#172536]/60'>
              HEYJONG Community menjadi ruang untuk bertemu, belajar, berkolaborasi, dan menciptakan dampak positif
              bersama.
            </p>
          </div>

          {/* Values */}
          <div className='grid grid-cols-2 gap-4'>
            <div className='rounded-3xl bg-[#8E2730] p-7 text-white'>
              <span className='text-4xl font-black'>01</span>

              <h3 className='mt-10 text-xl font-black'>Grow</h3>

              <p className='mt-2 text-sm leading-6 text-white/65'>Terus belajar dan berkembang bersama.</p>
            </div>

            <div className='mt-8 rounded-3xl bg-[#EFCB2D] p-7 text-[#8E2730]'>
              <span className='text-4xl font-black'>02</span>

              <h3 className='mt-10 text-xl font-black'>Create</h3>

              <p className='mt-2 text-sm leading-6 text-[#8E2730]/65'>Mengubah ide menjadi karya nyata.</p>
            </div>

            <div className='rounded-3xl border border-[#172536]/10 bg-white p-7'>
              <span className='text-4xl font-black text-[#8E2730]'>03</span>

              <h3 className='mt-10 text-xl font-black'>Connect</h3>

              <p className='mt-2 text-sm leading-6 text-[#172536]/55'>
                Bertemu dengan orang-orang yang punya visi yang sama.
              </p>
            </div>

            <div className='mt-8 rounded-3xl bg-[#172536] p-7 text-white'>
              <span className='text-4xl font-black text-[#EFCB2D]'>04</span>

              <h3 className='mt-10 text-xl font-black'>Impact</h3>

              <p className='mt-2 text-sm leading-6 text-white/60'>Bersama menciptakan dampak positif.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EVENTS
      ====================================================== */}
      <section id='events' className='bg-white'>
        <div className='mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12'>
          <div className='mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end'>
            <div>
              <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-[#EFCB2D]/20 px-4 py-2 text-xs font-bold text-[#8E2730]'>
                <CalendarDays className='h-3.5 w-3.5' />
                Community Events
              </div>

              <h2 className='text-4xl font-black tracking-tight sm:text-5xl'>Event Terbaru</h2>

              <p className='mt-3 max-w-lg text-sm leading-6 text-[#172536]/55'>
                Temukan event HEYJONG berikutnya dan jadilah bagian dari perjalanan kita bersama.
              </p>
            </div>

            <Link href='#events' className='group inline-flex items-center gap-2 text-sm font-bold text-[#8E2730]'>
              Lihat semua
              <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </div>

          {/* Existing Event Component */}
          <ListEvent />
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className='bg-[#172536] text-white'>
        <div className='mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12'>
          <div>
            <p className='text-lg font-black'>HEYJONG COMMUNITY</p>

            <p className='mt-1 text-sm text-white/45'>Let&apos;s Grow Together & Spread Good Vibes.</p>
          </div>

          <div className='flex items-center gap-5 text-sm text-white/50'>
            <Link href='#about' className='transition hover:text-white'>
              About
            </Link>

            <Link href='#events' className='transition hover:text-white'>
              Events
            </Link>

            <Link href='/login' className='transition hover:text-white'>
              Login
            </Link>
          </div>

          <p className='text-xs text-white/30'>© {new Date().getFullYear()} HEYJONG</p>
        </div>
      </footer>
    </main>
  );
}
