<template lang="html">
  <div id="app">
      <button @click="get">点击获取数据</button>
      <ul v-for="item in array">
        <li v-for="it in item">{{it}}</li>
      </ul>
      <audio :src="url" controls>
        
      </audio>
  </div>
</template>

<script>
export default {
  data:function(){
    return{
      array:"",
      url:""
    }
  },
  methods:{
    get:function(){
      this.$http.get("https://api.imjad.cn/cloudmusic/?type=song&id=374753&br=128000").then(function(response){
        this.array=response.data.data
        this.url=response.data.data[0].url
      },function(error){
        console.log(error.message)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
