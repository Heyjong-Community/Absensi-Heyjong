'use server';

import { addMemberHeyjong } from '@/services/member';
import { InitState } from '@/types/global';
import { redirect } from 'next/navigation';

export async function actionAddMemberHeyjong(prevState: InitState, formData: FormData): Promise<InitState> {
  let isSuccess = false;

  try {
    const nameLengkap = formData.get('namaLengkap') as string;
    const panggilan = formData.get('panggilan') as string;
    const gender = formData.get('gender') as 'LakiLaki' | 'Perempuan';
    const status = formData.get('status') as 'Manajemen' | 'Pengurus' | 'Staff' | 'Member' | 'Volunteer';

    if (!nameLengkap || !panggilan || !gender || !status) {
      return { success: false, error: 'Semua field harus diisi' };
    }

    await addMemberHeyjong(nameLengkap, panggilan, gender, status);

    isSuccess = true;
  } catch (error) {
    console.log('error - ', error);
    return { success: false, error: 'Gagal tambah member' };
  }

  if (isSuccess === true) {
    redirect('/member');
  }
  return { success: false, error: null };
}
