import QRViewPage from '@/components/QRView';
import { getEventBySlug } from '@/services/event';
import { Event } from '@/types/event';
import { ArrowLeft, QrCode } from 'lucide-react';
import Link from 'next/link';

export default async function QREventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const event = await getEventBySlug(slug);
  console.log('event - ', event);
  return (
    <main className='min-h-screen w-full bg-[#F7F4ED]'>
      <div className='mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-6 sm:px-8'>
        {/* =====================================================
            HEADER
        ====================================================== */}
        <header className='flex items-center justify-between'>
          <Link
            href='/'
            className='
              flex
              items-center
              gap-2
              rounded-xl
              px-3
              py-2
              text-sm
              font-semibold
              text-[#172536]/60
              transition
              hover:bg-white
              hover:text-[#8E2730]
            '
          >
            <ArrowLeft className='size-4' />
            Kembali
          </Link>

          <div className='flex items-center gap-2'>
            <div className='flex size-9 items-center justify-center rounded-xl bg-[#8E2730]'>
              <QrCode className='size-5 text-white' />
            </div>

            <div className='hidden sm:block'>
              <p className='text-xs font-black text-[#172536]'>HEYJONG</p>

              <p className='text-[10px] text-[#172536]/40'>Community</p>
            </div>
          </div>
        </header>

        {/* =====================================================
            MAIN
        ====================================================== */}
        <QRViewPage event={event as Event} />

        {/* =====================================================
            FOOTER
        ====================================================== */}
        <footer className='border-t border-[#172536]/10 pt-5 text-center'>
          <p className='text-xs text-[#172536]/40'>&copy; Heyjong Community 2026.</p>
        </footer>
      </div>
    </main>
  );
}
