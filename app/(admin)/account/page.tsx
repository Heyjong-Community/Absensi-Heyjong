import { DataTable } from '@/components/data-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { columnsAccessAccount } from './column';
import { getListAccessAccount } from '@/services/account';

export default async function AccountAdminPage() {
  const listAccount = await getListAccessAccount();
  return (
    <div>
      <div className=''>
        <h2 className='font-semibold text-2xl'>Akun Akses Dashboard</h2>
      </div>
      <div className='mt-10 space-y-2'>
        <div className=''>
          <Button>
            <Link href='/account/add'>Tambah Akun</Link>
          </Button>
        </div>
        <div className=''>
          <DataTable columns={columnsAccessAccount} data={listAccount || []} />
        </div>
      </div>
    </div>
  );
}
