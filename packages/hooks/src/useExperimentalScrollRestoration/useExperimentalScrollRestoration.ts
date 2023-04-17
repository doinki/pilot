import { useEffect } from 'react';

const useExperimentalScrollRestoration = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isSafari =
      userAgent.includes('safari') && !userAgent.includes('chrom');

    if (isSafari) {
      window.history.scrollRestoration = 'auto';
    }
  }, []);
};

export default useExperimentalScrollRestoration;
