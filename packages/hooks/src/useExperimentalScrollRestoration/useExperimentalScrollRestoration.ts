import { isSafari } from '@pilot/utils';
import { useEffect } from 'react';

const useExperimentalScrollRestoration = () => {
  useEffect(() => {
    if (isSafari()) {
      window.history.scrollRestoration = 'auto';
    }
  }, []);
};

export default useExperimentalScrollRestoration;
