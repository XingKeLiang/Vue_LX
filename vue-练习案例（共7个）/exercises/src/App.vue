<template>
  <div id="app">
    <ul class="xuan">
      <!-- 选择项 -->
      <li><button @click="demo='appAnli1'">案例1：跑马灯效果</button></li>
      <li><button @click="demo='appAnli2'">案例2：选项卡效果</button></li>
      <li><button @click="demo='appAnli3'">案例3：动态选择</button></li>
      <li><button @click="demo='appAnli4'">案例4：全选单选效果</button></li>
      <li><button @click="demo='appAnli5'">案例5：点击删除效果</button></li>
      <li><button @click="demo='appAnli6'">案例6：搜索效果(1)</button></li>
      <li><button @click="demo='appAnli7'">案例7：搜索效果(2)</button></li>
    </ul>
    <hr>
      <h3>{{demo}}</h3>
    <div class="computer">
      <component :is="demo"></component>
    </div>
  </div>
</template>

<script>
import anli1 from './anli1.vue'
import anli2 from './anli2.vue'
import anli3 from './anli3.vue'
import anli4 from './anli4.vue'
import anli5 from './anli5.vue'
import anli6 from './anli6.vue'
import anli7 from './anli7.vue'
export default {
  components:{
    appAnli1:anli1,
    appAnli2:anli2,
    appAnli3:anli3,
    appAnli4:anli4,
    appAnli5:anli5,
    appAnli6:anli6,
    appAnli7:anli7
  },
  data:function(){
    return{
      demo:"appAnli1"
    }
  },
  methods:{

  }
}
</script>

<style  lang="css">
  .xuan li{
    height: 40px;
    border: 1px solid #cccccc;
    list-style: none;
    float: left;
    margin: 20px;
  }
  .xuan li button{
    height:100%;
  }
  hr{
    clear: both;
  }
  .computer{
    width:600px;
    height:350px;
    border:1px solid #cccccc;
    margin:0 auto;
    text-align:center;
    padding:40px;
  }
</style>
