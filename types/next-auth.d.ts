// types/next-auth.d.ts
import { RoleUser } from '@prisma/client';
import { DefaultSession } from 'next-auth';
import { JWT as DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface User {
    username?: string;
    role?: RoleUser;
  }

  interface Session {
    user: {
      username?: string;
      role?: RoleUser;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    username?: string;
    role?: RoleUser;
  }
}
