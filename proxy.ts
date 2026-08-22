import { NextResponse } from 'next/server';
import { auth } from '@/app/auth';

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  //   const userRole = (req.auth?.user as any)?.role;
  const userRole = req.auth?.user?.role;
  const { pathname } = req.nextUrl;

  // Daftar route yang berada di dalam folder (admin)
  const adminRoutes = ['/dashboard', '/absensi', '/account', '/activity', '/member'];

  const isAccessingAdminArea = adminRoutes.some((route) => pathname.startsWith(route));
  const isAuthRoute = pathname === '/login';

  // 1. Jika belum login dan mencoba akses area admin -> Redirect ke /login
  if (isAccessingAdminArea && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  // 2. Jika sudah login dan mencoba akses /login -> Redirect ke /dashboard
  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
  }

  // 3. Otorisasi Spesifik Per-Route (Contoh: Manajemen Account/User)
  if (pathname.startsWith('/account') && !['SuperAdmin', 'Admin'].includes(userRole as string)) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/dashboard/:path*', '/absensi/:path*', '/account/:path*', '/activity/:path*', '/member/:path*', '/login'],
};
