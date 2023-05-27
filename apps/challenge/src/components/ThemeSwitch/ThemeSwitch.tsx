'use client';

import './theme-switch.css';

import { useBoolean, useIsMounted } from '@pilot/hooks';
import { useEffect, useId } from 'react';

const ThemeSwitch = () => {
  const id = useId();
  const isMounted = useIsMounted();
  const { on, toggle, value: isDark } = useBoolean();

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      on();
    }
  }, [on]);

  return (
    <button
      aria-label={isMounted ? (isDark ? 'dark' : 'light') : undefined}
      aria-live="polite"
      className="h-12 w-12 rounded-full text-neutral-600 outline-offset-4 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
      title="Theme Switch"
      type="button"
      onClick={() => {
        window.__setPreferredTheme(isDark ? 'light' : 'dark');
        toggle();
      }}
    >
      <svg aria-hidden="true" strokeLinecap="round" viewBox="0 0 24 24">
        <mask className="moon origin-center" fill="currentColor" id={id}>
          <rect fill="white" height="100%" width="100%" x="0" y="0" />
          <circle
            className="motion-reduce:!transition-none dark:-translate-x-2"
            cx="24"
            cy="10"
            fill="black"
            r="6"
          />
        </mask>
        <circle
          className="sun origin-center motion-reduce:!transition-none dark:scale-[1.75]"
          cx="12"
          cy="12"
          fill="currentColor"
          mask={`url(#${id})`}
          r="6"
        />
        <g
          className="sun-beams origin-center motion-reduce:!transition-none dark:opacity-0"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="12" x2="12" y1="1" y2="3" />
          <line x1="12" x2="12" y1="21" y2="23" />
          <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
          <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
          <line x1="1" x2="3" y1="12" y2="12" />
          <line x1="21" x2="23" y1="12" y2="12" />
          <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
          <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
        </g>
      </svg>
    </button>
  );
};

export default ThemeSwitch;
