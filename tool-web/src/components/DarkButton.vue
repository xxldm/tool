<template>
  <div>
    <el-button circle @click="switchDark">
      <div v-if="settingStore.isDark" i-ep-sunny />
      <div v-else i-ep-moon />
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/stores/settings";

const settingStore = useSettingStore();
const switchDark = () => settingStore.setDark(!settingStore.isDark);
</script>

<style lang="scss" scoped></style>
