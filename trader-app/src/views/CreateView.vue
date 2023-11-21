<script lang="ts" setup>
import Faction from "@/interfaces/Faction";
</script>

<template>
  <div>
    <h1 class="mb-4 glow-green">Create A Space Trader</h1>
    <Transition>
      <component
        :is="components[0].name"
        v-bind="components[0].props"
        @faction-locked="(f: Faction) => (trader.faction = f)"
        @faction-unlocked="() => (trader.faction = {} as Faction)"
      ></component>
    </Transition>
    <GlowButton
      v-if="trader.faction !"
      :color="'blue'"
      text="Next"
      :onclick="log"
    ></GlowButton>
    <div v-if="factionToken != ''">CALLSIGN SELECTOR</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, CSSProperties } from "vue";
import FactionSelector from "@/components/FactionSelector.vue";
import GlowButton from "@/components/GlowButton.vue";
import Trader from "@/classes/Trader";
import { toRaw } from "vue"; // turn proxy object into raw object

export default defineComponent({
  name: "CreateView",
  data() {
    // define the components that will be rendered
    const components = [
      {
        name: "FactionSelector",
        props: {},
      },
      {
        name: "GlowButton",
        props: {
          color: "green",
          text: "Generate",
        },
      },
    ];

    return {
      trader: {} as Trader,
      api_key: "" as string,
      factionToken: "" as string,
      components,
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
    log() {
      if (this.trader.faction) {
        // Perform some action when trader faction is defined
        console.log("Trader faction is defined");
      } else {
        // Perform some action when trader faction is not defined
        console.log("Trader faction is not defined");
      }

      console.log(toRaw(this.trader));
    },
  },
  components: {
    FactionSelector,
    GlowButton,
  },
});
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
</style>
