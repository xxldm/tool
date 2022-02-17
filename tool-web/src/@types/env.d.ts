/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_ENV: string; // 环境
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
