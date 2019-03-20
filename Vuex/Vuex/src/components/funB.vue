<template>
  <div>
    <button @click="increment"> incerment </button>
  </div>
</template>

<script>
  export default {
   methods:{
     increment:function(){
       this.$store.commit('incrementt')
     }
    }
  }
</script>

<style scoped>

</style>
