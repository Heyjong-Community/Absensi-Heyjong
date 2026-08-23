import { prisma } from '@/lib/prisma';
import { StatusAttendee } from '@/types/absen';

export async function getAllAttendee() {
  return prisma.attendance.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      event: {
        select: {
          nama: true,
        },
      },
    },
  });
}

export async function addAttendance(eventId: string, nama: string, status: StatusAttendee) {
  return prisma.attendance.create({
    data: {
      eventId: eventId,
      nama: nama,
      status: status,
    },
  });
}
