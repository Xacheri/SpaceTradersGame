<template>
  <div class="fullscreen d-flex flex-column">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view class="routerview" />
  </div>
</template>

<style>
#app {
  font-family: var(--orbitron-font), Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.fullscreen {
  height: 100vh;
  width: 100vw;
}
</style>
