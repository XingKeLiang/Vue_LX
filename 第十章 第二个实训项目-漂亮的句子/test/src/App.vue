<template>
  <div id="component">

    <app-new-quote @add="get($event)"></app-new-quote>
    <app-quote @dqu="del($event)" :quotes="quotes"></app-quote>

      <delete></delete>

  </div>
</template>

<script>
import Quote from './Quote.vue'
import NewQuote from './NewQuote.vue'
import Delete from './delete.vue'
export default {
  components:{
    appQuote:Quote,
    appNewQuote:NewQuote,
    delete:Delete
  },
  data: function(){
    return{
      maxQrote:10,
      quotes:["this is a Pig"]
    }
  },
  methods:{
    get:function(data){
      this.quotes.push(data)
    },
  del:function(num){
    this.quotes.splice(num,1);
  }
  }
}
</script>

<style>
  .grid{
    padding: 30px 50px;
    border:1px solid #ccc;
    box-shadow: 2px 3px 2px #333;
    float: left;
    margin: 20px;
    font-size: 20px;
  }
  .textare textarea{
    width: 400px;
    height: 250px;
  }
  #info{
    clear:both;
    width: 80%;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    border: 1px solid purble;
    text-align: center;
    margin: 0 auto;
    color:#fff;
    background: red;
  }
</style>
