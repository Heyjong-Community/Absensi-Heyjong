import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { cn } from '@/lib/utils';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';
import NavDash from '@/components/dashboard/NavDash';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Dashboard Absensi Heyjong Community',
  description: 'Dashboard Absensi Heyjong Community',
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={cn('h-full', 'antialiased', 'font-sans', inter.variable)}>
      <body className='w-full'>
        <SessionProvider>
          <SidebarProvider>
            <AppSidebar />
            <main className='w-full overflow-hidden'>
              <NavDash />
              <div>{children}</div>
            </main>
          </SidebarProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
