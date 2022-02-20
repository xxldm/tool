<template>
  <div>
    <el-tooltip
      :content="
        t('settings.focusLockTooltip', { yn: isFocusable ? t('yes') : t('no') })
      "
      placement="bottom"
    >
      <el-button :icon="icon" circle @click="switchFocusable" />
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/stores/settings";

const { t } = useI18n();
const settingStore = useSettingStore();
const isFocusable = settingStore.isFocusable;
const icon = computed(() =>
  isFocusable ? "el-icon-warning" : "el-icon-warning-outline"
);
const switchFocusable = () => settingStore.setFocusable(!isFocusable);
</script>

<style lang="scss" scoped></style>
