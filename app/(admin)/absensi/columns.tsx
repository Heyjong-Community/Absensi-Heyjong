'use client';

import { Absen } from '@/types/absen';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Absen>[] = [
  {
    // accessorKey: 'nama',
    header: 'No',
  },
  {
    accessorKey: 'eventId',
    header: 'Nama Event',
  },
  {
    accessorKey: 'nama',
    header: 'Nama',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
];
