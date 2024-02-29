declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_URL: string;
      DATABASE_NAME: string;
      USERNAME: string;
      PASSWORD: string;
    }
  }
}

export {}
