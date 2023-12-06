import { NextResponse } from 'next/server';
import { removeBeforeWord } from './helpers/string';

export function middleware(request: Request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
