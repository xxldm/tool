<template>
  <div>
    <el-button circle @click="switchDark">
      <EpSunny v-if="settingStore.isDark" />
      <EpMoon v-else />
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/stores/settings";

const settingStore = useSettingStore();
const switchDark = () => settingStore.setDark(!settingStore.isDark);
</script>

<style lang="scss" scoped></style>
