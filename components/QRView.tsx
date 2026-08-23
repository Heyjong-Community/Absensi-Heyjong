'use client';

import React, { useEffect, useState } from 'react';
import { CalendarDays, MapPin, QrCode } from 'lucide-react';
import QRCode from 'qrcode';
import Image from 'next/image';

import { Event } from '@/types/event';
import { formatDate } from '@/utils/date';

interface QRViewPageProps {
  event: Event;
}

export default function QRViewPage({ event }: QRViewPageProps) {
  const [qrImageUrl, setQrImageUrl] = useState<string>('');

  useEffect(() => {
    if (!event.slug) return;

    const generateQRCode = async () => {
      try {
        const attendanceUrl = `${window.location.origin}/attendance/${event.slug}`;

        const qrDataUrl = await QRCode.toDataURL(attendanceUrl, {
          width: 500,
          margin: 2,
          errorCorrectionLevel: 'H',
          color: {
            dark: '#172536',
            light: '#FFFFFF',
          },
        });

        setQrImageUrl(qrDataUrl);
      } catch (error) {
        console.error('Gagal generate QR Code:', error);
        setQrImageUrl('');
      }
    };

    generateQRCode();
  }, [event.slug]);

  return (
    <section className='flex flex-1 items-center justify-center py-8 sm:py-10'>
      <div className='w-full max-w-xl'>
        {/* =====================================================
            TITLE
        ====================================================== */}
        <div className='text-center'>
          <div className='mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-[#EFCB2D]/25'>
            <QrCode className='size-7 text-[#8E2730]' />
          </div>

          <p className='text-xs font-black uppercase tracking-[0.2em] text-[#8E2730]/60'>QR Absensi</p>

          <h1 className='mt-2 text-3xl font-black tracking-tight text-[#172536] sm:text-4xl'>{event.nama}</h1>

          <p className='mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#172536]/50'>
            Scan QR Code di bawah ini menggunakan kamera smartphone untuk melakukan absensi kegiatan.
          </p>
        </div>

        {/* =====================================================
            EVENT INFORMATION
        ====================================================== */}
        <div
          className='
            mt-8
            rounded-2xl
            border
            border-[#172536]/10
            bg-white
            p-4
            shadow-sm
            sm:p-5
          '
        >
          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
            {/* Tanggal */}
            <div className='rounded-xl bg-[#F7F4ED] p-4'>
              <div className='flex items-center gap-2'>
                <div className='flex size-8 items-center justify-center rounded-lg bg-[#EFCB2D]/25'>
                  <CalendarDays className='size-4 text-[#8E2730]' />
                </div>

                <p className='text-[10px] font-bold uppercase tracking-wider text-[#172536]/35'>Tanggal</p>
              </div>

              <p className='mt-3 text-sm font-bold text-[#172536]'>{formatDate(String(event.tanggalPelaksanaan))}</p>
            </div>

            {/* Lokasi */}
            <div className='rounded-xl bg-[#F7F4ED] p-4'>
              <div className='flex items-center gap-2'>
                <div className='flex size-8 items-center justify-center rounded-lg bg-[#8E2730]/10'>
                  <MapPin className='size-4 text-[#8E2730]' />
                </div>

                <p className='text-[10px] font-bold uppercase tracking-wider text-[#172536]/35'>Lokasi</p>
              </div>

              <p className='mt-3 truncate text-sm font-bold text-[#172536]'>{event.lokasi || '-'}</p>
            </div>
          </div>
        </div>

        {/* =====================================================
            QR CODE
        ====================================================== */}
        <div
          className='
            relative
            mx-auto
            mt-5
            flex
            aspect-square
            w-full
            max-w-md
            items-center
            justify-center
            rounded-3xl
            border
            border-[#172536]/10
            bg-white
            p-8
            shadow-xl
            shadow-[#172536]/5
            sm:p-10
          '
        >
          {/* Decorative corners */}
          <div className='absolute left-4 top-4 h-10 w-10 rounded-tl-xl border-l-4 border-t-4 border-[#8E2730]' />

          <div className='absolute right-4 top-4 h-10 w-10 rounded-tr-xl border-r-4 border-t-4 border-[#8E2730]' />

          <div className='absolute bottom-4 left-4 h-10 w-10 rounded-bl-xl border-b-4 border-l-4 border-[#8E2730]' />

          <div className='absolute bottom-4 right-4 h-10 w-10 rounded-br-xl border-b-4 border-r-4 border-[#8E2730]' />

          {/* QR */}
          {qrImageUrl ? (
            <Image
              src={qrImageUrl}
              width={500}
              height={500}
              alt={`QR Code absensi ${event.nama}`}
              className='
                h-auto
                w-full
                max-w-[340px]
                object-contain
              '
              priority
              unoptimized
            />
          ) : (
            <div className='flex aspect-square w-full max-w-[340px] items-center justify-center rounded-xl bg-[#F7F4ED]'>
              <div className='flex flex-col items-center gap-3 text-center'>
                <QrCode className='size-12 animate-pulse text-[#8E2730]/40' />

                <p className='text-sm font-semibold text-[#172536]/40'>Membuat QR Code...</p>
              </div>
            </div>
          )}
        </div>

        {/* =====================================================
            INSTRUCTION
        ====================================================== */}
        <div className='mt-5 text-center'>
          <p className='text-sm font-semibold text-[#172536]/70'>Arahkan kamera ke QR Code</p>

          <p className='mt-1 text-xs text-[#172536]/40'>Pastikan QR Code terlihat jelas pada kamera.</p>
        </div>

        {/* =====================================================
            URL INFO
        ====================================================== */}
        <div className='mt-5 rounded-xl border border-[#172536]/10 bg-white/70 px-4 py-3 text-center'>
          <p className='text-[10px] font-bold uppercase tracking-wider text-[#172536]/30'>Link Absensi</p>

          <p className='mt-1 break-all text-xs font-medium text-[#8E2730]'>/attendance/{event.slug}</p>
        </div>
      </div>
    </section>
  );
}
