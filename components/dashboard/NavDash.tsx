'use client';

import { actionLogout } from '@/app/actions/authAction';
import { ChevronDown, LogOut, UserRound } from 'lucide-react';
import Link from 'next/link';
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
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { SidebarTrigger } from '../ui/sidebar';
import { useSession } from 'next-auth/react';

export default function NavDash() {
  const { data: session } = useSession();
  return (
    <nav className='sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-[#172536]/10 bg-[#F7F4ED]/95 px-4 backdrop-blur-md sm:px-6'>
      {/* =====================================================
          LEFT
      ====================================================== */}
      <div className='flex items-center gap-3'>
        <SidebarTrigger
          className='
            size-9
            rounded-xl
            text-[#172536]/70
            hover:bg-[#8E2730]/10
            hover:text-[#8E2730]
          '
        />

        <div className='hidden h-6 w-px bg-[#172536]/10 sm:block' />

        <div className='hidden sm:block'>
          <p className='text-sm font-semibold text-[#172536]'>Heyjong Community</p>

          <p className='text-[11px] text-[#172536]/40'>Dashboard Management</p>
        </div>
      </div>

      {/* =====================================================
          RIGHT
      ====================================================== */}
      <div className='flex items-center gap-3'>
        {/* Decorative status */}
        <div className='hidden items-center gap-2 rounded-full border border-[#172536]/10 bg-white px-3 py-1.5 sm:flex'>
          <span className='h-2 w-2 rounded-full bg-[#EFCB2D]' />

          <span className='text-xs font-semibold text-[#172536]/60'>Admin Dashboard</span>
        </div>

        {/* Profile */}
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <button
                  type='button'
                  id='profile'
                  className='
                    group
                    flex
                    h-10
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[#172536]/10
                    bg-white
                    px-2
                    shadow-sm
                    transition-all
                    hover:border-[#8E2730]/20
                    hover:shadow-md
                  '
                >
                  {/* Avatar */}
                  <div
                    className='
                      flex
                      size-8
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#8E2730]
                      text-white
                    '
                  >
                    <UserRound className='size-4' />
                  </div>

                  {/* User name */}
                  <div className='hidden text-left sm:block'>
                    <p className='text-xs font-bold text-[#172536]'>{session?.user.email}</p>

                    <p className='text-[10px] text-[#172536]/40'>{session?.user.role}</p>
                  </div>

                  <ChevronDown
                    className='
                      ml-1
                      size-4
                      text-[#172536]/40
                      transition-transform
                      group-data-[state=open]:rotate-180
                    '
                  />
                </button>
              }
            />

            <DropdownMenuContent
              align='end'
              sideOffset={8}
              className='
                w-56
                rounded-xl
                border
                border-[#172536]/10
                bg-white
                p-1.5
                shadow-xl
              '
            >
              <DropdownMenuGroup>
                <DropdownMenuLabel className='px-3 py-2'>
                  <div>
                    <p className='text-sm font-bold text-[#172536]'>Akun Saya</p>

                    <p className='mt-0.5 text-xs text-[#172536]/40'>Kelola akun Anda</p>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator className='bg-[#172536]/10' />

                {/* Profile */}
                <DropdownMenuItem
                  className='
                    cursor-pointer
                    rounded-lg
                    px-3
                    py-2.5
                    text-[#172536]/70
                    outline-none
                    focus:bg-[#8E2730]/5
                    focus:text-[#8E2730]
                  '
                  render={
                    <Link href='/dashboard/account' className='flex w-full items-center gap-3'>
                      <div className='flex size-8 items-center justify-center rounded-lg bg-[#172536]/5'>
                        <UserRound className='size-4' />
                      </div>

                      <div>
                        <p className='text-sm font-semibold'>Profil</p>

                        <p className='text-[10px] text-[#172536]/40'>Informasi akun</p>
                      </div>
                    </Link>
                  }
                />

                {/* Logout */}
                <DropdownMenuItem
                  className='
                    cursor-pointer
                    rounded-lg
                    px-3
                    py-2.5
                    text-red-500
                    outline-none
                    focus:bg-red-50
                    focus:text-red-600
                  '
                  onSelect={(e) => e.preventDefault()}
                >
                  <DialogTrigger
                    nativeButton={false}
                    render={
                      <span className='flex w-full items-center gap-3'>
                        <div className='flex size-8 items-center justify-center rounded-lg bg-red-50'>
                          <LogOut className='size-4' />
                        </div>

                        <div>
                          <p className='text-sm font-semibold'>Logout</p>

                          <p className='text-[10px] text-red-400'>Keluar dari dashboard</p>
                        </div>
                      </span>
                    }
                  />
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* =================================================
              LOGOUT DIALOG
          ================================================== */}

          <DialogContent
            className='
              rounded-2xl
              border-[#172536]/10
              bg-[#F7F4ED]
              sm:max-w-md
            '
          >
            <DialogHeader>
              <div className='mb-2 flex size-12 items-center justify-center rounded-xl bg-[#8E2730]/10'>
                <LogOut className='size-5 text-[#8E2730]' />
              </div>

              <DialogTitle className='text-lg font-black text-[#172536]'>Konfirmasi Logout</DialogTitle>

              <DialogDescription className='text-sm text-[#172536]/50'>
                Apakah kamu yakin ingin keluar dari dashboard Heyjong Community?
              </DialogDescription>
            </DialogHeader>

            <DialogFooter className='mt-4 flex flex-row justify-end gap-2'>
              <DialogClose
                render={
                  <button
                    type='button'
                    className='
                      rounded-xl
                      border
                      border-[#172536]/10
                      bg-white
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      text-[#172536]/60
                      transition
                      hover:bg-[#172536]/5
                    '
                  >
                    Batal
                  </button>
                }
              />

              <button
                type='button'
                onClick={() => actionLogout()}
                className='
                  rounded-xl
                  bg-[#8E2730]
                  px-4
                  py-2.5
                  text-sm
                  font-bold
                  text-white
                  shadow-sm
                  transition
                  hover:bg-[#a73e47]
                  hover:shadow-md
                '
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
