<template lang="html">
  <div class="conpoiner">
    .
  </div>
</template>

<script>
  var ldata = [
      {
          title: '品牌',
          list: ["苹果", "小米", "锤子", "魅族", "华为", "三星", "OPPO", "vivo", "乐视", "360", "中兴", "索尼"]
      },
      {
          title: '尺寸',
          list: ["3.0英寸以下", "3.0-3.9英寸", "4.0-4.5英寸", "4.6-4.9英寸", "5.0-5.5英寸", "6.0英寸以上"]
      },
      {
          title: '系统',
          list: ["安卓", "(", "Android", ")", "苹果", "(", "IOS", ")", "微软", "(", "WindowsPhone", ")", "无", "其他"]
      },
      {
          title: '网络',
          list: ["联通3G", "双卡单4G", "双卡双4G", "联通4G", "电信4G", "移动4G"]
      }
  ]
  export default {

  }
</script>

<style scoped>
  #app{
      height: 260px;
      width: 760px;
      margin: 100px auto;
      padding: 145px 120px 95px;
      background: rgba(0,0,0,0.3);
      }
  #choose{
      height: 50px;
      background: rgba(224,241,239,1);
      border: 1px solid #e4e5e6;
      font-size: 18px;
      line-height: 50px;
      padding: 0 10px;
    }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    background: #ebf7f6;
  }
  #type {
    height: 210px;
    padding: 17px 0 16px 28px;
  }
  #type li {
    height: 44px;
    color: #8a8a8a;
    line-height: 44px;
  }
  #type a {
    margin: 0 12px 0 11px;
    color: #000;
  }
  .active {
    background: rgb(40, 165, 196);
  }

</style>
