declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      TOKEN_AUTH: string;
    }
  }
}

export {};
