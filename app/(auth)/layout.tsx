import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Login | Dashboard Absensi Heyjong Community',
  description: 'Login page Dashboard Absensi Heyjong Community',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={cn('h-full', 'antialiased', 'font-sans', inter.variable)}>
      <body className='h-screen'>{children}</body>
    </html>
  );
}
