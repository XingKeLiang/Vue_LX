<template>
  <div id="app">


    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/Player/1">库里</router-link>
      <router-link to="/Player/2">哈登</router-link>
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
