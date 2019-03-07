<template>
  <div id="app">
      <input v-model="usname" type="">
      <input v-model="usname" type="text">
      <button @click="posts">提交</button>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      user:{
        usname:"",
        usname:""
      }
    }
  },
  methods:{
    posts:function(){
      this.$html.post("https://fir-9f54b.firebaseio.com/user.json",this.user).then(function(resopnse){
          console.log(resopnse)
      },function(error){
          console.log(error.message)
      })
    }
  }
}
</script>

<style>
</style>
