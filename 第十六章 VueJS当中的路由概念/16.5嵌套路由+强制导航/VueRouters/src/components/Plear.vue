<template>
  <div>
    <h1>Plear页面</h1>
    <ul>
      <li>编号：{{title.uid}}</li>
      <li>姓名：{{title.name}}</li>
      <li>得分：{{title.point}}</li>
    </ul>
    <router-link to="/profile">简介</router-link>
    <router-link to="/stats">数据</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data:function(){
      return{
        title:'',
        profile:'',
        stats:''
      }
    },
    mounted(){
      this.title=this.getPlear(this.$route.params.uid);
      this.profile='/plears'+this.$route.uid+'/profile';
      this.stats='/plears'+this.$route.uid+'/stats';
    },
    beforeRouteUpdate(to,from,next){
      this.title=this.getPlear(to.params.uid);
      this.profile='/plears'+to.params.uid+'/profile';
      this.stats='/plears'+to.params.uid+'/stats';
      next();
    },
    methods:{
      getPlear:function(uid){
        switch(uid){
          case '1':
          return {uid:1,name:'库里',point:26};
          case '2':
          return {uid:1,name:'鲍勃',point:26};
          default:
          return{uid:-1};
        }
      }
    }
  }
</script>

<style scoped>

</style>
