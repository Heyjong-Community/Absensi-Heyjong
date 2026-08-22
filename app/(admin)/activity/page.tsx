import React from 'react';
import { Button } from '@/components/ui/button';
import { columns } from './columns';
import { DataTable } from '@/components/data-table';
import Link from 'next/link';
import { listEvent } from '@/services/event';

export default async function EventPage() {
  const events = await listEvent();

  return (
    <div>
      <div className=''>
        <h2 className='font-semibold text-2xl'>Event Heyjong Community</h2>
      </div>
      <div className='mt-10 space-y-2'>
        <div className=''>
          <Button>
            <Link href='/activity/add'>Buat Event Baru</Link>
          </Button>
        </div>
        <div className=''>
          <DataTable columns={columns} data={events || []} />
        </div>
      </div>
    </div>
  );
}
