<template>
  <el-menu mode="horizontal" router :default-active="defaultActive">
    <my-menu-item :routes="routes" />
  </el-menu>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const route = useRoute();
const routes = computed(() => userStore.routes);
const defaultActive = computed(() => route.path);
</script>

<style scoped></style>
