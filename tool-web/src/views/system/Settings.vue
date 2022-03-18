<template>
  <div>
    <el-divider v-if="isElectron" content-position="left">
      {{ t("settings.system") }}
    </el-divider>
    <el-descriptions v-if="isElectron">
      <el-descriptions-item :label="t('settings.openAtLoginLabel')">
        <el-switch v-model="openAtLogin" />
      </el-descriptions-item>
    </el-descriptions>
    <el-divider content-position="left">
      {{ t("settings.shortcut") }}
    </el-divider>
    <el-descriptions :column="6">
      <el-descriptions-item :label="t('settings.showDarkButton')">
        <el-switch v-model="showDarkButton" disabled />
      </el-descriptions-item>
      <el-descriptions-item :label="t('settings.showLocaleButton')">
        <el-switch v-model="showLocaleButton" />
      </el-descriptions-item>
      <el-descriptions-item
        v-if="isElectron"
        :label="t('settings.showTopButton')"
      >
        <el-switch v-model="showTopButton" />
      </el-descriptions-item>
      <el-descriptions-item
        v-if="isElectron"
        :label="t('settings.showFocusLockButton')"
      >
        <el-switch v-model="showFocusLockButton" />
      </el-descriptions-item>
      <el-descriptions-item :label="t('settings.showAppLockButton')">
        <el-switch v-model="showAppLockButton" />
      </el-descriptions-item>
      <el-descriptions-item :label="t('settings.showEditButton')">
        <el-switch v-model="showEditButton" />
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script lang="ts" setup>
import { useSettingStore } from "@/stores/settings";

const { t } = useI18n();
const settingsStore = useSettingStore();

const openAtLogin = computed({
  get: () => settingsStore.isOpenAtLogin,
  set: (data: boolean) => settingsStore.setOpenAtLogin(data),
});

const showDarkButton = computed({
  get: () => settingsStore.showShortcutButtons.dark,
  set: (data: boolean) => settingsStore.setShowShortcutButtons("dark", data),
});

const showLocaleButton = computed({
  get: () => settingsStore.showShortcutButtons.locale,
  set: (data: boolean) => settingsStore.setShowShortcutButtons("locale", data),
});

const showTopButton = computed({
  get: () => settingsStore.showShortcutButtons.top,
  set: (data: boolean) => settingsStore.setShowShortcutButtons("top", data),
});

const showFocusLockButton = computed({
  get: () => settingsStore.showShortcutButtons.focusLock,
  set: (data: boolean) =>
    settingsStore.setShowShortcutButtons("focusLock", data),
});

const showAppLockButton = computed({
  get: () => settingsStore.showShortcutButtons.appLock,
  set: (data: boolean) => settingsStore.setShowShortcutButtons("appLock", data),
});

const showEditButton = computed({
  get: () => settingsStore.showShortcutButtons.edit,
  set: (data: boolean) => settingsStore.setShowShortcutButtons("edit", data),
});

const isElectron = computed(() => settingsStore.isElectron);
</script>

<style lang="scss" scoped></style>
