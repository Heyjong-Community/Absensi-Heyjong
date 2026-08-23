'use client';

import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function SuccessPage() {
  return (
    <main className='relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F7F4ED] px-6 py-10 text-[#172536]'>
      {/* =========================
          Decorative Background
      ========================== */}

      {/* Top left */}
      <div className='absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#8E2730] opacity-95 blur-sm' />

      {/* Bottom right */}
      <div className='absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-[#EFCB2D] opacity-90 blur-sm' />

      {/* Small decoration */}
      <div className='absolute right-[15%] top-[15%] h-20 w-20 rotate-12 rounded-[2rem] bg-[#8E2730]/15' />

      <div className='absolute bottom-[20%] left-[12%] h-5 w-5 rounded-full bg-[#8E2730]' />

      <div className='absolute right-[25%] bottom-[18%] h-4 w-4 rounded-full bg-[#EFCB2D]' />

      {/* =========================
          Success Card
      ========================== */}

      <section className='relative z-10 w-full max-w-lg'>
        <div className='rounded-[2rem] border border-[#172536]/10 bg-white/90 p-8 text-center shadow-2xl shadow-[#8E2730]/10 backdrop-blur-sm sm:p-12'>
          {/* Logo / Brand */}
          <div className='mb-8 flex justify-center'>
            <Image src={`/images/logo-color.png`} width={100} height={100} alt='logo' className='size-24' />
          </div>

          {/* Success Icon */}
          <div className='relative mx-auto mb-7 flex h-24 w-24 items-center justify-center'>
            {/* Outer circle */}
            <div className='absolute inset-0 rounded-full bg-[#EFCB2D]/30' />

            {/* Inner circle */}
            <div className='relative flex h-16 w-16 items-center justify-center rounded-full bg-[#8E2730] shadow-lg shadow-[#8E2730]/20'>
              <Check className='h-8 w-8 text-white' strokeWidth={3} />
            </div>
          </div>

          {/* Heading */}
          <div>
            <div className='mb-3 inline-flex items-center gap-2 rounded-full bg-[#EFCB2D]/20 px-4 py-2 text-xs font-bold text-[#8E2730]'>
              <span className='h-2 w-2 rounded-full bg-[#EFCB2D]' />
              Berhasil!
            </div>

            <h1 className='text-3xl font-black tracking-tight text-[#172536] sm:text-4xl'>
              Form Berhasil
              <br />
              Dikirim! 🎉
            </h1>

            <p className='mx-auto mt-5 max-w-md text-sm leading-7 text-[#172536]/60 sm:text-base'>
              Terima kasih sudah mengisi form. Data kamu sudah berhasil kami terima dan akan segera diproses.
            </p>
          </div>

          {/* Decorative divider */}
          <div className='my-8 flex items-center justify-center gap-2'>
            <span className='h-2 w-2 rounded-full bg-[#8E2730]' />
            <span className='h-2 w-2 rounded-full bg-[#EFCB2D]' />
            <span className='h-2 w-2 rounded-full bg-[#8E2730]' />
          </div>

          {/* Action */}
          <Link
            href='/'
            className='
              group
              inline-flex
              h-12
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#8E2730]
              px-6
              text-sm
              font-bold
              text-white
              shadow-lg
              shadow-[#8E2730]/15
              transition-all
              hover:-translate-y-0.5
              hover:bg-[#a73e47]
              hover:shadow-xl
            '
          >
            Kembali ke Beranda
            <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
          </Link>

          {/* Footer */}
          <p className='mt-8 text-xs text-[#172536]/35'>HEYJONG COMMUNITY</p>
        </div>

        {/* Bottom message */}
        <p className='relative z-10 mt-6 text-center text-xs font-medium text-[#172536]/40'>
          Let&apos;s Grow Together & Spread Good Vibes.
        </p>
      </section>
    </main>
  );
}
