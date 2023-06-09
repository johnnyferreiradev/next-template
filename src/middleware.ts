import createMiddleware from 'next-intl/middleware';

import { DEFAULT_LOCALE } from './settings';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'pt'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: DEFAULT_LOCALE,
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
