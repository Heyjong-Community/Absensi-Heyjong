'use client';

import { actionAddMemberHeyjong } from '@/app/actions/memberAction';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { InitState, responseState } from '@/types/global';

import { ArrowLeft, CircleUserRound, ShieldCheck, UserPlus, UsersRound } from 'lucide-react';

import Link from 'next/link';
import React, { useActionState } from 'react';

export default function AddMemberPage() {
  const [state, formAction, isPending] = useActionState<InitState, FormData>(
    (prevState, formData) => actionAddMemberHeyjong(prevState, formData),
    responseState,
  );

  return (
    <main className='min-h-screen w-full bg-[#F7F4ED]'>
      <div className='max-w-5xl px-6 py-8 sm:px-8 lg:px-10'>
        {/* =====================================================
            HEADER
        ====================================================== */}

        <section>
          <Link
            href='/member'
            className='
              mb-6
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-[#172536]/50
              transition-colors
              hover:text-[#8E2730]
            '
          >
            <ArrowLeft className='h-4 w-4' />
            Kembali ke Member
          </Link>

          <div className='mb-3 flex items-center gap-2'>
            <span className='h-2 w-2 rounded-full bg-[#EFCB2D]' />

            <span className='text-xs font-bold uppercase tracking-wider text-[#8E2730]/60'>User</span>
          </div>

          <h1 className='text-3xl font-black tracking-tight text-[#172536] sm:text-4xl'>Tambah Member</h1>

          <p className='mt-2 text-sm text-[#172536]/50'>Tambahkan anggota baru ke dalam data HEYJONG Community.</p>
        </section>

        {/* =====================================================
            FORM
        ====================================================== */}

        <form action={formAction} className='mt-8'>
          <section className='overflow-hidden rounded-2xl border border-[#172536]/10 bg-white shadow-sm'>
            {/* Form Header */}

            <div className='border-b border-[#172536]/10 px-6 py-5 sm:px-8'>
              <div className='flex items-center gap-3'>
                <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-[#8E2730]/10'>
                  <UserPlus className='h-5 w-5 text-[#8E2730]' />
                </div>

                <div>
                  <h2 className='font-black text-[#172536]'>Informasi Member</h2>

                  <p className='mt-0.5 text-xs text-[#172536]/45'>Lengkapi data dasar anggota komunitas.</p>
                </div>
              </div>
            </div>

            {/* Form Body */}

            <div className='grid gap-6 px-6 py-7 sm:px-8 lg:grid-cols-2'>
              {/* Nama Lengkap */}

              <div className='space-y-2 lg:col-span-2'>
                <Label htmlFor='namaLengkap' className='flex items-center gap-1.5 text-sm font-bold text-[#172536]'>
                  <CircleUserRound className='h-3.5 w-3.5 text-[#8E2730]' />
                  Nama Lengkap
                </Label>

                <Input
                  type='text'
                  id='namaLengkap'
                  name='namaLengkap'
                  placeholder='Ketik nama lengkap'
                  required
                  className='
                    h-11
                    rounded-xl
                    border-[#172536]/10
                    bg-[#F7F4ED]/30
                    text-[#172536]
                    placeholder:text-[#172536]/30
                    focus-visible:border-[#8E2730]/40
                    focus-visible:ring-[#8E2730]/10
                  '
                />
              </div>

              {/* Panggilan */}

              <div className='space-y-2'>
                <Label htmlFor='panggilan' className='text-sm font-bold text-[#172536]'>
                  Nama Panggilan
                </Label>

                <Input
                  type='text'
                  id='panggilan'
                  name='panggilan'
                  placeholder='Ketik nama panggilan'
                  required
                  className='
                    h-11
                    rounded-xl
                    border-[#172536]/10
                    bg-[#F7F4ED]/30
                    text-[#172536]
                    placeholder:text-[#172536]/30
                    focus-visible:border-[#8E2730]/40
                    focus-visible:ring-[#8E2730]/10
                  '
                />

                <p className='text-xs text-[#172536]/40'>Nama yang biasa digunakan saat berinteraksi di komunitas.</p>
              </div>

              {/* Gender */}

              <div className='space-y-2'>
                <Label className='flex items-center gap-1.5 text-sm font-bold text-[#172536]'>
                  <UsersRound className='h-3.5 w-3.5 text-[#8E2730]' />
                  Gender
                </Label>

                <Select name='gender' required>
                  <SelectTrigger
                    className='
                      h-11
                      w-full
                      rounded-xl
                      border-[#172536]/10
                      bg-[#F7F4ED]/30
                      text-[#172536]
                    '
                  >
                    <SelectValue placeholder='Pilih gender' />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='LakiLaki'>Laki-laki</SelectItem>

                      <SelectItem value='Perempuan'>Perempuan</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Status */}

              <div className='space-y-2 lg:col-span-2'>
                <Label className='flex items-center gap-1.5 text-sm font-bold text-[#172536]'>
                  <ShieldCheck className='h-3.5 w-3.5 text-[#8E2730]' />
                  Status / Peran
                </Label>

                <Select name='status' required>
                  <SelectTrigger
                    className='
      h-11
      w-full
      rounded-xl
      border-[#172536]/10
      bg-[#F7F4ED]/30
      text-[#172536]
    '
                  >
                    <SelectValue placeholder='Pilih status member' />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='Volunteer'>Volunteer</SelectItem>

                      <SelectItem value='Member'>Member</SelectItem>

                      <SelectItem value='Staff'>Staff</SelectItem>

                      <SelectItem value='Pengurus'>Pengurus</SelectItem>

                      <SelectItem value='Manajemen'>Manajemen</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <p className='text-xs text-[#172536]/40'>Pilih peran anggota di dalam HEYJONG Community.</p>
              </div>
            </div>

            {/* Error */}

            {state.error && (
              <div className='px-6 pb-6 sm:px-8'>
                <div className='rounded-xl border border-red-200 bg-red-50 px-4 py-3'>
                  <p className='text-sm font-medium text-red-600'>Terjadi error, gagal menambahkan member.</p>
                </div>
              </div>
            )}

            {/* Footer */}

            <div
              className='
                flex
                flex-col-reverse
                gap-3
                border-t
                border-[#172536]/10
                bg-[#F7F4ED]/40
                px-6
                py-5
                sm:flex-row
                sm:items-center
                sm:justify-end
                sm:px-8
              '
            >
              <Link
                href='/member'
                className='
                  inline-flex
                  h-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#172536]/10
                  px-5
                  text-sm
                  font-bold
                  text-[#172536]/60
                  transition-colors
                  hover:bg-white
                  hover:text-[#172536]
                '
              >
                Batal
              </Link>

              <Button
                type='submit'
                disabled={isPending}
                className='
                  h-11
                  rounded-xl
                  bg-[#8E2730]
                  px-6
                  font-bold
                  text-white
                  shadow-lg
                  shadow-[#8E2730]/10
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-[#a73e47]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                '
              >
                {isPending ? 'Menyimpan...' : 'Simpan Member'}
              </Button>
            </div>
          </section>
        </form>
      </div>
    </main>
  );
}
