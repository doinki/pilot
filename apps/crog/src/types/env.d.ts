declare namespace NodeJS {
  interface ProcessEnv extends Dict<string> {
    API_URL: string;
  }
}
