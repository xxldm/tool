<template>
  <div>
    <el-button
      :icon="icon"
      class="relative"
      :style="{ 'z-index': isAppLock ? '9999' : 'auto' }"
      circle
      @click="switchAppLock"
    />
    <div
      v-show="isAppLock"
      style="z-index: 8000"
      class="absolute inset-0 bg-gray-600 bg-opacity-30"
    ></div>
  </div>
</template>

<script lang="ts" setup>
let isAppLock = $ref(false);
const icon = computed(() => (isAppLock ? "el-icon-lock" : "el-icon-unlock"));
const switchAppLock = () => (isAppLock = !isAppLock);
</script>

<style lang="scss" scoped></style>
