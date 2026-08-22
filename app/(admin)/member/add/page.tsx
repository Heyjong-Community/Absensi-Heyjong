'use client';

import { actionAddMemberHeyjong } from '@/app/actions/memberAction';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { InitState, responseState } from '@/types/global';
import React, { useActionState } from 'react';

export default function AddMemberPage() {
  const [state, formAction, isPending] = useActionState<InitState, FormData>(
    (prevState, formData) => actionAddMemberHeyjong(prevState, formData),
    responseState,
  );

  return (
    <div>
      <div className=''>
        <h2 className='font-semibold text-2xl'>Tambah Akun Akses Dashboard</h2>
      </div>
      <form action={formAction} className='mt-10 space-y-6'>
        <section className='w-full lg:w-1/2 space-y-4'>
          <div className='group-input space-y-2'>
            <Label>Nama Lengkap</Label>
            <Input type='text' id='namaLengkap' name='namaLengkap' placeholder='Ketik nama lengkap' />
          </div>
          <div className='group-input space-y-2'>
            <Label>Panggilan</Label>
            <Input type='text' id='panggilan' name='panggilan' placeholder='Ketik nama panggilan' />
          </div>
          <div className='group-input space-y-2'>
            <Label>Gender</Label>
            <Select name='gender'>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Gender' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='LakiLaki'>Laki-laki</SelectItem>
                  <SelectItem value='Perempuan'>Perempuan</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='group-input space-y-2'>
            <Label>Status</Label>
            <Select name='status'>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Status' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='Volunteer'>Volunteer</SelectItem>
                  <SelectItem value='Member'>Member</SelectItem>
                  <SelectItem value='Staff'>Staff</SelectItem>
                  <SelectItem value='Pengurus'>Pengurus</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </section>
        {state.error && (
          <section className='w-full lg:w-1/2'>
            <div className='bg-red-100 border border-red-300 rounded-lg py-2 px-4'>
              <p className='text-sm text-red-500'>Terjadi error, gagal tambah member.</p>
            </div>
          </section>
        )}
        <section>
          <Button type='submit'>{isPending ? 'Menyimpan...' : 'Simpan'}</Button>
        </section>
      </form>
    </div>
  );
}
