'use client';

import { ColumnDef } from '@tanstack/react-table';

interface AccessAccount {
  nama: string;
  username: string;
  status: string;
}

export const columnsAccessAccount: ColumnDef<AccessAccount>[] = [
  {
    header: 'No',
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: 'nama',
    header: 'Nama',
  },
  {
    accessorKey: 'username',
    header: 'Username',
  },
  {
    accessorKey: 'role',
    header: 'Role Akun',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
            status === 'Aktif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {String(status)}
        </span>
      );
    },
  },
];
