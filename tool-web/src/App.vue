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
</template>

<script lang="ts" setup>
import { useElementSettingsStore } from "@/stores/elementSettings";
import { useSettingStore } from "@/stores/settings";

const elementSettingsStore = useElementSettingsStore();
const settingsStore = useSettingStore();
</script>
