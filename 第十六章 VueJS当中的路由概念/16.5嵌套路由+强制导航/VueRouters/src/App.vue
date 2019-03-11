<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/plear/1">库里</router-link>
    <router-link to="/plear/2">鲍勃</router-link>
    <!-- <router-link to="/news">库里</router-link>
    <router-link to="/about">鲍勃</router-link> -->
    <router-view/>
    <hr>
    <button @click="native">跳转</button>
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
