import type { Metadata } from 'next';

import LayoutDesktop from './Layout.desktop';
import LayoutMobile from './Layout.mobile';

export const metadata: Metadata = {
  description: 'Crog',
  title: 'Crog',
};

export default process.env.TARGET === 'mobile' ? LayoutMobile : LayoutDesktop;
