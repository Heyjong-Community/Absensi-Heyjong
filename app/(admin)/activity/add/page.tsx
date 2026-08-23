'use client';

import { actionAddNewEvent } from '@/app/actions/eventAction';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { InitState, responseState } from '@/types/global';
import { generateSlug } from '@/utils/slug';
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
    const val = e.target.value; // Format: "YYYY-MM-DDThh:mm"
    setTanggalPelaksanaan(val);

    if (val) {
      const [datePart, timePart] = val.split('T');

      // Ambil jam yang sudah dipilih di tanggalSelesai (jika ada).
      // Jika belum ada, gunakan jam dari tanggalPelaksanaan (atau fallback ke '23:59').
      const existingTime = tanggalSelesai.split('T')[1];
      const timeToSet = existingTime || timePart || '23:59';

      setTanggalSelesai(`${datePart}T${timeToSet}`);
    }
  };

  return (
    <div>
      <div>
        <h2 className='font-semibold text-2xl'>Tambah Event Baru</h2>
      </div>
      <form action={formAction} className='space-y-6'>
        <section className='w-1/2 mt-12 space-y-4'>
          <div className='space-y-2'>
            <Label>
              Nama Event <span className='text-red-500'>*</span>
            </Label>
            <Input
              type='text'
              id='nama'
              name='nama'
              value={nama}
              onChange={handleNamaChange}
              placeholder='Ketik nama event'
              required
            />
          </div>
          <div className='space-y-2'>
            <Label>
              Slug <span className='text-red-500'>*</span>
            </Label>
            <Input type='text' id='slug' name='slug' value={slug} readOnly className='bg-gray-100' required />
          </div>
          <div className='space-y-2'>
            <Label>
              Tanggal Pelaksanaan <span className='text-red-500'>*</span>
            </Label>
            <Input
              type='datetime-local'
              id='tanggalPelaksanaan'
              name='tanggalPelaksanaan'
              value={tanggalPelaksanaan}
              onChange={handleTanggalPelaksanaanChange}
              required
            />
          </div>
          <div className='space-y-2'>
            <Label>
              Tanggal Selesai <span className='text-red-500'>*</span>
            </Label>
            <Input
              type='datetime-local'
              id='tanggalSelesai'
              name='tanggalSelesai'
              value={tanggalSelesai}
              onChange={(e) => setTanggalSelesai(e.target.value)}
              required
            />
          </div>
          <div className='space-y-2'>
            <Label>Lokasi</Label>
            <Input type='text' id='lokasi' name='lokasi' />
          </div>
          <div className='space-y-2'>
            <Label>Deskripsi Kegiatan</Label>
            <Textarea id='deskripsi' name='deskripsi' />
          </div>
        </section>
        {state.error && (
          <section className='w-full lg:w-1/2'>
            <div className='bg-red-100 border border-red-300 rounded-lg py-2 px-4'>
              <p className='text-sm text-red-500'>Terjadi error, gagal tambah event.</p>
            </div>
          </section>
        )}
        <section>
          <Button type='submit' disabled={isPending}>
            {isPending ? 'Menyimpan...' : 'Simpan'}
          </Button>
        </section>
      </form>
    </div>
  );
}
