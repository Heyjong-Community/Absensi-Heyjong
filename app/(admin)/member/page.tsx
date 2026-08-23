import { DataTable } from '@/components/data-table';
import { listMemberHeyjong } from '@/services/member';
import { Users, UserCheck, UserRoundPlus, UserX, Plus, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

import { columnsMemberHeyjong } from './column';

export default async function MemberDashPage() {
  const members = await listMemberHeyjong();

  const totalMember = members?.length ?? 0;

  const volunteerCount = members?.filter((member) => member.status === 'Volunteer').length ?? 0;

  const memberCount = members?.filter((member) => member.status === 'Member').length ?? 0;

  const staffCount = members?.filter((member) => member.status === 'Staff').length ?? 0;

  const pengurusCount = members?.filter((member) => member.status === 'Pengurus').length ?? 0;

  const manajemenCount = members?.filter((member) => member.status === 'Manajemen').length ?? 0;

  return (
    <main className='min-h-screen w-full bg-[#F7F4ED]'>
      <div className='mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10'>
        {/* =====================================================
            HEADER
        ====================================================== */}

        <section className='flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <div className='mb-3 flex items-center gap-2'>
              <span className='h-2 w-2 rounded-full bg-[#EFCB2D]' />

              <span className='text-xs font-bold uppercase tracking-wider text-[#8E2730]/60'>User</span>
            </div>

            <h1 className='text-3xl font-black tracking-tight text-[#172536] sm:text-4xl'>Member Heyjong Community</h1>

            <p className='mt-2 text-sm text-[#172536]/50'>
              Kelola data anggota dan status keanggotaan HEYJONG Community.
            </p>
          </div>

          <Link
            href='/member/add'
            className='
              inline-flex
              h-11
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#8E2730]
              px-5
              font-bold
              text-white
              shadow-lg
              shadow-[#8E2730]/10
              transition-all
              hover:-translate-y-0.5
              hover:bg-[#a73e47]
            '
          >
            <Plus className='h-4 w-4' />
            Tambah Member
          </Link>
        </section>

        {/* =====================================================
            STATISTICS
        ====================================================== */}

        <section className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5'>
          {/* Total */}

          <div className='rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#8E2730]/10'>
                <Users className='h-5 w-5 text-[#8E2730]' />
              </div>

              <span className='text-xs font-bold text-[#172536]/30'>TOTAL</span>
            </div>

            <p className='mt-5 text-sm font-medium text-[#172536]/50'>Total Anggota</p>

            <p className='mt-1 text-3xl font-black text-[#172536]'>{totalMember}</p>
          </div>

          {/* Member */}

          <div className='rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFCB2D]/20'>
                <UserCheck className='h-5 w-5 text-[#8E2730]' />
              </div>

              <span className='text-xs font-bold text-[#172536]/30'>ROLE</span>
            </div>

            <p className='mt-5 text-sm font-medium text-[#172536]/50'>Member</p>

            <p className='mt-1 text-3xl font-black text-[#172536]'>{memberCount}</p>
          </div>

          {/* Volunteer */}

          <div className='rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#8E2730]/10'>
                <UserRoundPlus className='h-5 w-5 text-[#8E2730]' />
              </div>

              <span className='text-xs font-bold text-[#172536]/30'>ROLE</span>
            </div>

            <p className='mt-5 text-sm font-medium text-[#172536]/50'>Volunteer</p>

            <p className='mt-1 text-3xl font-black text-[#172536]'>{volunteerCount}</p>
          </div>

          {/* Staff & Pengurus */}

          <div className='rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#172536]/5'>
                <ShieldCheck className='h-5 w-5 text-[#172536]/60' />
              </div>

              <span className='text-xs font-bold text-[#172536]/30'>ROLE</span>
            </div>

            <p className='mt-5 text-sm font-medium text-[#172536]/50'>Staff / Pengurus</p>

            <p className='mt-1 text-3xl font-black text-[#172536]'>{staffCount + pengurusCount}</p>
          </div>

          {/* Manajemen */}

          <div className='rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFCB2D]/20'>
                <ShieldCheck className='h-5 w-5 text-[#8E2730]' />
              </div>

              <span className='text-xs font-bold text-[#172536]/30'>ROLE</span>
            </div>

            <p className='mt-5 text-sm font-medium text-[#172536]/50'>Manajemen</p>

            <p className='mt-1 text-3xl font-black text-[#172536]'>{manajemenCount}</p>
          </div>
        </section>

        {/* =====================================================
            TABLE
        ====================================================== */}

        <section className='mt-8 rounded-2xl border border-[#172536]/10 bg-white shadow-sm'>
          <div className='border-b border-[#172536]/10 px-6 py-5'>
            <h2 className='text-lg font-black text-[#172536]'>Daftar Member</h2>

            <p className='mt-1 text-xs text-[#172536]/45'>Daftar seluruh anggota HEYJONG Community.</p>
          </div>

          <div className='p-4 sm:p-6'>
            <DataTable columns={columnsMemberHeyjong} data={members || []} />
          </div>
        </section>
      </div>
    </main>
  );
}
