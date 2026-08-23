import { DataTable } from '@/components/data-table';
import { Button } from '@/components/ui/button';
import { getListAccessAccount } from '@/services/account';
import { Plus, ShieldCheck, UserCheck, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { columnsAccessAccount } from './column';

export default async function AccountAdminPage() {
  const listAccount = await getListAccessAccount();

  const totalAccount = listAccount?.length ?? 0;

  const activeAccount = listAccount?.filter((account) => account.status === 'Aktif').length ?? 0;

  const inactiveAccount = listAccount?.filter((account) => account.status !== 'Aktif').length ?? 0;

  const totalRole = new Set(listAccount?.map((account) => account.role)).size;

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

            <h1 className='text-3xl font-black tracking-tight text-[#172536] sm:text-4xl'>Akun Akses Dashboard</h1>

            <p className='mt-2 text-sm text-[#172536]/50'>
              Kelola akun yang memiliki akses ke dashboard HEYJONG Community.
            </p>
          </div>

          <Link
            href='/account/add'
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
            Tambah Akun
          </Link>
        </section>

        {/* =====================================================
            STATISTICS
        ====================================================== */}

        <section className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {/* Total */}

          <div className='rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#8E2730]/10'>
                <Users className='h-5 w-5 text-[#8E2730]' />
              </div>

              <span className='text-xs font-bold text-[#172536]/30'>TOTAL</span>
            </div>

            <p className='mt-5 text-sm font-medium text-[#172536]/50'>Total Akun</p>

            <p className='mt-1 text-3xl font-black text-[#172536]'>{totalAccount}</p>
          </div>

          {/* Active */}

          <div className='rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFCB2D]/20'>
                <UserCheck className='h-5 w-5 text-[#8E2730]' />
              </div>

              <span className='rounded-full bg-[#EFCB2D]/20 px-2.5 py-1 text-[10px] font-bold text-[#8E2730]'>
                AKTIF
              </span>
            </div>

            <p className='mt-5 text-sm font-medium text-[#172536]/50'>Akun Aktif</p>

            <p className='mt-1 text-3xl font-black text-[#172536]'>{activeAccount}</p>
          </div>

          {/* Inactive */}

          <div className='rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#172536]/5'>
                <ShieldCheck className='h-5 w-5 text-[#172536]/50' />
              </div>

              <span className='rounded-full bg-[#172536]/5 px-2.5 py-1 text-[10px] font-bold text-[#172536]/40'>
                NON AKTIF
              </span>
            </div>

            <p className='mt-5 text-sm font-medium text-[#172536]/50'>Akun Non Aktif</p>

            <p className='mt-1 text-3xl font-black text-[#172536]'>{inactiveAccount}</p>
          </div>

          {/* Role */}

          <div className='rounded-2xl border border-[#172536]/10 bg-white p-5 shadow-sm'>
            <div className='flex items-center justify-between'>
              <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#8E2730]/10'>
                <ShieldCheck className='h-5 w-5 text-[#8E2730]' />
              </div>

              <span className='text-xs font-bold text-[#172536]/30'>ROLE</span>
            </div>

            <p className='mt-5 text-sm font-medium text-[#172536]/50'>Role Digunakan</p>

            <p className='mt-1 text-3xl font-black text-[#172536]'>{totalRole}</p>
          </div>
        </section>

        {/* =====================================================
            TABLE
        ====================================================== */}

        <section className='mt-8 rounded-2xl border border-[#172536]/10 bg-white shadow-sm'>
          <div className='border-b border-[#172536]/10 px-6 py-5'>
            <h2 className='text-lg font-black text-[#172536]'>Daftar Akun</h2>

            <p className='mt-1 text-xs text-[#172536]/45'>Kelola pengguna dan hak akses dashboard.</p>
          </div>

          <div className='p-4 sm:p-6'>
            <DataTable columns={columnsAccessAccount} data={listAccount || []} />
          </div>
        </section>
      </div>
    </main>
  );
}
