<template>
  <div class="home d-flex flex-column justify-content-around">
    <div id="titleCard">
      <h1 class="fade-inflate-medium">Space Trader</h1>
      <p class="fade-inflate-medium sub-heading">
        A space trading game built on the
        <a href="https://spacetraders.io/">Space Traders API</a>
      </p>
    </div>
    <div id="buttons">
      <button class="m-2 fade-inflate-medium glowing-btn">
        <router-link class="btn-text" to="/create"
          >Create An Access Token</router-link
        >
      </button>
      <button class="m-2 fade-inflate-medium glowing-btn">
        <router-link class="btn-text" to="/login"
          >Login with an Access Token</router-link
        >
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    //
  },
  data() {
    return {
      //
    };
  },
});
</script>

<style scoped>
h1 {
  color: var(--glow-green);
  font-size: 2rem;
}

a {
  color: var(--glow-blue);
  text-decoration: none;
  text-shadow: 0 0 10px var(--glow-blue);
}

.home {
  padding: 20px;
  height: 100%;
}

.sub-heading {
  color: var(--glow-green);
  font-size: 1rem;
}

.btn-text {
  font-size: 1.25rem;
  color: var(--glow-blue);
  text-decoration: none;
  text-shadow: 0 0 10px var(--glow-blue);
}
.fade-inflate-medium {
  animation-duration: 1800ms;
}

.inflate-last {
  animation-duration: 2000ms !important;
}
</style>
