<template>
  <el-container>
    <el-header>
      <my-header />
    </el-header>
    <el-scrollbar>
      <el-main>
        <my-main />
      </el-main>
    </el-scrollbar>
    <el-backtop target=".el-scrollbar__wrap"></el-backtop>
  </el-container>
</template>

<script lang="ts" setup></script>

<style scoped></style>
