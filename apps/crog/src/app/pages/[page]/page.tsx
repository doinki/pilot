import PageDesktop from './Page.desktop';
import PageMobile from './Page.mobile';

export const generateStaticParams = () => {
  return [];
};

export default process.env.TARGET === 'mobile' ? PageMobile : PageDesktop;
