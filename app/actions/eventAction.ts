'use server';

import { addNewEvent } from '@/services/event';
import { InitState } from '@/types/global';
import { redirect } from 'next/navigation';

export async function actionAddNewEvent(prevState: InitState, formData: FormData): Promise<InitState> {
  let isSuccess = false;

  try {
    const nama = formData.get('nama') as string;
    const slug = formData.get('slug') as string;
    const tanggalPelaksanaanRaw = formData.get('tanggalPelaksanaan') as string;
    const lokasi = formData.get('lokasi') as string;
    const deskripsi = formData.get('deskripsi') as string;

    if (!nama || !slug || !tanggalPelaksanaanRaw) {
      return { success: false, error: 'Semua field harus diisi' };
    }

    const tanggalPelaksanaan = new Date(tanggalPelaksanaanRaw);
    if (isNaN(tanggalPelaksanaan.getTime())) {
      return { success: false, error: 'Format tanggal pelaksanaan tidak valid' };
    }

    await addNewEvent(nama, slug, tanggalPelaksanaan, lokasi, deskripsi);

    isSuccess = true;
  } catch (error) {
    console.log('error - ', error);
    return { success: false, error: 'Gagal buat event' };
  }

  if (isSuccess === true) {
    redirect('/activity');
  }
  return { success: false, error: null };
}
