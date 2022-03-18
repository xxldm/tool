<template>
  <div>
    <el-tooltip placement="bottom">
      <template #content>
        {{
          t("settings.alwaysOnTopTooltip", {
            yn: settingStore.isAlwaysOnTop ? t("yes") : t("no"),
          })
        }}
      </template>
      <el-button :class="btnClass" circle @click="switchAlwaysOnTop">
        <div v-if="settingStore.isAlwaysOnTop" i-ri-pushpin-fill />
        <div v-else i-ri-pushpin-line />
      </el-button>
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/stores/settings";

const { t } = useI18n();
const settingStore = useSettingStore();
const switchAlwaysOnTop = () =>
  settingStore.setAlwaysOnTop(!settingStore.isAlwaysOnTop);
</script>

<style lang="scss"></style>
