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
import { GalleryVerticalEnd } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// This is sample data.
const data = {
  versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
  navMain: [
    {
      title: 'Home',
      url: '#',
      items: [
        {
          title: 'Dashboard',
          url: '/dashboard',
          isActive: true,
        },
      ],
    },
    {
      title: 'Master Data',
      url: '#',
      items: [
        {
          title: 'Event',
          url: '/activity',
        },
        {
          title: 'Absensi',
          url: '/absensi',
        },
      ],
    },
    {
      title: 'User',
      url: '#',
      items: [
        {
          title: 'Admin',
          url: '/account',
        },
        {
          title: 'Member',
          url: '/member',
        },
      ],
    },
    {
      title: 'Analitik',
      url: '#',
      items: [
        {
          title: 'Analisis Kehadiran',
          url: '#',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground flex items-center gap-4'>
          {/* <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'> */}
          <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-[#EFCB2D] text-sidebar-primary-foreground'>
            {/* <GalleryVerticalEnd className='size-4' /> */}
            <Image src={'/images/logo-color.png'} width={200} height={200} alt='' className='size-8' />
          </div>
          <div className='flex flex-col gap-0.5 leading-none'>
            <span className='font-medium text-white'>Heyjong Community</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className='text-white/50'>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={item.isActive}
                      render={<Link href={item.url} className='text-white' />}
                    >
                      {item.title}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
