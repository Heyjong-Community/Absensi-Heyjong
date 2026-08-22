import { DataTable } from '@/components/data-table';
import { Button } from '@/components/ui/button';
import React from 'react';
import { columns } from './columns';
import Link from 'next/link';

export default function AbsensiDashPage() {
  return (
    <div>
      <div className=''>
        <h2 className='font-semibold text-2xl'>Rekap Absen Kegiatan</h2>
      </div>
      <div className='mt-10 space-y-2'>
        <div className=''>
          <Button>
            <Link href='/activity/add'>Tambah Akun Baru</Link>
          </Button>
        </div>
        <div className=''>
          <DataTable columns={columns} data={[]} />
        </div>
      </div>
    </div>
  );
}
