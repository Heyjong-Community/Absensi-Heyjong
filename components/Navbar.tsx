import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between p-4'>
      <div className='flex items-center gap-2'>
        <Image src={`/images/logo-color.png`} width={300} height={300} alt='logo' className='size-14' loading='eager' />
        <h1 className='text-base font-semibold leading-5 text-black'>
          Heyjong <br /> Community
        </h1>
      </div>
      <div className='flex items-center gap-2'></div>
      <div className=''>
        <Link href={`/login`}>
          <Button size={'sm'} className='bg-[#DF334D] text-white font-medium text-sm'>
            Sign In
          </Button>
        </Link>
      </div>
    </nav>
  );
}
