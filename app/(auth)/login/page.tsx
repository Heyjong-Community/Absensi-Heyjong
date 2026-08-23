'use client';

import { actionLogin } from '@/app/actions/authAction';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { InitState, responseState } from '@/types/global';
import Image from 'next/image';
import Link from 'next/link';
import React, { useActionState } from 'react';

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState<InitState, FormData>(
    (prevState, formData) => actionLogin(prevState, formData),
    responseState,
  );

  return (
    <main className='min-h-screen bg-[#F7F4ED] text-[#172536]'>
      <div className='grid min-h-screen lg:grid-cols-2'>
        {/* =====================================================
            LEFT - BRANDING
        ====================================================== */}
        <section className='relative hidden overflow-hidden bg-[#8E2730] lg:flex'>
          {/* Decorative circles */}
          <div className='absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#EFCB2D] blur-sm' />

          <div className='absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-white/80 blur-sm' />

          {/* <div className='absolute right-20 top-20 h-24 w-24 rotate-12 rounded-[2rem] bg-[#D77B91]' /> */}
          <div className='absolute right-20 top-20 h-24 w-24 rotate-12 rounded-[2rem] bg-white/80 blur-md' />

          {/* <div className='absolute bottom-32 left-20 h-16 w-16 rounded-full bg-[#F7F4ED]' /> */}

          {/* Small decorative dots */}
          <div className='absolute left-[20%] top-[25%] h-3 w-3 rounded-full bg-[#F7F4ED]' />
          {/* <div className='absolute left-[27%] top-[30%] h-5 w-5 rounded-full bg-[#E58B8B]' /> */}
          <div className='absolute right-[25%] top-[42%] h-4 w-4 rounded-full bg-red-500 blur-sm' />

          <div className='relative z-10 flex w-full flex-col justify-between p-12 xl:p-16'>
            {/* Logo */}
            <div>
              <Link href='/' className='inline-flex items-center'>
                {/* <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#172536] text-lg font-black text-white shadow-lg'>
                  H
                </div> */}
                <Image src={`/images/logo-color.png`} width={100} height={100} alt='logo' className='h-24 w-24' />

                {/* <div>
                  <p className='text-xl font-black tracking-tight text-white'>HEYJONG</p>

                  <p className='text-xs font-medium text-white/75'>COMMUNITY</p>
                </div> */}
              </Link>
            </div>

            {/* Main Content */}
            <div className='max-w-xl'>
              <div className='mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm'>
                <span className='h-2 w-2 rounded-full bg-[#EFCB2D]' />
                Welcome, Jongers!
              </div>

              <h1 className='text-5xl font-black leading-[1.05] tracking-tight text-white xl:text-6xl'>
                Let&apos;s Grow
                <br />
                <span className='text-[#EFCB2D]'>Together</span>
                <br />
                & Spread
                <br />
                <span className='text-[#EFCB2D]'>Good Vibes.</span>
              </h1>

              <p className='mt-7 max-w-md text-base leading-7 text-white/85'>
                Tempat untuk tumbuh, berkarya, berdampak, dan berbagi kebaikan bersama generasi muda.
              </p>

              {/* Keywords */}
              <div className='mt-8 flex flex-wrap gap-3'>
                <span className='rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#172536]'>Grow</span>

                <span className='rounded-full bg-[#EFCB2D] px-4 py-2 text-sm font-semibold text-[#8E2730]'>
                  Together
                </span>

                <span className='rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white'>Spread</span>
              </div>
            </div>

            {/* Footer */}
            <div className='flex items-center justify-between text-sm text-[#8E2730]'>
              <span className='text-white'>HEYJONG COMMUNITY</span>

              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            RIGHT - LOGIN
        ====================================================== */}
        <section className='flex min-h-screen items-center justify-center px-6 py-10 sm:px-10 lg:min-h-0 lg:px-16 xl:px-24'>
          <div className='w-full max-w-md'>
            {/* Mobile Brand */}
            <div className='mb-10 flex items-center gap-3 lg:hidden'>
              <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-[#172536] text-lg font-black text-white'>
                H
              </div>

              <div>
                <p className='text-lg font-black'>HEYJONG</p>

                <p className='text-xs font-medium text-[#7196B2]'>COMMUNITY</p>
              </div>
            </div>

            {/* Heading */}
            <div className='mb-8'>
              <div className='mb-4 flex items-center gap-2'>
                <span className='h-2.5 w-2.5 rounded-full bg-white' />
                <span className='h-2.5 w-2.5 rounded-full bg-[#EFCB2D]' />
                <span className='h-2.5 w-2.5 rounded-full bg-[#8E2730]' />
              </div>

              <h2 className='text-3xl font-black tracking-tight text-[#172536]'>Selamat Datang, Jongers! 👋</h2>

              <p className='mt-2 text-sm leading-6 text-[#172536]/60'>
                Masuk ke akunmu dan lanjutkan perjalanan bersama HEYJONG Community.
              </p>
            </div>

            {/* Error */}
            {state?.error && (
              <div className='mb-6 rounded-2xl border border-[#E58B8B]/40 bg-[#E58B8B]/10 p-4 text-sm font-medium text-[#a84f5b]'>
                {state.error}
              </div>
            )}

            {/* Login Form */}
            <form action={formAction}>
              <FieldGroup>
                {/* Username */}
                <Field>
                  <FieldLabel htmlFor='username' className='font-semibold text-[#172536]'>
                    Username
                  </FieldLabel>

                  <Input
                    id='username'
                    type='text'
                    name='username'
                    placeholder='Masukkan username'
                    required
                    className='
                      h-12
                      rounded-xl
                      border-[#172536]/15
                      bg-white
                      px-4
                      shadow-sm
                      transition
                      placeholder:text-[#172536]/35
                      focus-visible:border-[#8E2730]
                      focus-visible:ring-[#8E2730]/20
                    '
                  />
                </Field>

                {/* Password */}
                <Field>
                  <FieldLabel htmlFor='password' className='font-semibold text-[#172536]'>
                    Password
                  </FieldLabel>

                  <Input
                    id='password'
                    type='password'
                    name='password'
                    placeholder='Masukkan password'
                    required
                    className='
                      h-12
                      rounded-xl
                      border-[#172536]/15
                      bg-white
                      px-4
                      shadow-sm
                      transition
                      placeholder:text-[#172536]/35
                      focus-visible:border-[#8E2730]
                      focus-visible:ring-[#8E2730]/20
                    '
                  />
                </Field>

                {/* Submit */}
                <Field>
                  <Button
                    type='submit'
                    disabled={isPending}
                    className='
                      h-12
                      w-full
                      rounded-xl
                      bg-[#8E2730]
                      text-white
                      font-bold
                      shadow-lg
                      shadow-[#8E2730]/10
                      transition-all
                      hover:-translate-y-0.5
                      hover:bg-[#a73e47]
                      hover:shadow-xl
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    '
                  >
                    {isPending ? 'Memproses...' : 'Masuk'}
                  </Button>
                </Field>
              </FieldGroup>
            </form>

            {/* Register */}
            {/* <FieldDescription className='mt-6 text-center text-[#172536]/55'>
              Belum punya akun?{' '}
              <Link href='#' className='font-bold text-[#7196B2] transition hover:text-[#D77B91]'>
                Daftar sekarang
              </Link>
            </FieldDescription> */}

            {/* Divider */}
            <div className='my-8 flex items-center gap-4'>
              <div className='h-px flex-1 bg-[#172536]/10' />

              <span className='text-xs font-medium text-[#172536]/35'>HEYJONG COMMUNITY</span>

              <div className='h-px flex-1 bg-[#172536]/10' />
            </div>

            {/* Terms */}
            <p className='text-center text-xs leading-5 text-[#172536]/40'>
              Dengan melanjutkan, kamu menyetujui{' '}
              <Link href='#' className='underline underline-offset-2 hover:text-[#7196B2]'>
                Terms of Service
              </Link>{' '}
              dan{' '}
              <Link href='#' className='underline underline-offset-2 hover:text-[#7196B2]'>
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
