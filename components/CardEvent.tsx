import { CalendarDays, MapPin, QrCode, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { Event } from '@/types/event';
import Image from 'next/image';

interface CardEvent {
  event: Event;
}

export default function CardEvent({ event }: CardEvent) {
  return (
    <div
      key={event.id}
      className='
        group
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-[#172536]/10
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      '
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}
      <div className='relative overflow-hidden'>
        <Image
          src='/images/event.png'
          width={500}
          height={500}
          alt={event.nama}
          className='
            h-44
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          '
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-[#172536]/50 via-transparent to-transparent' />

        {/* Event badge */}
        <div className='absolute left-4 top-4'>
          <span
            className='
            inline-flex
            items-center
            rounded-full
            bg-[#EFCB2D]
            px-3
            py-1
            text-[10px]
            font-black
            uppercase
            tracking-wider
            text-[#172536]
            shadow-sm
          '
          >
            Event
          </span>
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className='p-5'>
        {/* Title */}
        <h2
          className='
            line-clamp-2
            text-xl
            font-black
            leading-tight
            tracking-tight
            text-[#172536]
          '
        >
          {event.nama}
        </h2>

        {/* Description */}
        {event.deskripsi && (
          <p className='mt-2 line-clamp-2 text-sm leading-relaxed text-[#172536]/50'>{event.deskripsi}</p>
        )}

        {/* =================================================
            EVENT INFORMATION
        ================================================== */}
        <div className='mt-5 space-y-3'>
          {/* Location */}
          <div className='flex items-start gap-3'>
            <div
              className='
              flex
              size-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-[#8E2730]/10
            '
            >
              <MapPin className='size-4 text-[#8E2730]' />
            </div>

            <div className='min-w-0'>
              <p className='text-[10px] font-bold uppercase tracking-wider text-[#172536]/30'>Lokasi</p>

              <p className='truncate text-sm font-semibold text-[#172536]/70'>
                {event.lokasi || 'Lokasi belum ditentukan'}
              </p>
            </div>
          </div>

          {/* Date */}
          <div className='flex items-start gap-3'>
            <div
              className='
              flex
              size-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-[#EFCB2D]/20
            '
            >
              <CalendarDays className='size-4 text-[#8E2730]' />
            </div>

            <div>
              <p className='text-[10px] font-bold uppercase tracking-wider text-[#172536]/30'>Tanggal</p>

              <p className='text-sm font-semibold text-[#172536]/70'>
                {event.tanggalPelaksanaan.toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            ACTIONS
        ================================================== */}
        <div className='mt-6 grid grid-cols-2 gap-2'>
          {/* Absen */}
          <Link
            href={`/attendance/${event.slug}`}
            className='
              flex
              h-10
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#8E2730]
              px-4
              text-sm
              font-bold
              text-white
              shadow-sm
              transition-all
              hover:bg-[#a73e47]
              hover:shadow-md
            '
          >
            Absen
            <ArrowRight className='size-4' />
          </Link>

          {/* QR */}
          <Link
            href={`/attendance/qr/${event.slug}`}
            className='
              flex
              h-10
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-[#EFCB2D]
              bg-[#EFCB2D]/10
              px-4
              text-sm
              font-bold
              text-[#8E2730]
              transition-all
              hover:bg-[#EFCB2D]/25
            '
          >
            <QrCode className='size-4' />
            Lihat QR
          </Link>
        </div>
      </div>
    </div>
  );
}
