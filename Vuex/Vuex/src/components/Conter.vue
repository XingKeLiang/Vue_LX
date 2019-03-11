<template>
  <div>
    <button @click="inconter">Inconter</button>
    <button @click="deconter">Deconter</button>
  </div>
</template>

<script>
  export default {
    methods:{
      inconter(){
        this.$store.state.conters++;
        // this.$emit('update',1);
      },
      deconter(){
        // this.$emit('update',-1);
        this.$store.state.conters--;
      }
    }
  }
</script>

<style scoped>

</style>
