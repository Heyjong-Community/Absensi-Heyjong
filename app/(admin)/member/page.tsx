import { DataTable } from '@/components/data-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { columnsMemberHeyjong } from './column';
import { listMemberHeyjong } from '@/services/member';

export default async function MemberDashPage() {
  const members = await listMemberHeyjong();
  return (
    <div>
      <div className=''>
        <h2 className='font-semibold text-2xl'>List Anggota Heyjong Community</h2>
      </div>
      <div className='mt-10 space-y-2'>
        <div className=''>
          <Button>
            <Link href='/member/add'>Tambah Member</Link>
          </Button>
        </div>
        <div className=''>
          <DataTable columns={columnsMemberHeyjong} data={members || []} />
        </div>
      </div>
    </div>
  );
}
