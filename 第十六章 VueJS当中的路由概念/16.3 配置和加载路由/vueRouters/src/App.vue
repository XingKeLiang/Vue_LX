<template>
  <div id="app">
      <p>
        <router-link to="/">helloeWorld</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/news">news</router-link>
      </p>
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
