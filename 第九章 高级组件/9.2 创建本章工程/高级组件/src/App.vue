<template>
  <appUser>
    <h1 slot="s1">{{mes}}</h1>
    <p slot="s2">{{thie}}</p>
  </appUser>
</template>
<script>
import User from './user.vue'
export default {
  // 数据
    data:function(){
      return{
        mes:"this is a User",
        thie:"这是一句话"
      }
    },
    components:{
      "appUser":User
    }
}
</script>

<style>

</style>
