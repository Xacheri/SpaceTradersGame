<template>
  <div class="callsign-selector-container">
    <h1 class="callsign-selector-heading glow-blue">Enter Your Callsign</h1>
    <p class="callsign-selector-subheading glow-blue">
      Your callsign is how other traders will identify you in the galaxy.
    </p>
    <div class="callsign-selector mt-3">
      <div class="callsign-input-container m-1">
        <input
          type="text"
          class="callsign-input"
          v-model="callsign"
          placeholder="Enter Callsign"
          :readonly="callsignLocked"
          :class="callsignLocked ? 'callsign-input-locked' : 'callsign-input'"
        />
      </div>
      <div class="callsign-button-container m-1">
        <GlowButton
          :text="callsignLocked ? 'Unlock Callsign' : 'Lock In Callsign'"
          :color="callsignLocked ? 'red' : 'blue'"
          :onclick="handleButtonClick"
        ></GlowButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GlowButton from "./GlowButton.vue";

export default defineComponent({
  name: "CallsignSelector",
  components: {
    GlowButton,
  },
  data() {
    return {
      callsign: "" as string,
      callsignLocked: false as boolean,
    };
  },
  methods: {
    handleButtonClick() {
      this.callsignLocked = !this.callsignLocked;

      if (this.callsignLocked) {
        this.$emit("callsign-locked", this.callsign);
      } else {
        this.$emit("callsign-unlocked");
      }
    },
  },
});
</script>

<style scoped>
.callsign-selector-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.callsign-input {
  border: 0;
  border-bottom: 2px solid var(--glow-green);
  background-color: transparent;
  color: var(--glow-green);
  outline: 0;
  padding: 7px 0;
  transition: all 0.2s;
}

.callsign-input:focus {
  border-bottom: 2px solid var(--glow-green);
}

.callsign-input:focus::placeholder {
  color: transparent;
}

.callsign-input-locked {
  color: var(--glow-blue) !important;
  border-bottom: 2px solid var(--glow-blue) !important;
}

.callsign-input-locked:focus {
  color: var(--glow-blue) !important;
  border-bottom: 2px solid var(--glow-blue) !important;
}
</style>
