'use server';

import { createNewAccessAccount } from '@/services/account';
import type { RoleUser, StatusUser } from '@/prisma/generated/prisma/client';
import { redirect } from 'next/navigation';

export type AccessAccountState = {
  success: boolean;
  error: string | null;
};

export async function actionNewAccessAccount(
  prevState: AccessAccountState,
  formData: FormData,
): Promise<AccessAccountState> {
  let isSuccess = false;
  try {
    const nama = formData.get('nama') as string;
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    const role = formData.get('role') as RoleUser;
    const status = formData.get('status') as StatusUser;

    await createNewAccessAccount(nama, username, password, role, status);

    isSuccess = true;
    // return { success: true, error: null };
  } catch (error) {
    console.log('error - ', error);
    return { success: false, error: 'Gagal buat akun' };
  }

  if (isSuccess) {
    redirect('/account');
  }

  return { success: false, error: null };
}
