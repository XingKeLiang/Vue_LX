<template lang="html">
  <div class="conpoiner">
      <input
      type="button"
      v-for="item,i in tabData"
      :value="item.title"
      @click="dian(i)"
      :class="{red:i==index}"
      />
      <ul
      v-for="ites,j in tabData"
      v-show="index==j"
      >
        <li v-for="(s) in ites.list">{{s.subTitle}}</li>
      </ul>
  </div>
</template>

<script>
let tabData = [
				{
					title:"新闻",
					list: [
						{
							subTitle:'今天很好'
						},
						{
							subTitle:'今天很好'
						},
						{
							subTitle:'今天很好'
						}
					]
				},
				{
					title:'娱乐',
					list: [
						{
							subTitle:'结婚了'
						},
						{
							subTitle:'出轨了'
						}
					]
				},
				{
					title:'体育',
					list: [
						{
							subTitle:'冠军'
						},
						{
							subTitle:'冠军'
						}
					]
				}
			]

  export default {
    data:function(){
      return{
        tabData,
        index:0
      }
    },
    methods:{
      dian:function(i){
        this.index=i
      }
    }
  }
</script>

<style scoped>
  .conpoiner input{
    text-alien:center;
  }
  .red{
    background:red;
  }
</style>
