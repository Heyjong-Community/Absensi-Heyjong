import React from 'react';

type StatusType = 'Pengurus' | 'Staff' | 'Member';

interface StatusBadgeProps {
  status: StatusType | string;
}

const statusStyles: Record<string, string> = {
  Pengurus:
    'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800',
  Staff: 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800',
  Member: 'bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:border-sky-800',
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const currentStyle =
    statusStyles[status] ||
    'bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700';
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${currentStyle}`}
    >
      {status}
    </span>
  );
}
