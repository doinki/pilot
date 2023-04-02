import { isBrowser } from '@pilot/utils';
import React from 'react';

export default isBrowser() ? React.useLayoutEffect : React.useEffect;
