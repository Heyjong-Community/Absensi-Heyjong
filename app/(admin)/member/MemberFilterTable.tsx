'use client';

import { DataTable } from '@/components/data-table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useDebounce } from '@/hooks/use-debounce';
import { MemberHeyjong } from '@/types/member';
import { Search, SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { columnsMemberHeyjong } from './column';

interface MemberFilterTableProps {
  members: MemberHeyjong[];
}

export function MemberFilterTable({ members }: MemberFilterTableProps) {
  const [genderFilter, setGenderFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchNamaLengkap, setSearchNamaLengkap] = useState('');
  const [searchPanggilan, setSearchPanggilan] = useState('');

  const debouncedNamaLengkap = useDebounce(searchNamaLengkap, 400);
  const debouncedPanggilan = useDebounce(searchPanggilan, 400);

  const filteredMembers = useMemo(() => {
    const namaQuery = debouncedNamaLengkap.trim().toLowerCase();
    const panggilanQuery = debouncedPanggilan.trim().toLowerCase();

    return members.filter((member) => {
      const matchesGender = genderFilter === 'all' || member.gender === genderFilter;
      const matchesStatus = statusFilter === 'all' || member.status === statusFilter;
      const matchesNamaLengkap = !namaQuery || member.namaLengkap.toLowerCase().includes(namaQuery);
      const matchesPanggilan = !panggilanQuery || member.panggilan.toLowerCase().includes(panggilanQuery);

      return matchesGender && matchesStatus && matchesNamaLengkap && matchesPanggilan;
    });
  }, [members, genderFilter, statusFilter, debouncedNamaLengkap, debouncedPanggilan]);

  return (
    <div className='space-y-5'>
      <div className='grid gap-4 lg:grid-cols-4'>
        <div className='space-y-2'>
          <Label htmlFor='filter-gender' className='text-sm font-bold text-[#172536]'>
            Filter Gender
          </Label>

          <Select value={genderFilter} onValueChange={(value) => setGenderFilter(value ?? 'all')}>
            <SelectTrigger
              id='filter-gender'
              className='h-11 w-full rounded-xl border-[#172536]/10 bg-[#F7F4ED]/30 text-[#172536] focus-visible:border-[#8E2730]/40 focus-visible:ring-[#8E2730]/10'
            >
              <SelectValue placeholder='Semua Gender' />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectItem value='all'>Semua Gender</SelectItem>
                <SelectItem value='LakiLaki'>Laki-laki</SelectItem>
                <SelectItem value='Perempuan'>Perempuan</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className='space-y-2'>
          <Label htmlFor='filter-status' className='text-sm font-bold text-[#172536]'>
            Filter Status
          </Label>

          <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value ?? 'all')}>
            <SelectTrigger
              id='filter-status'
              className='h-11 w-full rounded-xl border-[#172536]/10 bg-[#F7F4ED]/30 text-[#172536] focus-visible:border-[#8E2730]/40 focus-visible:ring-[#8E2730]/10'
            >
              <SelectValue placeholder='Semua Status' />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectItem value='all'>Semua Status</SelectItem>
                <SelectItem value='Volunteer'>Volunteer</SelectItem>
                <SelectItem value='Member'>Member</SelectItem>
                <SelectItem value='Staff'>Staff</SelectItem>
                <SelectItem value='Pengurus'>Pengurus</SelectItem>
                <SelectItem value='Manajemen'>Manajemen</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className='space-y-2'>
          <Label htmlFor='search-nama-lengkap' className='text-sm font-bold text-[#172536]'>
            Search Nama Lengkap
          </Label>

          <div className='relative'>
            <Search className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#172536]/40' />

            <Input
              id='search-nama-lengkap'
              type='text'
              value={searchNamaLengkap}
              onChange={(event) => setSearchNamaLengkap(event.target.value)}
              placeholder='Cari nama lengkap...'
              className='h-11 rounded-xl border-[#172536]/10 bg-[#F7F4ED]/30 pl-9 text-[#172536] placeholder:text-[#172536]/30 focus-visible:border-[#8E2730]/40 focus-visible:ring-[#8E2730]/10'
            />
          </div>
        </div>

        <div className='space-y-2'>
          <Label htmlFor='search-panggilan' className='text-sm font-bold text-[#172536]'>
            Search Nama Panggilan
          </Label>

          <div className='relative'>
            <Search className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#172536]/40' />

            <Input
              id='search-panggilan'
              type='text'
              value={searchPanggilan}
              onChange={(event) => setSearchPanggilan(event.target.value)}
              placeholder='Cari nama panggilan...'
              className='h-11 rounded-xl border-[#172536]/10 bg-[#F7F4ED]/30 pl-9 text-[#172536] placeholder:text-[#172536]/30 focus-visible:border-[#8E2730]/40 focus-visible:ring-[#8E2730]/10'
            />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between rounded-xl border border-[#172536]/10 bg-[#F7F4ED]/40 px-4 py-3'>
        <div className='flex items-center gap-2 text-sm text-[#172536]/70'>
          <SlidersHorizontal className='h-4 w-4 text-[#8E2730]' />
          <span>Menampilkan {filteredMembers.length} data</span>
        </div>
      </div>

      <DataTable columns={columnsMemberHeyjong} data={filteredMembers} />
    </div>
  );
}
