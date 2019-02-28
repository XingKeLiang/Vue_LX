<template lang="html">
  <div>
    <h1>this is a yellow.vue</h1>
    <button @click="Add++">Add</button>
    <p>{{Add}}</p>
  </div>
</template>
<script>
export default {
  data:function(){
    return{
      Add:0
    }
  }
}
</script>
<style lang="css">

</style>
