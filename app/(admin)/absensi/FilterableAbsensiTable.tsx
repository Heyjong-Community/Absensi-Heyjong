'use client';

import { DataTable } from '@/components/data-table';
import { Combobox, ComboboxContent, ComboboxInput, ComboboxItem, ComboboxList } from '@/components/ui/combobox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useDebounce } from '@/hooks/use-debounce';
import { AbsenTable } from '@/types/absen';
import { Search, Ticket } from 'lucide-react';
import { useMemo, useState } from 'react';
import { columns } from './columns';

interface FilterableAbsensiTableProps {
  attendee: AbsenTable[];
}

export default function FilterableAbsensiTable({ attendee }: FilterableAbsensiTableProps) {
  const [selectedEvent, setSelectedEvent] = useState<string>('all');
  const [searchName, setSearchName] = useState('');
  const debouncedSearchName = useDebounce(searchName, 400);

  const eventOptions = useMemo(() => {
    return Array.from(
      new Set(attendee.map((item) => item.event?.nama).filter((value): value is string => Boolean(value))),
    );
  }, [attendee]);

  const filteredAttendee = useMemo(() => {
    const normalizedQuery = debouncedSearchName.trim().toLowerCase();

    return attendee.filter((item) => {
      const matchesEvent = selectedEvent === 'all' || item.event?.nama === selectedEvent;
      const matchesName = !normalizedQuery || item.nama.toLowerCase().includes(normalizedQuery);

      return matchesEvent && matchesName;
    });
  }, [attendee, debouncedSearchName, selectedEvent]);

  return (
    <div className='space-y-5'>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='space-y-2'>
          <Label htmlFor='filter-event' className='text-sm font-bold text-[#172536]'>
            Filter Event
          </Label>

          <Combobox value={selectedEvent} onValueChange={(value) => setSelectedEvent(value ?? 'all')}>
            <ComboboxInput
              id='filter-event'
              placeholder='Pilih event'
              className='h-11 rounded-xl border-[#172536]/10 bg-[#F7F4ED]/30 text-[#172536] placeholder:text-[#172536]/30 focus-visible:border-[#8E2730]/40 focus-visible:ring-[#8E2730]/10'
            />

            <ComboboxContent className='rounded-xl border-[#172536]/10 bg-white shadow-lg'>
              <ComboboxList>
                <ComboboxItem
                  value='all'
                  className='rounded-lg data-highlighted:bg-[#8E2730]/5 data-highlighted:text-[#8E2730]'
                >
                  Semua Event
                </ComboboxItem>

                {eventOptions.map((eventName) => (
                  <ComboboxItem
                    key={eventName}
                    value={eventName}
                    className='rounded-lg data-highlighted:bg-[#8E2730]/5 data-highlighted:text-[#8E2730]'
                  >
                    {eventName}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>

        <div className='space-y-2'>
          <Label htmlFor='search-name' className='text-sm font-bold text-[#172536]'>
            Search Nama
          </Label>

          <div className='relative'>
            <Search className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#172536]/40' />

            <Input
              id='search-name'
              type='text'
              value={searchName}
              onChange={(event) => setSearchName(event.target.value)}
              placeholder='Cari nama peserta...'
              className='h-11 rounded-xl border-[#172536]/10 bg-[#F7F4ED]/30 pl-9 text-[#172536] placeholder:text-[#172536]/30 focus-visible:border-[#8E2730]/40 focus-visible:ring-[#8E2730]/10'
            />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between rounded-xl border border-[#172536]/10 bg-[#F7F4ED]/40 px-4 py-3'>
        <div className='flex items-center gap-2 text-sm text-[#172536]/70'>
          <Ticket className='h-4 w-4 text-[#8E2730]' />
          <span>Menampilkan {filteredAttendee.length} data</span>
        </div>
      </div>

      <DataTable columns={columns} data={filteredAttendee} />
    </div>
  );
}
