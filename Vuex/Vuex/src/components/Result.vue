<template>
  <div>
    <p>cinters is:{{conters}}</p>
  </div>
</template>

<script>

  export default {
      computed:{
        conters:function(){
          return this.$store.state.conters
        }
      }
  }
</script>

<style scoped>

</style>
