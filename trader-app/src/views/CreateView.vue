<script lang="ts" setup>
import FactionSelector from "@/components/FactionSelector.vue";
</script>

<template>
  <div>
    <h1 class="mb-4 glow-green">Create A Space Trader</h1>
    <h2 class="mb-4 glow-blue">Select your Faction:</h2>

    <FactionSelector />
    <button class="m-2 mt-4 fade-inflate-medium glowing-btn">
      <p>Generate</p>
    </button>
    <div v-if="factionToken != ''">CALLSIGN SELECTOR</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CreateView",
  data() {
    return {
      token: "",
      factionToken: "",
    };
  },
  methods: {
    generateToken() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          symbol: "Callsign",
          faction: "Faction",
        }),
      };
      fetch("https://api.spacetraders.io/v2/register", options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style scoped>
h1 {
  color: var(--glow-green);
}
.glowing-btn {
  border-color: var(--glow-green);
  box-shadow: 0 0 10px var(--glow-green);
  color: var(--glow-green);
}

.glow-green {
  color: var(--glow-green);
  text-shadow: 0 0 10px var(--glow-green);
}

.glow-blue {
  color: var(--glow-blue);
  text-shadow: 0 0 10px var(--glow-blue);
}
</style>
