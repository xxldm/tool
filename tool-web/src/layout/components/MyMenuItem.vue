<template>
  <template v-for="route in props.routes" :key="route.name">
    <template v-if="route.meta === undefined || !route.meta.hidden">
      <el-sub-menu v-if="getLength(route.children) > 1" :index="route.path">
        <template #title>{{ t(`menu.${route.name}`) }}</template>
        <my-menu-item :routes="route.children" />
      </el-sub-menu>
      <el-menu-item
        v-else-if="getLength(route.children) === 1"
        :index="route.children[0].path"
      >
        {{
          t(`menu.${route.children[0].name}`) +
          `(${route.children[0].name}：${route.children[0].path})`
        }}
      </el-menu-item>
      <el-menu-item v-else :index="route.path">
        {{ t(`menu.${route.name}`) + `(${route.name}：${route.path})` }}
      </el-menu-item>
    </template>
  </template>
</template>

<script lang="ts" setup>
const props = defineProps<{
  routes: [];
}>();
const { t } = useI18n();
const getLength = (array: [] | undefined) =>
  array === undefined ? 0 : array.length;
</script>

<style scoped></style>
