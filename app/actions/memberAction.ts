'use server';

import { addMemberHeyjong, getMemberById, updateMemberHeyjong } from '@/services/member';
import { InitState } from '@/types/global';
import { revalidatePath } from 'next/cache';
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
    revalidatePath('/member');
    redirect('/member');
  }
  return { success: false, error: null };
}

export async function actionUpdateMemberHeyjong(formData: FormData): Promise<void> {
  try {
    const memberId = (formData.get('memberId') as string | null) ?? '';
    const namaLengkap = (formData.get('namaLengkap') as string | null) ?? '';
    const panggilan = (formData.get('panggilan') as string | null) ?? '';
    const gender = (formData.get('gender') as 'LakiLaki' | 'Perempuan' | null) ?? null;
    const status =
      (formData.get('status') as 'Manajemen' | 'Pengurus' | 'Staff' | 'Member' | 'Volunteer' | null) ?? null;

    if (!memberId || !namaLengkap || !panggilan || !gender || !status) {
      throw new Error('Semua field wajib diisi');
    }

    const existingMember = await getMemberById(memberId);
    if (!existingMember) {
      throw new Error('Member tidak ditemukan');
    }

    await updateMemberHeyjong(memberId, namaLengkap, panggilan, gender, status);

    revalidatePath('/member');
    redirect('/member');
  } catch (error) {
    console.log('error - ', error);
    throw new Error('Gagal memperbarui member');
  }
}
