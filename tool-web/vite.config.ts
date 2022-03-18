import type { UserConfigExport } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import Icons from "unplugin-icons/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Unocss from "unocss/vite";
import presetAttributify from "@unocss/preset-attributify";
import presetWind from "@unocss/preset-wind";
import presetIcons from "@unocss/preset-icons";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }): UserConfigExport => {
  console.log(mode);
  return {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element-variables.scss" as *;`,
        },
      },
    },
    plugins: [
      vue({
        reactivityTransform: true,
      }),
      vueI18n({
        defaultSFCLang: "yml",
        include: resolve("src/locales/**"),
      }),
      AutoImport({
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
          globalsPropValue: "readonly", // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        dirs: ["components", "layout/components"],
        dts: "@types/components.d.ts",
        resolvers: [ElementPlusResolver({ importStyle: "sass" })],
      }),
      Unocss({
        presets: [presetAttributify(), presetIcons(), presetWind()],
      }),
      Icons({
        autoInstall: true,
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
      },
    },
    build: {
      outDir: resolve("dist"),
      emptyOutDir: true,
      sourcemap: false,
    },
    optimizeDeps: {
      include: ["vue", "pinia", "axios"],
    },
  };
};
