<template>
  <div class="container">
    <app-header></app-header>
    <app-Server></app-Server>
    <app-Footer></app-Footer>
    <app-ServerDetails></app-ServerDetails>
  </div>

</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Server from './Server.vue'
import ServerDetails from './ServerDetails'
export default {
  components:{
    "app-header":Header,
    "app-Footer":Footer,
    "app-Server":Server,
    "app-ServerDetails":ServerDetails
  }
}
</script>

<style>
</style>
