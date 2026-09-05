'use server';

import { addAttendance } from '@/services/attendance';
import { StatusAttendee } from '@/types/absen';
import { InitState } from '@/types/global';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function actionAddAttendance(prevState: InitState, formData: FormData): Promise<InitState> {
  let isSuccess = false;

  try {
    const eventId = formData.get('eventId') as string;
    const nama = formData.get('nama') as string;
    const status = formData.get('status') as StatusAttendee;

    if (!nama || !eventId || !status) {
      return { success: false, error: 'Semua field harus diisi' };
    }

    await addAttendance(eventId, nama, status);
    isSuccess = true;
  } catch (error) {
    console.log('error - ', error);
    return { success: false, error: 'Gagal absen' };
  }

  if (isSuccess === true) {
    revalidatePath('/success');
    redirect('/success');
  }
  return { success: false, error: null };
}
