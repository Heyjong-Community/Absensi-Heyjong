'use client';

import { AbsenTable } from '@/types/absen';
import { ColumnDef } from '@tanstack/react-table';
import { CheckCircle2, XCircle } from 'lucide-react';

export const columns: ColumnDef<AbsenTable>[] = [
  {
    header: 'No',

    cell: ({ row }) => (
      <span className='text-xs font-semibold text-[#172536]/40'>{String(row.index + 1).padStart(2, '0')}</span>
    ),
  },

  {
    accessorKey: 'event.nama',

    header: 'Nama Event',

    cell: ({ row }) => (
      <div className='min-w-[180px]'>
        <p className='font-semibold text-[#172536]'>{row.original.event?.nama}</p>

        <p className='mt-0.5 text-xs text-[#172536]/40'>HEYJONG Community</p>
      </div>
    ),
  },

  {
    accessorKey: 'nama',

    header: 'Nama',

    cell: ({ row }) => <span className='text-sm font-medium text-[#172536]/70'>{row.original.nama}</span>,
  },

  {
    accessorKey: 'status',

    header: 'Status',

    cell: ({ row }) => {
      const status = row.original.status;

      const isHadir = status?.toLowerCase() === 'hadir';

      if (isHadir) {
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
            Hadir
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

          {status}
        </span>
      );
    },
  },
];
