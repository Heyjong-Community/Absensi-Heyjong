'use client';

import QRDialog from '@/components/QRDialog';
import { Button } from '@/components/ui/button';
import { Event } from '@/types/event';
import { formatDate } from '@/utils/date';

import { ColumnDef } from '@tanstack/react-table';

import { CheckCircle2, Pencil, Trash2, XCircle } from 'lucide-react';

import Link from 'next/link';

export const columns: ColumnDef<Event>[] = [
  // ==========================================================
  // NO
  // ==========================================================

  {
    header: 'No',
    cell: ({ row }) => (
      <span className='text-xs font-semibold text-[#172536]/40'>{String(row.index + 1).padStart(2, '0')}</span>
    ),
  },

  // ==========================================================
  // EVENT
  // ==========================================================

  {
    accessorKey: 'nama',
    header: 'Event',

    cell: ({ row }) => (
      <div className='min-w-[180px]'>
        <p className='font-semibold text-[#172536]'>{row.original.nama}</p>

        <p className='mt-0.5 text-xs text-[#172536]/40'>Event HEYJONG Community</p>
      </div>
    ),
  },

  // ==========================================================
  // TANGGAL MULAI
  // ==========================================================

  {
    accessorKey: 'tanggalPelaksanaan',

    header: 'Tanggal Pelaksanaan',

    cell: ({ row }) => {
      const tanggal = row.original.tanggalPelaksanaan;

      return <span className='text-sm text-[#172536]/70'>{formatDate(String(tanggal))}</span>;
    },
  },

  // ==========================================================
  // TANGGAL SELESAI
  // ==========================================================

  {
    accessorKey: 'tanggalSelesai',

    header: 'Tanggal Selesai',

    cell: ({ row }) => {
      const selesai = row.original.tanggalSelesai;

      return <span className='text-sm text-[#172536]/70'>{formatDate(String(selesai))}</span>;
    },
  },

  // ==========================================================
  // STATUS
  // ==========================================================

  {
    accessorKey: 'isActive',

    header: 'Status',

    cell: ({ row }) => {
      const status = row.original.isActive;

      if (status === true) {
        return (
          <span
            className='
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-[#EFCB2D]/20
              px-3
              py-1.5
              text-xs
              font-bold
              text-[#8E2730]
            '
          >
            <CheckCircle2 className='h-3.5 w-3.5' />
            Aktif
          </span>
        );
      }

      return (
        <span
          className='
            inline-flex
            items-center
            gap-1.5
            rounded-full
            bg-[#172536]/5
            px-3
            py-1.5
            text-xs
            font-semibold
            text-[#172536]/50
          '
        >
          <XCircle className='h-3.5 w-3.5' />
          Non Aktif
        </span>
      );
    },
  },

  // ==========================================================
  // QR
  // ==========================================================

  {
    header: 'QR Absen',

    cell: ({ row }) => <QRDialog slug={row.original.slug} />,
  },

  // ==========================================================
  // ACTION
  // ==========================================================

  {
    header: 'Action',

    cell: ({ row }) => {
      const id = row.original.id;

      return (
        <div className='flex items-center gap-2'>
          {/* Edit */}
          <Link
            href={`/activity/edit/${id}`}
            title='Edit event'
            className='
            inline-flex
            size-9
            items-center
            justify-center
            rounded-lg
            border
            border-[#172536]/10
            text-[#172536]/60
            transition-colors
            hover:border-[#8E2730]/20
            hover:bg-[#8E2730]/5
            hover:text-[#8E2730]
          '
          >
            <Pencil className='h-4 w-4' />
          </Link>

          {/* Delete */}
          <Button
            type='button'
            size='icon'
            variant='outline'
            className='
            size-9
            rounded-lg
            border-red-100
            text-red-400
            hover:border-red-200
            hover:bg-red-50
            hover:text-red-600
          '
            title='Hapus event'
          >
            <Trash2 className='h-4 w-4' />
          </Button>
        </div>
      );
    },
  },
];
