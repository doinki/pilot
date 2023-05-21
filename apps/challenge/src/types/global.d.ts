declare global {
  interface Window {
    __setPreferredTheme: (theme: 'dark' | 'light') => void;
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    URL: string;
  }
}

export {};
