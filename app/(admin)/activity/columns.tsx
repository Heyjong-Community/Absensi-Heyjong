'use client';

import QRDialog from '@/components/QRDialog';
import { Button } from '@/components/ui/button';
import { Event } from '@/types/event';
import { formatDate } from '@/utils/date';
import { ColumnDef } from '@tanstack/react-table';
import { Pencil, Trash } from 'lucide-react';
import Link from 'next/link';

export const columns: ColumnDef<Event>[] = [
  {
    header: 'No',
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: 'nama',
    header: 'Nama Event',
  },
  {
    accessorKey: 'tanggalPelaksanaan',
    header: 'Tanggal Pelaksanaan',
    cell: ({ row }) => {
      const tanggal = row.original.tanggalPelaksanaan;
      return <p>{formatDate(String(tanggal))}</p>;
    },
  },
  {
    accessorKey: 'tanggalSelesai',
    header: 'Tanggal Selesai',
    cell: ({ row }) => {
      const selesai = row.original.tanggalSelesai;
      return <p>{formatDate(String(selesai))}</p>;
    },
  },
  {
    accessorKey: 'isActive',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.isActive;
      const label = status === true ? 'Aktif' : 'Non Aktif';
      return <p>{label}</p>;
    },
  },
  {
    header: 'QR Absen',
    cell: ({ row }) => <QRDialog slug={row.original.slug} />,
  },
  {
    header: 'Action',
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <div className='flex items-stretch gap-3'>
          <Button type='button' size={'xs'} className='bg-blue-500 text-white'>
            <Link href={`/activity/edit/${id}`} className='flex items-center gap-1'>
              <Pencil /> Edit
            </Link>
          </Button>
          <Button type='button' size={'xs'} className='bg-red-500 text-white'>
            <Trash /> Delete
          </Button>
        </div>
      );
    },
  },
];
