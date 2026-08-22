'use client';

import { MemberHeyjong, StatusMemberHeyjong } from '@/types/member';
import { useState } from 'react';
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from './ui/combobox';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { cn } from '@/lib/utils';
import { HandHeart, BadgeCheck, Briefcase, Crown, CalendarDays, UserSearch } from 'lucide-react';

interface AttendanceFormProps {
  event: { id: string; nama: string } | null;
  members: MemberHeyjong[];
}

// Tiap status punya warna & ikon sendiri — bukan cuma hiasan, tapi bantu orang
// langsung kenali perannya sekilas saat memilih.
const STATUS_OPTIONS: {
  value: StatusMemberHeyjong;
  label: string;
  icon: React.ElementType;
  activeClass: string;
}[] = [
  {
    value: 'Volunteer',
    label: 'Volunteer',
    icon: HandHeart,
    activeClass: 'border-orange-400 bg-orange-50 text-orange-600 ring-orange-200',
  },
  {
    value: 'Member',
    label: 'Member',
    icon: BadgeCheck,
    activeClass: 'border-emerald-400 bg-emerald-50 text-emerald-600 ring-emerald-200',
  },
  {
    value: 'Staff',
    label: 'Staff',
    icon: Briefcase,
    activeClass: 'border-sky-400 bg-sky-50 text-sky-600 ring-sky-200',
  },
  {
    value: 'Pengurus',
    label: 'Pengurus',
    icon: Crown,
    activeClass: 'border-violet-400 bg-violet-50 text-violet-600 ring-violet-200',
  },
];

export default function AttendanceForm({ event, members }: AttendanceFormProps) {
  const [status, setStatus] = useState<StatusMemberHeyjong>('Volunteer');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedMember, setSelectedMember] = useState<string>('');

  const filteredMembers = members.filter((member) => {
    const matchesStatus = member.status === status;
    const matchesSearch = member.namaLengkap?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const activeOption = STATUS_OPTIONS.find((opt) => opt.value === status);

  return (
    <div className='mx-auto w-full h-full max-w-lg'>
      <div className='relative overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-xl shadow-orange-100/50'>
        {/* Header gradient — identitas visual komunitas */}
        <div className='relative bg-linear-to-br from-[#DF334D] via-[#EE7032] to-[#E5D92C] px-6 py-7 text-white'>
          <div className='pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-white/10' />
          <div className='pointer-events-none absolute -bottom-10 left-10 h-20 w-20 rounded-full bg-white/10' />
          <div className='relative flex items-center gap-3'>
            <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm'>
              <CalendarDays className='h-6 w-6' />
            </div>
            <div className='min-w-0'>
              <p className='text-xs font-medium uppercase tracking-wider text-white/80'>Form Kehadiran</p>
              <p className='truncate text-lg font-bold'>{event?.nama || 'Pilih event terlebih dahulu'}</p>
            </div>
          </div>
        </div>

        <form className='space-y-7 px-6 py-7'>
          <input type='hidden' name='eventId' value={event?.id ?? ''} />

          {/* Status selector — segmented pills berwarna */}
          <div className='space-y-3'>
            <Label className='text-sm font-semibold text-slate-700'>Kamu hadir sebagai</Label>
            <RadioGroup
              name='status'
              value={status}
              onValueChange={(val) => setStatus(val as StatusMemberHeyjong)}
              className='grid grid-cols-2 gap-3 sm:grid-cols-4'
            >
              {STATUS_OPTIONS.map(({ value, label, icon: Icon, activeClass }) => {
                const isActive = status === value;
                return (
                  <Label
                    key={value}
                    htmlFor={value}
                    className={cn(
                      'flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-slate-100 bg-slate-50 px-3 py-4 text-center text-sm font-medium text-slate-500 ring-4 ring-transparent transition-all duration-200 hover:border-slate-200',
                      isActive && activeClass,
                    )}
                  >
                    <RadioGroupItem value={value} id={value} className='sr-only' />
                    <Icon className='h-5 w-5' />
                    {label}
                  </Label>
                );
              })}
            </RadioGroup>
          </div>

          {/* Nama */}
          <div className='space-y-2'>
            <Label className='text-sm font-semibold text-slate-700'>Nama Lengkap</Label>
            {status === 'Volunteer' ? (
              <Input
                type='text'
                id='nama'
                name='nama'
                placeholder='Ketik nama lengkap'
                className='h-12 rounded-xl border-slate-200 focus-visible:ring-orange-300'
              />
            ) : (
              <Combobox value={selectedMember} onValueChange={(val) => setSelectedMember(val ?? '')}>
                <div className='relative'>
                  <UserSearch className='pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400' />
                  <ComboboxInput
                    placeholder='Cari nama...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='h-12 rounded-xl border-slate-200 pl-9 focus-visible:ring-orange-300'
                  />
                </div>
                <ComboboxContent className='rounded-xl border-slate-200'>
                  {filteredMembers.length === 0 ? (
                    <ComboboxEmpty className='py-6 text-center text-sm text-slate-400'>
                      Nama tidak ditemukan.
                    </ComboboxEmpty>
                  ) : (
                    <ComboboxList>
                      {filteredMembers.map((member) => (
                        <ComboboxItem
                          key={member.id}
                          value={member.namaLengkap}
                          className='rounded-lg data-highlighted:bg-orange-50 data-highlighted:text-orange-700'
                        >
                          {member.namaLengkap}
                        </ComboboxItem>
                      ))}
                    </ComboboxList>
                  )}
                </ComboboxContent>
              </Combobox>
            )}
            {activeOption && status !== 'Volunteer' && (
              <p className='text-xs text-slate-400'>
                Menampilkan daftar nama dengan status <span className='font-medium'>{activeOption.label}</span>
              </p>
            )}
          </div>

          <button
            type='submit'
            className='w-full rounded-xl bg-linear-to-r from-[#DF334D] via-[#EE7032] to-[#E5D92C] py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]'
          >
            Catat Kehadiran
          </button>
          {/* <button
            type='submit'
            className='w-full rounded-xl bg-linear-to-r from-orange-500 via-rose-500 to-violet-500 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]'
          >
            Catat Kehadiran
          </button> */}
        </form>
      </div>
    </div>
  );
}
