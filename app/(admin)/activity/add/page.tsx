'use client';

import { actionAddNewEvent } from '@/app/actions/eventAction';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { InitState, responseState } from '@/types/global';
import { generateSlug } from '@/utils/slug';
import { ArrowLeft, CalendarDays, MapPin, Plus } from 'lucide-react';
import Link from 'next/link';
import React, { useActionState, useState } from 'react';

export default function AddNewEventPage() {
  const [state, formAction, isPending] = useActionState<InitState, FormData>(
    (prevState, formData) => actionAddNewEvent(prevState, formData),
    responseState,
  );

  const [nama, setNama] = useState('');
  const [slug, setSlug] = useState('');
  const [tanggalPelaksanaan, setTanggalPelaksanaan] = useState('');
  const [tanggalSelesai, setTanggalSelesai] = useState('');

  const handleNamaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setNama(value);
    setSlug(generateSlug(value));
  };

  const handleTanggalPelaksanaanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    setTanggalPelaksanaan(val);

    if (val) {
      const [datePart, timePart] = val.split('T');

      const existingTime = tanggalSelesai.split('T')[1];
      const timeToSet = existingTime || timePart || '23:59';

      setTanggalSelesai(`${datePart}T${timeToSet}`);
    }
  };

  return (
    <main className='min-h-screen w-full bg-[#F7F4ED]'>
      <div className='max-w-5xl px-6 py-8 sm:px-8 lg:px-10'>
        {/* =====================================================
            HEADER
        ====================================================== */}

        <section>
          <Link
            href='/activity'
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
            Kembali ke Event
          </Link>

          <div className='mb-3 flex items-center gap-2'>
            <span className='h-2 w-2 rounded-full bg-[#EFCB2D]' />

            <span className='text-xs font-bold uppercase tracking-wider text-[#8E2730]/60'>Master Data</span>
          </div>

          <h1 className='text-3xl font-black tracking-tight text-[#172536] sm:text-4xl'>Tambah Event Baru</h1>

          <p className='mt-2 text-sm text-[#172536]/50'>Buat event baru untuk kegiatan HEYJONG Community.</p>
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
                  <Plus className='h-5 w-5 text-[#8E2730]' />
                </div>

                <div>
                  <h2 className='font-black text-[#172536]'>Informasi Event</h2>

                  <p className='mt-0.5 text-xs text-[#172536]/45'>Lengkapi informasi kegiatan yang akan dibuat.</p>
                </div>
              </div>
            </div>

            {/* Form Body */}

            <div className='grid gap-6 px-6 py-7 sm:px-8 lg:grid-cols-2'>
              {/* Nama Event */}

              <div className='space-y-2 lg:col-span-2'>
                <Label htmlFor='nama' className='text-sm font-bold text-[#172536]'>
                  Nama Event <span className='text-[#8E2730]'>*</span>
                </Label>

                <Input
                  type='text'
                  id='nama'
                  name='nama'
                  value={nama}
                  onChange={handleNamaChange}
                  placeholder='Contoh: Jong Impact 2026'
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

                <p className='text-xs text-[#172536]/40'>Nama event akan digunakan sebagai identitas utama kegiatan.</p>
              </div>

              {/* Slug */}

              <div className='space-y-2'>
                <Label htmlFor='slug' className='text-sm font-bold text-[#172536]'>
                  Slug <span className='text-[#8E2730]'>*</span>
                </Label>

                <Input
                  type='text'
                  id='slug'
                  name='slug'
                  value={slug}
                  readOnly
                  required
                  className='
                    h-11
                    rounded-xl
                    border-[#172536]/10
                    bg-[#172536]/5
                    text-[#172536]/50
                  '
                />

                <p className='text-xs text-[#172536]/40'>Slug dibuat otomatis dari nama event.</p>
              </div>

              {/* Lokasi */}

              <div className='space-y-2'>
                <Label htmlFor='lokasi' className='flex items-center gap-1.5 text-sm font-bold text-[#172536]'>
                  <MapPin className='h-3.5 w-3.5 text-[#8E2730]' />
                  Lokasi
                </Label>

                <Input
                  type='text'
                  id='lokasi'
                  name='lokasi'
                  placeholder='Contoh: Gedung Serbaguna'
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

              {/* Tanggal Pelaksanaan */}

              <div className='space-y-2'>
                <Label
                  htmlFor='tanggalPelaksanaan'
                  className='flex items-center gap-1.5 text-sm font-bold text-[#172536]'
                >
                  <CalendarDays className='h-3.5 w-3.5 text-[#8E2730]' />
                  Tanggal Pelaksanaan
                  <span className='text-[#8E2730]'>*</span>
                </Label>

                <Input
                  type='datetime-local'
                  id='tanggalPelaksanaan'
                  name='tanggalPelaksanaan'
                  value={tanggalPelaksanaan}
                  onChange={handleTanggalPelaksanaanChange}
                  required
                  className='
                    h-11
                    rounded-xl
                    border-[#172536]/10
                    bg-[#F7F4ED]/30
                    text-[#172536]
                    focus-visible:border-[#8E2730]/40
                    focus-visible:ring-[#8E2730]/10
                  '
                />
              </div>

              {/* Tanggal Selesai */}

              <div className='space-y-2'>
                <Label htmlFor='tanggalSelesai' className='flex items-center gap-1.5 text-sm font-bold text-[#172536]'>
                  <CalendarDays className='h-3.5 w-3.5 text-[#8E2730]' />
                  Tanggal Selesai
                  <span className='text-[#8E2730]'>*</span>
                </Label>

                <Input
                  type='datetime-local'
                  id='tanggalSelesai'
                  name='tanggalSelesai'
                  value={tanggalSelesai}
                  onChange={(e) => setTanggalSelesai(e.target.value)}
                  required
                  className='
                    h-11
                    rounded-xl
                    border-[#172536]/10
                    bg-[#F7F4ED]/30
                    text-[#172536]
                    focus-visible:border-[#8E2730]/40
                    focus-visible:ring-[#8E2730]/10
                  '
                />
              </div>

              {/* Deskripsi */}

              <div className='space-y-2 lg:col-span-2'>
                <Label htmlFor='deskripsi' className='text-sm font-bold text-[#172536]'>
                  Deskripsi Kegiatan
                </Label>

                <Textarea
                  id='deskripsi'
                  name='deskripsi'
                  placeholder='Tuliskan deskripsi singkat mengenai kegiatan...'
                  rows={5}
                  className='
                    resize-none
                    rounded-xl
                    border-[#172536]/10
                    bg-[#F7F4ED]/30
                    text-[#172536]
                    placeholder:text-[#172536]/30
                    focus-visible:border-[#8E2730]/40
                    focus-visible:ring-[#8E2730]/10
                  '
                />

                <p className='text-xs text-[#172536]/40'>Deskripsi bersifat opsional.</p>
              </div>
            </div>

            {/* Error */}

            {state.error && (
              <div className='px-6 pb-6 sm:px-8'>
                <div className='rounded-xl border border-red-200 bg-red-50 px-4 py-3'>
                  <p className='text-sm font-medium text-red-600'>Terjadi error, gagal menambahkan event.</p>
                </div>
              </div>
            )}

            {/* Footer */}

            <div className='flex flex-col-reverse gap-3 border-t border-[#172536]/10 bg-[#F7F4ED]/40 px-6 py-5 sm:flex-row sm:items-center sm:justify-end sm:px-8'>
              <Link
                href='/activity'
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
                {isPending ? 'Menyimpan...' : 'Simpan Event'}
              </Button>
            </div>
          </section>
        </form>
      </div>
    </main>
  );
}
