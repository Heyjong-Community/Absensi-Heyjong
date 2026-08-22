'use client';

import React from 'react';
import { SidebarTrigger } from '../ui/sidebar';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup, // Tambahkan import ini
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import Link from 'next/link';
import { actionLogout } from '@/app/actions/authAction';

export default function NavDash() {
  return (
    <nav className='p-2 flex items-center justify-between'>
      <div>
        <SidebarTrigger />
      </div>
      <div>
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <button
                  type='button'
                  id='profile'
                  className='border-primary size-8 overflow-hidden rounded-full border-2 bg-black cursor-pointer'
                />
              }
            />

            <DropdownMenuContent>
              {/* Bungkus label dan item di dalam DropdownMenuGroup */}
              <DropdownMenuGroup>
                <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                  render={
                    <Link href='/dashboard/account' className='w-full cursor-pointer'>
                      Profil
                    </Link>
                  }
                />

                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <DialogTrigger
                    nativeButton={false}
                    render={<span className='w-full cursor-pointer text-red-600'>Logout</span>}
                  />
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DialogContent className='sm:max-w-md'>
            <DialogHeader>
              <DialogTitle className='text-black'>Konfirmasi Logout</DialogTitle>
              <DialogDescription className='text-text-light'>Apakah kamu yakin ingin keluar?</DialogDescription>
            </DialogHeader>

            <DialogFooter className='flex justify-end gap-2'>
              <DialogClose
                render={
                  <button
                    type='button'
                    className='rounded-md border border-gray-600 px-3 py-2 text-sm text-gray-800 hover:bg-gray-100'
                  >
                    Batal
                  </button>
                }
              />

              <button
                type='button'
                onClick={() => actionLogout()}
                className='bg-primary hover:bg-primary/80 rounded-md px-3 py-2 text-sm font-semibold text-white'
              >
                Logout
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
}
