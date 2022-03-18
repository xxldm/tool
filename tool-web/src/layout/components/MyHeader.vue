<template>
  <div class="top-0">
    <div class="flex space-x-2">
      <my-menu class="flex-grow" />

      <!--按钮-->
      <edit-button
        v-show="route.meta.showEditButton && showShortcutButtons.edit"
        class="flex-none m-auto"
      />
      <dark-button v-show="showShortcutButtons.dark" class="flex-none m-auto" />
      <locale-button
        v-show="showShortcutButtons.locale"
        class="flex-none m-auto"
      />
      <focus-lock-button
        v-if="isElectron"
        v-show="showShortcutButtons.focus"
        class="flex-none m-auto"
      />
      <always-on-top-button
        v-if="isElectron"
        v-show="showShortcutButtons.top"
        class="flex-none m-auto"
      />
      <app-lock-button
        v-show="showShortcutButtons.appLock"
        class="flex-none m-auto"
      />

      <el-dropdown class="flex-none m-auto">
        <el-avatar :src="avatar" fit="contain">
          <el-icon :size="40">
            <FlatUiYinyang />
          </el-icon>
        </el-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-if="isServer" :icon="GridiconsUser">
              {{ name }}
            </el-dropdown-item>
            <el-dropdown-item
              :icon="SettingTwo"
              :divided="isServer"
              @click="jumpToSettings"
            >
              {{ t("header.settings") }}
            </el-dropdown-item>
            <el-dropdown-item v-if="isServer" :icon="MdiLogout" @click="logout">
              {{ t("header.signOut") }}
            </el-dropdown-item>
            <el-dropdown-item
              v-if="isElectron"
              divided
              :icon="DashiconsUpdate"
              @click="checkForUpdates"
            >
              {{ t("header.checkForUpdates") }}
            </el-dropdown-item>
            <el-dropdown-item
              v-if="isElectron"
              divided
              :icon="PowerStandby"
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
import { useSettingStore } from "@/stores/settings";
import GridiconsUser from "~icons/gridicons/user";
import MdiLogout from "~icons/mdi/logout";
import SettingTwo from "~icons/icon-park-outline/setting-two";
import PowerStandby from "~icons/oi/power-standby";
import DashiconsUpdate from "~icons/dashicons/update";

const settingStore = useSettingStore();
const router = useRouter();
const route = useRoute();
const { t } = useI18n();

const logout = () => {};
const jumpToSettings = () => {
  router.push("/settings");
};
const closeApp = () => {};
const checkForUpdates = () => {
  settingStore.manualCheckForUpdates();
};

// const name = computed(() => store.getters.name);
const name = $ref("名字");
// const avatar = computed(() => store.getters.avatar);
const avatar = $ref("");
// const locale = settingStore.locale;
const showShortcutButtons = settingStore.showShortcutButtons;
const isElectron = computed(() => settingStore.isElectron);
const isServer = computed(() => settingStore.isServer);
</script>

<style scoped></style>
