import type { RouteRecordRaw } from "vue-router";
import { useSettingStore } from "@/stores/settings";

export const useUserStore = defineStore("user", {
  state: () => ({
    routes: <RouteRecordRaw[]>[],
  }),
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingStore, import.meta.hot));
}
