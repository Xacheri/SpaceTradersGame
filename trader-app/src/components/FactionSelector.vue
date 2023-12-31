<template>
  <h2 class="mb-4 glow-blue p-1">
    Select your Faction: {{ lockedInFaction.name }}
  </h2>
  <p class="text-center glow-blue p-1">
    Select a faction to join. You can only join one faction per account.
  </p>
  <!-- TODO: Display all faction data after locking in -->
  <div
    id="slider-container"
    class="d-flex flex-column align-items-center faction-container container"
  >
    <Transition name="fcard" mode="out-in">
      <div
        class="faction-card card"
        :class="[{ toggled: opacityToggle }]"
        :style="factionImage(selectedFaction.symbol)"
        v-on:click="opacityToggle = !opacityToggle"
        v-on:dblclick="rotateFactions"
        :key="selectedFaction.symbol"
      >
        <div class="card-body d-flex flex-column justify-content-center">
          <h4 class="card-title">{{ selectedFaction.name }}</h4>
          <h6 class="hidden-text card-subtitle mb-2 text-muted">
            {{ selectedFaction.symbol }}
          </h6>
          <p
            :class="[{ toggled: opacityToggle }]"
            class="hidden-text card-text"
          >
            {{ selectedFaction.description }}
          </p>
        </div>
      </div>
    </Transition>
    <GlowButton
      :text="lockedIn ? 'Unlock Faction' : 'Lock In Faction'"
      :color="lockedIn ? 'red' : 'blue'"
      v-on:click="lockInFaction()"
    ></GlowButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, CSSProperties } from "vue";
import { useAdvisorStore } from "@/state/advisor-store";

import Faction from "@/interfaces/Faction";

import cosmic_logo from "@/assets/cosmic_logo.png";
import galactic_logo from "@/assets/galactic_logo.png";
import quantum_logo from "@/assets/quantum_logo.png";
import dominion_logo from "@/assets/dominion_logo.png";
import astro_logo from "@/assets/astro_logo.png";
import corsairs_logo from "@/assets/corsairs_logo.png";
import void_logo from "@/assets/void_logo.png";
import obsidian_logo from "@/assets/obsidian_logo.png";
import aegis_logo from "@/assets/aegis_logo.png";
import GlowButton from "@/components/GlowButton.vue";

const SymbolToImageMap = new Map<string, string>([
  ["COSMIC", cosmic_logo],
  ["GALACTIC", galactic_logo],
  ["QUANTUM", quantum_logo],
  ["DOMINION", dominion_logo],
  ["ASTRO", astro_logo],
  ["CORSAIRS", corsairs_logo],
  ["VOID", void_logo],
  ["OBSIDIAN", obsidian_logo],
  ["AEGIS", aegis_logo],
]);

export default defineComponent({
  name: "FactionSelector",
  setup() {
    const advisorStore = useAdvisorStore();
    return { ...advisorStore, GlowButton };
  },
  data() {
    return {
      factions: [] as Faction[],
      selectedFaction: {} as Faction,
      lockedInFaction: {} as Faction,
      lockedIn: false as boolean,
      opacityToggle: false,
    };
  },
  methods: {
    // Get the list of factions from the SpaceTraders API
    async getFactions(): Promise<any> {
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.pinia_advisor_token,
        },
      };
      const response = await fetch(
        "https://api.spacetraders.io/v2/factions",
        options
      );
      const data = await response.json();
      console.log(data.data);
      this.factions = data.data.map((faction: Faction) => ({
        // Map the faction data to a new object with an image property
        ...faction,
        image: SymbolToImageMap.get(faction.symbol),
      }));
      this.selectedFaction = this.factions[0]; // Set the selected faction to the first faction in the list
    },
    // Rotate the factions in the list
    rotateFactions() {
      if (this.lockedIn) {
        return;
      }
      const currentIndex = this.factions.indexOf(this.selectedFaction);
      const nextIndex = (currentIndex + 1) % this.factions.length;
      this.selectedFaction = this.factions[nextIndex];
    },
    // Create the faction image style using SymbolToImageMap
    factionImage(symbol: string): CSSProperties {
      return {
        backgroundImage: `url(${SymbolToImageMap.get(symbol)})`,
        backgroundSize: "stretch",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "1.5rem",
      };
    },
    // Lock in the selected faction
    lockInFaction() {
      if (this.lockedIn) {
        console.log("Unlocking faction");
        this.lockedIn = false;
        this.lockedInFaction = {} as Faction;
        this.$emit("faction-unlocked");
        return;
      }
      console.log("Locking in faction");
      this.lockedIn = true;
      this.lockedInFaction = this.selectedFaction;
      this.$emit("faction-locked", this.lockedInFaction);
    },
  },
  // Get the list of factions when the component is mounted
  async mounted() {
    await this.getFactions();
    if (this.factions.length > 0) {
      this.selectedFaction = this.factions[0];
    }
  },
  components: {
    GlowButton,
  },
});
</script>

<style scoped>
#slider-container {
  overflow-x: hidden;
}

.card {
  border-radius: 1.5rem;
  max-width: 300px;
  min-height: 300px;
  min-width: 300px;
}

.fcard-enter-active,
.fcard-leave-active {
  transition: all 1s;
}

.fcard-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fcard-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.fcard-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.fcard-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.faction-card {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.faction-card.slide-in-left-medium {
  animation-name: slide-in-left-medium;
}
.faction.slide-out-right-medium {
  animation-name: slide-out-right-medium;
}
.card-body {
  transition: background-color 0.5s linear;
}
.card-text,
.card-title,
.card-subtitle {
  color: var(--glow-black);
}
.card-title {
  color: var(--glow-blue);
  font-weight: bolder;
  text-shadow: 0 0 10px var(--glow-black);
  background-color: rgba(192, 192, 192, 0.45);
  display: inline-block;
  border-radius: 1.5rem;
  padding: 0.5rem;
}
.card:hover .card-body {
  background-color: rgba(192, 192, 192, 0.85);
  border-radius: 1.5rem;
}
.card:hover .hidden-text {
  display: block;
}

.card.toggled .card-body {
  background-color: rgba(192, 192, 192, 0.85);
  border-radius: 1.5rem;
}
.card.toggled .hidden-text {
  display: block;
}
.hidden-text {
  display: none;
  transition: all 0.5s ease-in;
}
</style>
