import AttendanceForm from '@/components/AttendanceForm';
import { getEventBySlug } from '@/services/event';
import { listMemberHeyjong } from '../../../../services/member';
import Link from 'next/link';
import Image from 'next/image';

export default async function AttendanceEventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  const members = await listMemberHeyjong();

  return (
    <div className='min-h-screen w-full flex justify-between flex-col p-4 '>
      <section className='flex items-center justify-center'>
        <Image src={`/images/logo-color.png`} width={500} height={500} alt='logo' className='size-28' />
      </section>
      <section className='w-full md:w-3/4 lg:w-1/2 mx-auto'>
        <AttendanceForm event={event} members={members} />
      </section>
      <section>
        <Link href={`#`} className='flex items-center justify-center'>
          <p>&copy; Heyjong Community 2026.</p>
        </Link>
      </section>
    </div>
  );
}
