'use client';

import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';

import {
  Activity,
  BarChart3,
  CalendarDays,
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  UserRound,
  Users,
} from 'lucide-react';

import Link from 'next/link';
import Image from 'next/image';

// ============================================================
// NAVIGATION DATA
// ============================================================

const data = {
  navMain: [
    {
      title: 'Home',
      items: [
        {
          title: 'Dashboard',
          url: '/dashboard',
          icon: LayoutDashboard,
          isActive: true,
        },
      ],
    },

    {
      title: 'Master Data',
      items: [
        {
          title: 'Event',
          url: '/activity',
          icon: CalendarDays,
          isActive: false,
        },
        {
          title: 'Absensi',
          url: '/absensi',
          icon: Activity,
          isActive: false,
        },
      ],
    },

    {
      title: 'User',
      items: [
        {
          title: 'Admin',
          url: '/account',
          icon: ShieldCheck,
          isActive: false,
        },
        {
          title: 'Member',
          url: '/member',
          icon: Users,
          isActive: false,
        },
      ],
    },

    {
      title: 'Analitik',
      items: [
        {
          title: 'Analisis Kehadiran',
          url: '#',
          icon: BarChart3,
          isActive: false,
        },
      ],
    },
  ],
};

// ============================================================
// SIDEBAR
// ============================================================

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className='border-r-0'>
      {/* =====================================================
          HEADER
      ====================================================== */}
      <SidebarHeader className='bg-[#8E2730] px-4 py-5'>
        <Link
          href='/dashboard'
          className='
            group
            flex
            items-center
            gap-3
            rounded-xl
            p-2
            transition
            hover:bg-white/10
          '
        >
          {/* Logo */}
          <div
            className='
              flex
              aspect-square
              size-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[#EFCB2D]
              shadow-md
            '
          >
            <Image
              src='/images/logo-color.png'
              width={200}
              height={200}
              alt='HEYJONG Community'
              className='size-9 object-contain'
            />
          </div>

          {/* Brand */}
          <div className='flex min-w-0 flex-col leading-none'>
            <span className='truncate text-sm font-black text-white'>HEYJONG</span>

            <span className='mt-1 text-[10px] font-medium uppercase tracking-wider text-white/50'>Community</span>
          </div>
        </Link>
      </SidebarHeader>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <SidebarContent className='bg-[#8E2730] px-3'>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title} className='py-3'>
            {/* Group title */}
            <SidebarGroupLabel
              className='
                px-3
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-white/40
              '
            >
              {group.title}
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        isActive={item.isActive}
                        render={
                          <Link
                            href={item.url}
                            className='
                              group/item
                              relative
                              flex
                              w-full
                              items-center
                              gap-3
                              rounded-xl
                              px-3
                              py-2.5
                              text-sm
                              font-medium
                              text-white/70
                              transition-all
                              hover:bg-white/10
                              hover:text-white
                            '
                          />
                        }
                      >
                        {/* Icon */}
                        <Icon
                          className='
                            size-[18px]
                            shrink-0
                            text-white/50
                            transition-colors
                            group-hover/item:text-[#EFCB2D]
                          '
                        />

                        {/* Text */}
                        <span className='truncate'>{item.title}</span>

                        {/* Arrow */}
                        <ChevronRight
                          className='
                            ml-auto
                            size-4
                            text-white/20
                            opacity-0
                            transition-all
                            group-hover/item:translate-x-0.5
                            group-hover/item:opacity-100
                          '
                        />
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        {/* ===================================================
            SETTINGS
        ==================================================== */}

        {/* <SidebarGroup className='mt-auto py-3'>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={
                    <Link
                      href='/settings'
                      className='
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-2.5
                        text-sm
                        font-medium
                        text-white/60
                        transition
                        hover:bg-white/10
                        hover:text-white
                      '
                    />
                  }
                >
                  <Settings className='size-[18px] text-white/40' />

                  <span>Pengaturan</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}
      </SidebarContent>

      {/* =====================================================
          RAIL
      ====================================================== */}
      <SidebarRail className='bg-[#8E2730]' />
    </Sidebar>
  );
}
