'use server';

import { addNewEvent, getEventById, updateEventById } from '@/services/event';
import { InitState } from '@/types/global';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function actionAddNewEvent(prevState: InitState, formData: FormData): Promise<InitState> {
  let isSuccess = false;

  try {
    const nama = formData.get('nama') as string;
    const slug = formData.get('slug') as string;
    const tanggalPelaksanaanRaw = formData.get('tanggalPelaksanaan') as string;
    const tanggalSelesaiRaw = formData.get('tanggalSelesai') as string;
    const lokasi = formData.get('lokasi') as string;
    const deskripsi = formData.get('deskripsi') as string;

    if (!nama || !slug || !tanggalPelaksanaanRaw || !tanggalSelesaiRaw) {
      return { success: false, error: 'Semua field harus diisi' };
    }

    const tanggalPelaksanaan = new Date(tanggalPelaksanaanRaw);
    if (isNaN(tanggalPelaksanaan.getTime())) {
      return { success: false, error: 'Format tanggal pelaksanaan tidak valid' };
    }

    const tanggalSelesai = new Date(tanggalSelesaiRaw);
    if (isNaN(tanggalSelesai.getTime())) {
      return { success: false, error: 'Format tanggal selesai tidak valid' };
    }

    await addNewEvent(nama, slug, tanggalPelaksanaan, tanggalSelesai, lokasi, deskripsi);

    isSuccess = true;
  } catch (error) {
    console.log('error - ', error);
    return { success: false, error: 'Gagal buat event' };
  }

  if (isSuccess === true) {
    revalidatePath('/activity');
    redirect('/activity');
  }
  return { success: false, error: null };
}

export async function actionUpdateEvent(formData: FormData): Promise<void> {
  try {
    const eventId = (formData.get('eventId') as string | null) ?? '';
    const nama = (formData.get('nama') as string | null) ?? '';
    const slug = (formData.get('slug') as string | null) ?? '';
    const tanggalPelaksanaanRaw = (formData.get('tanggalPelaksanaan') as string | null) ?? '';
    const tanggalSelesaiRaw = (formData.get('tanggalSelesai') as string | null) ?? '';
    const lokasi = (formData.get('lokasi') as string | null) ?? '';
    const deskripsi = (formData.get('deskripsi') as string | null) ?? '';

    if (!eventId || !nama || !slug || !tanggalPelaksanaanRaw || !tanggalSelesaiRaw) {
      throw new Error('Semua field wajib diisi');
    }

    const existingEvent = await getEventById(eventId);
    if (!existingEvent) {
      throw new Error('Event tidak ditemukan');
    }

    const tanggalPelaksanaan = new Date(tanggalPelaksanaanRaw);
    if (isNaN(tanggalPelaksanaan.getTime())) {
      throw new Error('Format tanggal pelaksanaan tidak valid');
    }

    const tanggalSelesai = new Date(tanggalSelesaiRaw);
    if (isNaN(tanggalSelesai.getTime())) {
      throw new Error('Format tanggal selesai tidak valid');
    }

    await updateEventById(
      eventId,
      nama,
      slug,
      tanggalPelaksanaan,
      tanggalSelesai,
      lokasi || undefined,
      deskripsi || undefined,
    );

    revalidatePath('/activity');
    redirect('/activity');
  } catch (error) {
    console.log('error - ', error);
    throw new Error('Gagal memperbarui event');
  }
}
