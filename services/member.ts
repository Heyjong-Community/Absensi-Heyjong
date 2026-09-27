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

export async function getMemberById(id: string) {
  return prisma.member.findUnique({
    where: {
      id,
    },
  });
}

export async function updateMemberHeyjong(
  id: string,
  namaLengkap: string,
  panggilan: string,
  gender: 'LakiLaki' | 'Perempuan',
  status: 'Manajemen' | 'Pengurus' | 'Staff' | 'Member' | 'Volunteer',
) {
  return prisma.member.update({
    where: {
      id,
    },
    data: {
      namaLengkap,
      panggilan,
      gender,
      status,
    },
  });
}
