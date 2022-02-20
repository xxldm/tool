<template>
  <div>
    <el-tooltip
      :content="
        t('settings.alwaysOnTopTooltip', {
          yn: isAlwaysOnTop ? t('yes') : t('no'),
        })
      "
      placement="bottom"
    >
      <el-button
        icon="el-icon-top"
        :class="btnClass"
        circle
        @click="switchAlwaysOnTop"
      />
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/stores/settings";

const { t } = useI18n();
const settingStore = useSettingStore();
const isAlwaysOnTop = settingStore.isAlwaysOnTop;
const switchAlwaysOnTop = () => settingStore.setAlwaysOnTop(!isAlwaysOnTop);
const btnClass = computed(() => (isAlwaysOnTop ? "enable" : "disable"));
</script>

<style lang="scss" scoped>
.enable :deep(i) {
  @apply text-green-400;
}
.disable :deep(i) {
  @apply text-gray-600;
}
</style>
