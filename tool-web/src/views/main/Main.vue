<template>
  <div text-red>
    <div i-mdi-lock-open-variant-outline></div>
    <anime-number :num="num"></anime-number>
    <el-button @click="num++">+1</el-button>
  </div>
</template>

<script lang="ts" setup>
const num = $ref(0);
</script>

<style scoped></style>
