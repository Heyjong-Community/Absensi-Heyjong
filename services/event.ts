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

export async function getEventById(id: string) {
  return prisma.event.findUnique({
    where: {
      id,
    },
  });
}

export async function updateEventById(
  id: string,
  nama: string,
  slug: string,
  tanggalPelaksanaan: Date,
  tanggalSelesai: Date,
  lokasi?: string,
  deskripsi?: string,
) {
  return prisma.event.update({
    where: {
      id,
    },
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
