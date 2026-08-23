'use client';

import { AccessAccountState, actionNewAccessAccount } from '@/app/actions/accountAction';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { responseState } from '@/types/global';

import { ArrowLeft, KeyRound, ShieldCheck, UserPlus, UserRound } from 'lucide-react';

import Link from 'next/link';
import React, { useActionState } from 'react';

const role = [
  {
    label: 'SuperAdmin',
    value: 'SuperAdmin',
  },
  {
    label: 'Pengurus',
    value: 'Pengurus',
  },
  {
    label: 'Staff',
    value: 'Staff',
  },
  {
    label: 'Member',
    value: 'Member',
  },
  {
    label: 'Volunteer',
    value: 'Volunteer',
  },
];

export default function AccessAccountAddPage() {
  const [state, formAction, isPending] = useActionState<AccessAccountState, FormData>(
    (prevState, formData) => actionNewAccessAccount(prevState, formData),
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
            href='/account'
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
            Kembali ke Akun
          </Link>

          <div className='mb-3 flex items-center gap-2'>
            <span className='h-2 w-2 rounded-full bg-[#EFCB2D]' />

            <span className='text-xs font-bold uppercase tracking-wider text-[#8E2730]/60'>User</span>
          </div>

          <h1 className='text-3xl font-black tracking-tight text-[#172536] sm:text-4xl'>Tambah Akun Akses</h1>

          <p className='mt-2 text-sm text-[#172536]/50'>Buat akun baru untuk mengakses dashboard HEYJONG Community.</p>
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
                  <h2 className='font-black text-[#172536]'>Informasi Akun</h2>

                  <p className='mt-0.5 text-xs text-[#172536]/45'>Lengkapi informasi pengguna dan hak akses.</p>
                </div>
              </div>
            </div>

            {/* Form Body */}

            <div className='grid gap-6 px-6 py-7 sm:px-8 lg:grid-cols-2'>
              {/* Nama */}

              <div className='space-y-2 lg:col-span-2'>
                <Label htmlFor='nama' className='flex items-center gap-1.5 text-sm font-bold text-[#172536]'>
                  <UserRound className='h-3.5 w-3.5 text-[#8E2730]' />
                  Nama Lengkap
                </Label>

                <Input
                  type='text'
                  id='nama'
                  name='nama'
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

              {/* Username */}

              <div className='space-y-2'>
                <Label htmlFor='username' className='text-sm font-bold text-[#172536]'>
                  Username
                </Label>

                <Input
                  type='text'
                  id='username'
                  name='username'
                  placeholder='Ketik username'
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

                <p className='text-xs text-[#172536]/40'>Username digunakan untuk login ke dashboard.</p>
              </div>

              {/* Password */}

              <div className='space-y-2'>
                <Label htmlFor='password' className='flex items-center gap-1.5 text-sm font-bold text-[#172536]'>
                  <KeyRound className='h-3.5 w-3.5 text-[#8E2730]' />
                  Password
                </Label>

                <Input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Masukkan password'
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

              {/* Role */}

              <div className='space-y-2'>
                <Label htmlFor='role' className='flex items-center gap-1.5 text-sm font-bold text-[#172536]'>
                  <ShieldCheck className='h-3.5 w-3.5 text-[#8E2730]' />
                  Role Akun
                </Label>

                <Select name='role' required>
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
                    <SelectValue placeholder='Pilih role akun' />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      {role.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <p className='text-xs text-[#172536]/40'>Role menentukan hak akses pengguna di dashboard.</p>
              </div>

              {/* Status */}

              <div className='space-y-2'>
                <Label className='text-sm font-bold text-[#172536]'>Status Akun</Label>

                <div
                  className='
                    flex
                    h-11
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[#EFCB2D]/30
                    bg-[#EFCB2D]/10
                    px-4
                  '
                >
                  <span className='h-2 w-2 rounded-full bg-[#EFCB2D]' />

                  <span className='text-sm font-bold text-[#8E2730]'>Aktif</span>
                </div>

                <input type='hidden' id='status' name='status' value='Aktif' />
              </div>
            </div>

            {/* Error */}

            {state.error && (
              <div className='px-6 pb-6 sm:px-8'>
                <div className='rounded-xl border border-red-200 bg-red-50 px-4 py-3'>
                  <p className='text-sm font-medium text-red-600'>Terjadi error, gagal menambahkan akun.</p>
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
                href='/account'
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
                {isPending ? 'Menyimpan...' : 'Simpan Akun'}
              </Button>
            </div>
          </section>
        </form>
      </div>
    </main>
  );
}
