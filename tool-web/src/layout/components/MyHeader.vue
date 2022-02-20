<template>
  <div class="sticky top-0">
    <div class="flex space-x-2">
      <my-menu class="flex-grow" />

      <!--按钮-->
      <edit-button
        v-show="route.meta.showEditButton && showEditButton"
        class="flex-none m-auto"
      />
      <dark-button v-show="showDarkButton" class="flex-none m-auto" />
      <locale-button v-show="showLocaleButton" class="flex-none m-auto" />
      <focus-lock-button
        v-if="isElectron"
        v-show="showFocusLockButton"
        class="flex-none m-auto"
      />
      <always-on-top-button
        v-if="isElectron"
        v-show="showTopButton"
        class="flex-none m-auto"
      />
      <app-lock-button v-show="showAppLockButton" class="flex-none m-auto" />

      <el-dropdown class="flex-none m-auto">
        <el-avatar :src="avatar" icon="el-icon-user-solid" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-user-solid">
              {{ name }}
            </el-dropdown-item>
            <el-dropdown-item icon="el-icon-user" @click="logout">
              {{ t("header.signOut") }}
            </el-dropdown-item>
            <el-dropdown-item
              icon="el-icon-s-tools"
              divided
              @click="jumpToSettings"
            >
              {{ t("header.settings") }}
            </el-dropdown-item>
            <el-dropdown-item
              divided
              icon="el-icon-switch-button"
              @click="closeApp"
            >
              {{ t("header.closeApp") }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { elApp, isElectron } from "@/utils/SettingUtil";
import { useSettingStore } from "@/stores/settings";

const settingStore = useSettingStore();
const router = useRouter();
const route = useRoute();
const { t } = useI18n();

const logout = () => {};
const jumpToSettings = () => {
  router.push("/settings");
};
const closeApp = () => {};

// const name = computed(() => store.getters.name);
const name = $ref("名字");
// const avatar = computed(() => store.getters.avatar);
const avatar = $ref("");
// const locale = settingStore.locale;
const showDarkButton = settingStore.showShortcutButtons.dark;
const showLocaleButton = settingStore.showShortcutButtons.locale;
const showFocusLockButton = settingStore.showShortcutButtons.focus;
const showTopButton = settingStore.showShortcutButtons.top;
const showAppLockButton = settingStore.showShortcutButtons.appLock;
const showEditButton = settingStore.showShortcutButtons.edit;
</script>

<style scoped></style>
