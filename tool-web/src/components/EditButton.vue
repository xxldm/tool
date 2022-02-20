<template>
  <div>
    <el-button icon="el-icon-edit" circle @click="enterEdit" />
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/stores/settings";

const settingStore = useSettingStore();
const enterEdit = () => (settingStore.edit = true);
</script>

<style lang="scss" scoped></style>
