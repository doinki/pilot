import Negotiator from 'negotiator';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|images|circle.svg|icon.svg|robots.txt).*)',
  ],
};

const locales = ['ko', 'en'];

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const isMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  if (isMissingLocale) {
    const locale =
      new Negotiator({
        headers: {
          'accept-language':
            request.headers.get('Accept-Language') ?? undefined,
        },
      }).language(locales) ?? 'ko';

    return NextResponse.redirect(
      new URL(
        pathname === '/' ? `/${locale}` : `/${locale}${pathname}`,
        request.url
      )
    );
  }

  const isLocaleRoot = locales.some((locale) => `/${locale}` === pathname);
  if (isLocaleRoot) {
    return NextResponse.rewrite(new URL(`${pathname}/pages/1`, request.url));
  }
};
