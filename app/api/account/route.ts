import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { genSaltSync, hashSync } from 'bcrypt-ts';

export async function GET() {
  const dataAccount = await prisma.user.findMany();
  return NextResponse.json({
    code: 'SUCCESS',
    message: 'Successfully get all account',
    data: dataAccount,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const salt = genSaltSync(10);
  const hashPassword = hashSync(body.password, salt);
  const addAccount = await prisma.user.create({
    data: {
      nama: body.nama,
      role: body.role,
      username: body.username,
      password: hashPassword,
    },
  });
  return NextResponse.json({
    code: 'SUCCESS',
    message: 'Successfully add account',
    data: {
      name: addAccount.nama,
      username: addAccount.username,
      role: addAccount.role,
      status: addAccount.status,
    },
  });
}
