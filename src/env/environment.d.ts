declare global {
    namespace NodeJS {
      interface ProcessEnv {
        CMC_API_KEY: string | undefined;
      }
    }
}

export {}