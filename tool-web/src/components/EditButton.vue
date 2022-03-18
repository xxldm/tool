<template>
  <div>
    <el-button circle @click="enterEdit">
      <div i-mdi-square-edit-outline />
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/stores/settings";

const settingStore = useSettingStore();
const enterEdit = () => (settingStore.edit = true);
</script>

<style lang="scss" scoped></style>
