<template lang="html">
  <div class="conpoiner">
      <button @click="start">启动跑马灯效果</button>
      <button @click="stop">关闭跑马灯效果</button>
      <p>{{str}}</p>
  </div>
</template>

<script>
  export default {
    data:function(){
      return{
        timeId:null,
        str:"我是跑马灯,文字滚动效果",
      }
    },
    methods:{
      start(){
        if(this.timeId==null){
          this.timeId = setInterval(() => {
              let startStr = this.str.slice(0,1);
              let endStr = this.str.slice(1,this.str.length);
              this.str=endStr+startStr;
          }, 400);
        }
      },
      stop(){
        if(this.timeId){
          clearInterval(this.timeId);
          this.timeId=null;
        }
      }
    }
  }
</script>

<style scoped>

</style>
