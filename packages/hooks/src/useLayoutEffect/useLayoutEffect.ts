import { isBrowser } from '@pilot/utils';
import { useEffect, useLayoutEffect } from 'react';

export default isBrowser() ? useLayoutEffect : useEffect;
