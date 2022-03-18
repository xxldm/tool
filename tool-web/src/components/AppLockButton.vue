<template>
  <div>
    <el-button
      class="relative"
      :style="{ 'z-index': settingsStore.isAppLock ? '9999' : 'auto' }"
      circle
      @click="settingsStore.appLock = !settingsStore.isAppLock"
    >
      <div v-if="settingsStore.isAppLock" i-mdi-lock-open-variant-outline />
      <div v-else i-mdi-lock-outline />
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/stores/settings";

const settingsStore = useSettingStore();
</script>

<style lang="scss" scoped></style>
