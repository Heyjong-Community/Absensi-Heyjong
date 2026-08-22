import { prisma } from '@/lib/prisma';

export async function listMemberHeyjong() {
  return prisma.member.findMany({
    orderBy: {
      status: 'desc',
    },
  });
}

export async function addMemberHeyjong(
  namaLengkap: string,
  panggilan: string,
  gender: 'LakiLaki' | 'Perempuan',
  status: 'Manajemen' | 'Pengurus' | 'Staff' | 'Member' | 'Volunteer',
) {
  return prisma.member.create({
    data: {
      namaLengkap,
      panggilan,
      gender,
      status,
    },
  });
}
