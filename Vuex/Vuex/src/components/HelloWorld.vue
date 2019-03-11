<template>
  <div class="hello">
    <h1>Vuex状态管理</h1>
    <hr>
    <app-conter></app-conter>
    <app-result></app-result>
  </div>
</template>

<script>
import Conter from './Conter.vue'
import Result from './Result.vue'
export default {
  components:{
    appConter :Conter,
    appResult :Result
  },
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
