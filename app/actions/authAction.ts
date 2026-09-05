'use server';

import { InitState } from '@/types/global';
import { signIn, signOut } from '../auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function actionLogin(prevState: InitState, formData: FormData): Promise<InitState> {
  let isSuccess = false;

  try {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    if (!username || !password) {
      return { success: false, error: 'Semua field harus diisi' };
    }

    await signIn('credentials', {
      username,
      password,
      redirect: false, // Matikan redirect internal bawaan NextAuth agar bisa kita handle manual
    });

    isSuccess = true;
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { success: false, error: 'Username atau password salah, atau akun non-aktif.' };
        default:
          return { success: false, error: 'Terjadi kesalahan saat proses login.' };
      }
    }

    return { success: false, error: 'Gagal melakukan login' };
  }

  if (isSuccess === true) {
    revalidatePath('/dashboard');
    redirect('/dashboard');
  }

  return { success: false, error: null };
}

export async function actionLogout() {
  await signOut({
    redirectTo: '/login',
  });
}
