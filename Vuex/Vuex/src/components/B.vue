<template>
  <div>
    <p>Counter is:{{counter}}</p>
  </div>
</template>

<script>
  export default {
    computed:{
        counter:function(){
          return this.$store.getters.increments;
        }
    }
  }
</script>

<style scoped>

</style>
