import { prisma } from '@/lib/prisma';
import type { RoleUser, StatusUser } from '@/prisma/generated/prisma/client';
import { genSaltSync, hashSync } from 'bcrypt-ts';

export async function createNewAccessAccount(
  nama: string,
  username: string,
  password: string,
  role: RoleUser,
  status: StatusUser,
) {
  const salt = genSaltSync(10);
  const hashPassword = hashSync(password, salt);
  return await prisma.user.create({
    data: {
      nama,
      username,
      password: hashPassword,
      role,
      status,
    },
  });
}

export async function getListAccessAccount() {
  return prisma.user.findMany({
    select: {
      id: true,
      nama: true,
      username: true,
      role: true,
      status: true,
    },
  });
}
