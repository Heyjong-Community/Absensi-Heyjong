import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react';

export default function EditAccessAccountPage({ params }: { params: string }) {
  console.log('params = ', params);
  return (
    <div>
      <div className=''>
        <h2 className='font-semibold text-2xl'>Edit Akun Akses Dashboard</h2>
      </div>
      <form className='mt-10 space-y-6'>
        <section className='w-full lg:w-1/2 space-y-4'>
          <div className='group-input space-y-2'>
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
              <Label>Status</Label>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Status' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='Aktif'>Aktif</SelectItem>
                    <SelectItem value='NonAktif'>Non Aktif</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
