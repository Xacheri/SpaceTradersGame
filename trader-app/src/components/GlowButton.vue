<template>
  <button class="m-2 mt-4 fade-inflate-medium glowing-btn" :style="colorVar">
    <p>{{ text }}</p>
  </button>
</template>

<script lang="ts">
export default {
  name: "GlowButton",
  computed: {
    colorVar() {
      const color =
        this.color === "blue" ? "var(--glow-blue)" : "var(--glow-green)";

      return {
        borderColor: color,
        boxShadow: `0 0 10px ${color}`,
        color: color,
      };
    },
  },
  props: {
    text: String,
    color: String,
  },
};
</script>
