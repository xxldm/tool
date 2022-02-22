<template>
  <div>
    <el-button circle @click="enterEdit"><MdiSquareEditOutline /></el-button>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/stores/settings";

const settingStore = useSettingStore();
const enterEdit = () => (settingStore.edit = true);
</script>

<style lang="scss" scoped></style>
