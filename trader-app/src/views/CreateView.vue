<template>
  <div>
    <h1 class="mb-4 glow-green">Create A Space Trader</h1>
    <Transition>
      <component
        :is="components[0].name"
        v-bind="components[0].props"
        @faction-locked="(f: Faction) => (handleFactionLocked(f))"
        @faction-unlocked="() => handleFactionUnlocked()"
        @callsign-locked="(c: string) => handleCallsignLocked(c)"
        @callsign-unlocked="() => handleCallsignUnlocked()"
        @click="components[0].onclick"
      ></component>
    </Transition>
    <GlowButton
      v-if="choiceLocked"
      :color="'blue'"
      text="Next"
      :onclick="handleNextButton"
    ></GlowButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, CSSProperties } from "vue";
import FactionSelector from "@/components/FactionSelector.vue";
import CallsignSelector from "@/components/CallSignSelector.vue";
import GlowButton from "@/components/GlowButton.vue";
import Trader from "@/classes/Trader";
import Faction from "@/interfaces/Faction";
import CreateAgentResponse from "@/interfaces/CreateAgentResponse";
import LoadingLogo from "@/components/LoadingLogo.vue";

import { toRaw } from "vue"; // turn proxy object into raw object

export default defineComponent({
  name: "CreateView",
  setup() {
    return { FactionSelector, GlowButton, LoadingLogo };
  },
  data() {
    interface Component {
      name: string;
      /* eslint-disable @typescript-eslint/no-explicit-any */
      props: any; // props are variable in structure
      onclick?: () => void;
    }

    // define the components that will be rendered
    const components = [
      {
        name: "FactionSelector",
        props: {} as any, // props are variable in structure
      },
      {
        name: "CallsignSelector",
        props: {},
      },
      {
        name: "GlowButton",
        props: {
          color: "green",
          text: "Generate",
        },
        onclick: this.handleGenerate,
      },
    ] as Component[];

    const loadingComponent = LoadingLogo;

    return {
      trader: {} as Trader,
      api_key: "" as string,
      factionToken: "" as string,
      components,
      choiceLocked: false as boolean,
      createTraderResponse: {} as CreateAgentResponse,
      loadingComponent,
      tempComponent: {} as Component,
    };
  },
  methods: {
    async handleGenerate() {
      await this.waitLoadExecute(1000, this.createSpaceTradersUser);
    },
    async createSpaceTradersUser() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // external API : allow CORS
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          symbol: this.trader.callsign,
          faction: this.trader.faction.symbol,
        }),
      };
      let response = await fetch(
        "https://api.spacetraders.io/v2/register",
        options
      );
      if (response.status === 200) {
        this.createTraderResponse = await response.json();
        this.api_key = this.createTraderResponse.token;
        this.factionToken = this.createTraderResponse.faction.symbol;
        console.log(this.createTraderResponse);
      } else {
        console.log(response);
      }
    },
    handleNextButton() {
      console.log(toRaw(this.trader));

      this.choiceLocked = false;
      // rotate the components array
      // by pushing the first element to the end
      // after removing it with shift()
      this.components.push(this.components.shift()!);
    },
    handleFactionLocked(faction: Faction) {
      this.choiceLocked = true;
      this.trader.faction = faction;
    },
    handleFactionUnlocked() {
      this.choiceLocked = false;
      this.trader.faction = {} as Faction;
    },
    handleCallsignLocked(callsign: string) {
      this.choiceLocked = true;
      this.trader.callsign = callsign;
    },
    handleCallsignUnlocked() {
      this.choiceLocked = false;
      this.trader.callsign = "";
    },
    async waitLoadExecute(ms: number, func: Function) {
      // temporarily set the component to the loading logo
      this.tempComponent = this.components[0];

      this.components[0].name = "LoadingLogo";
      this.components[0].props = {
        active: true,
      };

      // wait for ms milliseconds
      await new Promise((resolve) => setTimeout(resolve, ms));

      // reset the component to the original component
      this.components[0] = this.tempComponent;
      func();
    },
  },
  components: {
    FactionSelector,
    GlowButton,
    CallsignSelector,
    LoadingLogo,
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
