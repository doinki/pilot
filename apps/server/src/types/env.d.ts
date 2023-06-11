declare namespace NodeJS {
  interface ProcessEnv extends Dict<string> {
    URL: string;
  }
}
