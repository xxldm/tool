<template>
  <div>
    <el-button
      v-if="settingStore.showShortcutButtons.dark"
      type="primary"
      @click="settingStore.setDark(!settingStore.isDark)"
      >暗黑模式{{ settingStore.isDark }}</el-button
    >
    <el-button
      type="primary"
      @click="
        settingStore.setShowShortcutButtons(
          'dark',
          !settingStore.showShortcutButtons.dark
        )
      "
      >显示暗黑按钮（{{ settingStore.showShortcutButtons.dark }}）</el-button
    >
    <el-button type="primary" @click="settingStore.$reset()">重置</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/stores/settings";
const settingStore = useSettingStore();
</script>

<style scoped></style>
