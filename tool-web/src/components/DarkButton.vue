<template>
  <div>
    <el-button :icon="icon" circle @click="switchDark" />
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/stores/settings";

const settingStore = useSettingStore();
const isDark = settingStore.isDark;
const icon = computed(() => (isDark ? "el-icon-moon" : "el-icon-sunny"));
const switchDark = () => settingStore.setDark(!isDark);
</script>

<style lang="scss" scoped></style>
