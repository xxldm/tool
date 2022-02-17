import { UserConfigExport } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import { config } from "dotenv-flow";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

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
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        dts: "@types/auto-imports.d.ts",
        imports: [
          "vue",
          "vue-router",
          "vue-i18n",
          "pinia",
          {
            axios: [
              // default imports
              ["default", "axios"], // import { default as axios } from 'axios',
            ],
            "vue/macros": [
              ["$", "$"], // import { $ref as $ref } from 'vue/macros',
              ["$$", "$$"],
              ["$ref", "$ref"],
              ["$shallowRef", "$shallowRef"],
              ["$computed", "$computed"],
              ["$customRef", "$customRef"],
              ["$toRef", "$toRef"],
            ],
          },
        ],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        dts: "@types/components.d.ts",
        resolvers: [ElementPlusResolver()],
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
        "@": resolve("src"),
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
