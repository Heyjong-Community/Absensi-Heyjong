'use client';

import { AccessAccountState, actionNewAccessAccount } from '@/app/actions/accountAction';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { responseState } from '@/types/global';
import React, { useActionState } from 'react';

const role = [
  { label: 'SuperAdmin', value: 'SuperAdmin' },
  { label: 'Pengurus', value: 'Pengurus' },
  { label: 'Staff', value: 'Staff' },
  { label: 'Member', value: 'Member' },
  { label: 'Volunteer', value: 'Volunteer' },
];

export default function AccessAccountAddPage() {
  const [state, formAction, isPending] = useActionState<AccessAccountState, FormData>(
    (prevState, formData) => actionNewAccessAccount(prevState, formData),
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
            <Input type='text' id='nama' name='nama' placeholder='Ketik nama lengkap' />
          </div>
          <div className='group-input space-y-2'>
            <Label>Username</Label>
            <Input type='text' id='username' name='username' placeholder='Ketik username' />
          </div>
          <div className='group-input space-y-2'>
            <Label>Password</Label>
            <Input type='password' id='password' name='password' placeholder='******' />
          </div>
          <div className='group-input space-y-2'>
            <Label>Role</Label>
            <Select name='role'>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Role akun' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {role.map((item, i) => (
                    <SelectItem key={i} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='group-input space-y-2'>
            <Input type='hidden' id='status' name='status' value='Aktif' />
          </div>
        </section>
        {state.error && (
          <section className='w-full lg:w-1/2'>
            <div className='bg-red-100 border border-red-300 rounded-lg py-2 px-4'>
              <p className='text-sm text-red-500'>Terjadi error, gagal tambah akun.</p>
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
