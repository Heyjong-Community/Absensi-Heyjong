'use client';

import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import QRCode from 'qrcode';
import Image from 'next/image';
import { Button } from './ui/button';

export default function QRDialog({ slug }: { slug: string }) {
  const [qrImageUrl, setQrImageUrl] = useState<string>('');

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const attendanceUrl = `${baseUrl}/attendance/${slug}`;

  useEffect(() => {
    const generateQRCode = async () => {
      if (!slug) return;

      try {
        const url = await QRCode.toDataURL(attendanceUrl, {
          width: 300,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#ffffff',
          },
        });
        setQrImageUrl(url);
      } catch (err) {
        console.error('Gagal generate QR Code:', err);
      }
    };

    generateQRCode();
  }, [slug, attendanceUrl]);

  return (
    <Dialog>
      <DialogTrigger
        render={
          <button className='text-blue-500 hover:underline transition-all duration-300 text-sm cursor-pointer'>
            Lihat QR
          </button>
        }
      />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>QR Code Form Absensi</DialogTitle>
          <DialogDescription>
            Silakan download qr ini dan pastikan peserta kegiatan untuk mengisi form kehadiran.
          </DialogDescription>
        </DialogHeader>
        <div className=''>
          {qrImageUrl ? (
            <div>
              <div className='w-fit mx-auto'>
                <Image width={64} height={64} src={qrImageUrl} alt='QR Code Absensi' className='size-32 mx-auto' />
                <p className='text-xs text-gray-500 text-center max-w-xs truncate'>{attendanceUrl}</p>
              </div>

              <div className='mt-4 flex items-center justify-center'>
                <Button
                  className='bg-blue-500 text-white '
                  type='button'
                  size={'xs'}
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = qrImageUrl;
                    link.download = `QR-Absensi-${slug}.png`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Download QR Code
                </Button>
              </div>
            </div>
          ) : (
            <p className='text-sm text-gray-400'>Generating QR Code...</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
