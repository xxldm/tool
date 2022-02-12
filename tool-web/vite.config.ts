import { UserConfigExport } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import { config } from "dotenv-flow";

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }): UserConfigExport => {
  config({ path: resolve(), node_env: mode });
  return {
    plugins: [
      vue({
        reactivityTransform: true,
      }),
      vueI18n({
        runtimeOnly: false,
        defaultSFCLang: "yml",
        include: resolve("src/locales/**"),
      }),
    ],
    root: resolve("src"),
    base: "./",
    server: {
      host: "::",
      port: 80,
      strictPort: true,
    },
    resolve: {
      alias: {
        "@api": resolve("src/api"),
        "@assets": resolve("src/assets"),
        "@components": resolve("src/components"),
        "@entity": resolve("src/entity"),
        "@layout": resolve("src/layout"),
        "@style": resolve("src/style"),
        "@util": resolve("src/util"),
        "@view": resolve("src/view"),
        "@src": resolve("src"),
        "vue-i18n": `vue-i18n/dist/vue-i18n.cjs.prod.js`,
      },
    },
    build: {
      outDir: resolve("dist"),
      emptyOutDir: true,
      sourcemap: false,
    },
  };
};
