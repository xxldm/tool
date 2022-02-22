<template>
  <div>
    <el-dropdown @command="changeLocale">
      <el-button circle><RiTranslate /></el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :disabled="disabled('zh-cn')" command="zh-cn">
            中文
          </el-dropdown-item>
          <el-dropdown-item :disabled="disabled('en')" command="en">
            English (by Google Translate)
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/stores/settings";

const settingStore = useSettingStore();
const changeLocale = (command: string) => {
  settingStore.setLocal(command);
};

const disabled = (locale: string) => {
  return settingStore.locale === locale;
};
</script>

<style lang="scss" scoped></style>
