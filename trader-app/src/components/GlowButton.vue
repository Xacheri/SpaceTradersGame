<template>
  <button class="m-2 mt-4 glowing-btn" :style="colorVar">
    <p :style="textColor">{{ text }}</p>
  </button>
</template>

<script lang="ts">
import { CSSProperties, defineComponent } from "vue";

export default defineComponent({
  name: "GlowButton",
  computed: {
    colorVar(): CSSProperties {
      const color = this.$props.color;
      let colorVar = "";
      switch (color) {
        case "blue":
          colorVar = "--glow-blue";
          break;
        case "green":
          colorVar = "--glow-green";
          break;
        case "red":
          colorVar = "--glow-red";
          break;
        case "yellow":
          colorVar = "--glow-yellow";
          break;
        default:
          colorVar = "--glow-blue";
          break;
      }
      return {
        borderColor: `var(${colorVar})`,
        boxShadow: `0 0 10px ${color}`,
        color: `var(${colorVar})`,
      };
    },
    textColor(): CSSProperties {
      const color = this.$props.color;
      let colorVar = "";
      switch (color) {
        case "blue":
          colorVar = "--glow-blue";
          break;
        case "green":
          colorVar = "--glow-green";
          break;
        case "red":
          colorVar = "--glow-red";
          break;
        case "yellow":
          colorVar = "--glow-yellow";
          break;
        default:
          colorVar = "--glow-blue";
          break;
      }
      return {
        color: `var(${colorVar})`,
      };
    },
  },
  props: {
    text: String,
    color: String,
  },
});
</script>
