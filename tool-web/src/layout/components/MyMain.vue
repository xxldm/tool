<template>
  <router-view v-slot="{ Component, route }">
    <transition
      :enter-active-class="route.meta.animationClass.animationInClass"
      :leave-active-class="route.meta.animationClass.animationOutClass"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts" setup></script>

<style scoped></style>
