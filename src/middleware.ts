import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
  locales: ['en', 'ar', 'it'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export default function proxy(request: any) {
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(ar|en|it)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};