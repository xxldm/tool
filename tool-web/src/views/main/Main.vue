<template>
  <div>
    <el-button
      v-if="settingStore.showShortcutButtons.dark"
      type="primary"
      @click="settingStore.setDark(!settingStore.isDark)"
      >暗黑模式{{ settingStore.isDark }}</el-button
    >
    <el-button
      @click="
        settingStore.setShowShortcutButtons(
          'dark',
          !settingStore.showShortcutButtons.dark
        )
      "
      >显示暗黑按钮（{{ settingStore.showShortcutButtons.dark }}）</el-button
    >
    <el-button @click="settingStore.$reset()">重置</el-button>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Select date and time"
    >
    </el-date-picker>
    <el-button @click="message">消息</el-button>
    <el-calendar v-model="value" />
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/stores/settings";
const settingStore = useSettingStore();
const value1 = $ref();
const value = $ref();
const message = () => {
  ElMessage.success("this is a message.");
};
</script>

<style scoped></style>
