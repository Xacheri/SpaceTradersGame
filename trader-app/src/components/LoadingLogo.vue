<script setup lang="ts">
import logo from "@/assets/logo.png";
</script>

<template>
  <div class="loading-logo spin-clockwise-infinite" :class="{ active: active }">
    <img :src="logo" alt="Logo" class="logo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    active: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
});
</script>

<style scoped>
.loading-logo {
  position: relative;
  width: 100px;
  height: 100px;
}

.logo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.active {
  display: block;
}
</style>
