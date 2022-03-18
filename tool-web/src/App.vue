<template>
  <el-config-provider :locale="elementSettingsStore.locale">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </el-config-provider>
  <div
    v-show="settingsStore.isAppLock"
    style="z-index: 8000"
    class="absolute inset-0 bg-gray-600 bg-opacity-30"
  ></div>
  <check-for-updates-dialog />
</template>

<script lang="ts" setup>
import { useElementSettingsStore } from "@/stores/elementSettings";
import { useSettingStore } from "@/stores/settings";
import { isElectron, elApp } from "@/utils/ElectronUtil";

onMounted(() => {
  // 是应用，检查更新
  if (isElectron) {
    console.log(elApp.checkUpdate());
  }
});
const elementSettingsStore = useElementSettingsStore();
const settingsStore = useSettingStore();
</script>
