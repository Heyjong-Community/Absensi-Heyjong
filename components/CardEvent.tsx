import { CalendarDays, MapPin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { Event } from '@/types/event';

interface CardEvent {
  event: Event;
}

export default function CardEvent({ event }: CardEvent) {
  return (
    <div key={event.id} id='card' className='rounded-lg shadow-lg p-4'>
      <div className='flex items-center justify-between'>
        <h2 className='text-black text-2xl font-bold'>{event.nama}</h2>
      </div>
      <p className='mt-2 text-gray-400 text-sm line-clamp-2'>{event.deskripsi}</p>
      <div className='mt-2 flex items-center gap-1'>
        <MapPin className='size-4' />
        <p className='text-sm'>{event.lokasi}</p>
      </div>
      <div className='mt-2 flex items-center gap-1'>
        <CalendarDays className='size-4' />
        <p className='text-sm'>
          {event.tanggalPelaksanaan.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
      </div>
      <Link href={`/event/${event.slug}`}>
        <Button size={'sm'} className='mt-4 w-full cursor-pointer'>
          Lihat
        </Button>
      </Link>
    </div>
  );
}
