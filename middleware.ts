import { NextResponse } from 'next/server';

export async function middleware() {
  const res = NextResponse.next();
  console.log("->>> test")
  return res;
}

export const config = {
  matcher: ['/auth/:path*'],
};
