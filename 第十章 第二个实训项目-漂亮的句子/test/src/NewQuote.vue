<template>
  <form class="textare">
      <label for="">Added Quote:</label>
      <div>
        <textarea v-model="lang"></textarea>
      </div>
      <div>
        <button @click.prevent="AddedQuote">添加</button>
      </div>
  </form>
</template>

<script>
  export default {
    data:function(){
      return{
        lang:""
      }
    },
    methods:{
      AddedQuote:function(){
          this.$emit("add",this.lang)
          this.lang=""
      }
    }

  }
</script>

<style scoped>

</style>
