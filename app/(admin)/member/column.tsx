'use client';

import StatusBadge from '@/components/StatusBadge';
import { ColumnDef } from '@tanstack/react-table';

interface MemberHeyjong {
  namaLengkap: string;
  panggilan: string;
  gender: string;
  status: string;
}

export const columnsMemberHeyjong: ColumnDef<MemberHeyjong>[] = [
  {
    header: 'No',
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: 'namaLengkap',
    header: 'Nama Lengkap',
  },
  {
    accessorKey: 'panggilan',
    header: 'Panggilan',
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
    cell: ({ row }) => {
      const gender = row.original.gender;
      return <p>{gender === 'LakiLaki' ? 'Laki-laki' : gender}</p>;
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
        <div className=''>
          <StatusBadge status={status} />
        </div>
        // <span
        //   className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
        //     status === 'Aktif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        //   }`}
        // >
        //   {String(status)}
        // </span>
      );
    },
  },
];
