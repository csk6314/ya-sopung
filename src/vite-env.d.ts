/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_API_ENCODING_KEY: string;
  readonly VITE_API_DECODING_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
