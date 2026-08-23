import { prisma } from '@/lib/prisma';

export async function listEvent() {
  return prisma.event.findMany({
    orderBy: {
      tanggalPelaksanaan: 'desc',
    },
  });
}

export async function getEventBySlug(slug: string) {
  return prisma.event.findFirst({
    where: {
      slug,
    },
  });
}

export async function addNewEvent(
  nama: string,
  slug: string,
  tanggalPelaksanaan: Date,
  tanggalSelesai: Date,
  lokasi?: string,
  deskripsi?: string,
) {
  return prisma.event.create({
    data: {
      nama,
      slug,
      tanggalPelaksanaan,
      tanggalSelesai,
      lokasi,
      deskripsi,
    },
  });
}
