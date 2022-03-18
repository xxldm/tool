<template>
  <div>
    <el-button
      class="relative"
      :style="{ 'z-index': settingsStore.isAppLock ? '9999' : 'auto' }"
      circle
      @click="switchAppLock"
    >
      <div v-if="settingsStore.isAppLock" i-mdi-lock-open-variant-outline />
      <div v-else i-mdi-lock-outline />
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/stores/settings";

const settingsStore = useSettingStore();
const switchAppLock = () => settingsStore.setAppLock(!settingsStore.isAppLock);
</script>

<style lang="scss" scoped></style>
