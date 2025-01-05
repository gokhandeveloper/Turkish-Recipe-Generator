interface ImportMetaEnv {
    readonly VITE_OPEN_AI: string;
    readonly VITE_OPEN_AI_MODEL:string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}