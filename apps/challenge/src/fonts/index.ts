import { Noto_Sans_KR } from 'next/font/google';

export const notoSansKR = Noto_Sans_KR({
  adjustFontFallback: false,
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
  weight: ['400', '500', '700'],
});
