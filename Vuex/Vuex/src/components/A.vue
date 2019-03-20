<template>
  <div>
    <button @click="increment">incounter</button>
    <button @click='decounters'>decounter</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {mapActions}from 'vuex'
  export default {
    methods:{
      //   ...mapMutations([
      //   'incrementt',
      //   'decrementt'
      // ]),
        ...mapActions([
          'increment',
          'decounters'
        ])
      // incounter:function(){
      //   return this.$store.state.counter++
      // },
      // decounter:function(){
      //   return this.$store.state.counter--
      // }
    }
  }
</script>

<style scoped>

</style>
