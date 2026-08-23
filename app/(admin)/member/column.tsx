'use client';

import StatusBadge from '@/components/StatusBadge';
import { StatusMemberHeyjong } from '@/types/member';
import { ColumnDef } from '@tanstack/react-table';
import { UserRound } from 'lucide-react';

interface MemberHeyjong {
  namaLengkap: string;
  panggilan: string;
  gender: string;
  status: StatusMemberHeyjong;
}

export const columnsMemberHeyjong: ColumnDef<MemberHeyjong>[] = [
  {
    header: 'No',

    cell: ({ row }) => (
      <span className='text-xs font-semibold text-[#172536]/40'>{String(row.index + 1).padStart(2, '0')}</span>
    ),
  },

  {
    accessorKey: 'namaLengkap',

    header: 'Nama Lengkap',

    cell: ({ row }) => (
      <div className='flex items-center gap-3 min-w-[220px]'>
        <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EFCB2D]/25'>
          <UserRound className='h-4 w-4 text-[#8E2730]' />
        </div>

        <div>
          <p className='font-semibold text-[#172536]'>{row.original.namaLengkap}</p>

          <p className='mt-0.5 text-xs text-[#172536]/40'>Member HEYJONG</p>
        </div>
      </div>
    ),
  },

  {
    accessorKey: 'panggilan',

    header: 'Panggilan',

    cell: ({ row }) => <span className='text-sm font-medium text-[#172536]/60'>{row.original.panggilan}</span>,
  },

  {
    accessorKey: 'gender',

    header: 'Gender',

    cell: ({ row }) => {
      const gender = row.original.gender;

      return <span className='text-sm text-[#172536]/60'>{gender === 'LakiLaki' ? 'Laki-laki' : gender}</span>;
    },
  },

  {
    accessorKey: 'status',

    header: 'Status',

    meta: {
      headerAlign: 'center',
    },

    cell: ({ row }) => {
      const status = row.original.status;

      return (
        <div className='flex justify-center'>
          <StatusBadge status={status} />
        </div>
      );
    },
  },
];
