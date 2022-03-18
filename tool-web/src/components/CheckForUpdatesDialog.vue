<template>
  <el-dialog v-model="updateStore.showDialog" :title="t('update.title')" center>
    <el-result
      v-loading="updateStore.isLoading"
      icon="success"
      title="已是最新版本！"
    >
      <template #extra>
        <el-button type="primary" @click="updateStore.showDialog = false"
          >确定</el-button
        >
      </template>
    </el-result>
    <el-descriptions
      :column="1"
      :title="`检测到新版本：${updateStore.updateInfo.version}`"
      direction="vertical"
    >
      <el-descriptions-item label="是否更新？">
        <el-button type="primary">更新</el-button>
        <el-button type="primary" @click="updateStore.showDialog = false"
          >下次一定</el-button
        >
        <el-button type="primary">跳过该版本</el-button>
      </el-descriptions-item>
      <el-descriptions-item label="更新内容：">
        <div
          class="markdown-body"
          v-html="updateStore.updateInfo.releaseNotes"
        />
      </el-descriptions-item>
    </el-descriptions>
  </el-dialog>
</template>

<script lang="ts" setup>
import { useUpdateStore } from "@/stores/update";

const updateStore = useUpdateStore();
const { t } = useI18n();
</script>

<style scoped></style>
