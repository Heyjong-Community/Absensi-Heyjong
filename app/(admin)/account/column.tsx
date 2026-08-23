'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CheckCircle2, ShieldCheck, UserRound, XCircle } from 'lucide-react';

interface AccessAccount {
  nama: string;
  username: string;
  role: string;
  status: string;
}

export const columnsAccessAccount: ColumnDef<AccessAccount>[] = [
  {
    header: 'No',

    cell: ({ row }) => (
      <span className='text-xs font-semibold text-[#172536]/40'>{String(row.index + 1).padStart(2, '0')}</span>
    ),
  },

  {
    accessorKey: 'nama',

    header: 'Nama',

    cell: ({ row }) => (
      <div className='flex items-center gap-3 min-w-[200px]'>
        <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EFCB2D]/25'>
          <UserRound className='h-4 w-4 text-[#8E2730]' />
        </div>

        <div>
          <p className='font-semibold text-[#172536]'>{row.original.nama}</p>

          <p className='mt-0.5 text-xs text-[#172536]/40'>Akun Dashboard</p>
        </div>
      </div>
    ),
  },

  {
    accessorKey: 'username',

    header: 'Username',

    cell: ({ row }) => <span className='text-sm text-[#172536]/60'>@{row.original.username}</span>,
  },

  {
    accessorKey: 'role',

    header: 'Role Akun',

    cell: ({ row }) => (
      <span
        className='
          inline-flex
          items-center
          gap-1.5
          rounded-full
          bg-[#8E2730]/10
          px-3
          py-1.5
          text-xs
          font-bold
          text-[#8E2730]
        '
      >
        <ShieldCheck className='h-3.5 w-3.5' />

        {row.original.role}
      </span>
    ),
  },

  {
    accessorKey: 'status',

    header: 'Status',

    cell: ({ row }) => {
      const status = row.original.status;

      if (status === 'Aktif') {
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

          {String(status)}
        </span>
      );
    },
  },
];
