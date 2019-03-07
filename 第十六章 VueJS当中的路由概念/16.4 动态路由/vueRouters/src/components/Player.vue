<template>
  <div>
    <h1>球员页面</h1>
    <p>{{title}}</p>
  </div>
</template>

<script>
  export default {
    data:function(){
      return{
        title:''
      }
    },
    mounted(){
      this.title=this.getPlayer(this.$route.params.uid)
    },
    beforeRouteUpdte(to,from,next){
      this.title=this.getPlayer(to.params.uid);
      next();
    },
    methods:{
      getPlayer:function(uid){
        switch (uid) {
          case '1':
              return{uid:1,name:'库里',point:26};
          case '2':
              return{uid:2,name:'哈登',point:26}
          default:
            return{uid:-1};
        }
      }
    }
  }
</script>

<style scoped>

</style>
