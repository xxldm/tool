<template>
  <el-popconfirm
    :title="title"
    icon="el-icon-warning"
    icon-color="red"
    :confirm-button-text="t('confirm')"
    :cancel-button-text="t('cancel')"
    confirm-button-type="text"
    cancel-button-type="primary"
    @confirm="$emit('confirm')"
    @cancel="$emit('cancel')"
  >
    <template #reference>
      <el-button :type="type" :size="size">
        <slot />
      </el-button>
    </template>
  </el-popconfirm>
</template>
<script lang="ts">
export default {
  name: "ConfirmButton",
  props: {
    title: {
      default: "确定？",
      type: String,
    },
    type: {
      type: String,
      default: "default",
      validator: (val: string) => {
        return [
          "default",
          "primary",
          "success",
          "warning",
          "info",
          "danger",
          "text",
        ].includes(val);
      },
    },
    size: {
      type: String,
      default: "",
      validator: (val: string) =>
        ["", "large", "medium", "small", "mini"].includes(val),
    },
  },
  emits: ["confirm", "cancel"],
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
};
</script>
