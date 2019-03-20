<template>
  <div class="hello">
      <h1>vuex状态管理</h1>
      <hr>
      <app-b></app-b>
      <app-a></app-a>
      <hr>
      <funA></funA>
      <hr>
      <funB></funB>
  </div>
</template>

<script>
import A from './A.vue'
import B from './B.vue'
import funA from './funA.vue'
import funB from './funB.vue'
export default {
  components:{
    appA:A,
    appB:B,
    funA:funA,
    funB:funB
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
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
