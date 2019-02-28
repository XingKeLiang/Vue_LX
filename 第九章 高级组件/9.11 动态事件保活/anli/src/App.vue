<template>
    <div class="container">
       <div class="row">
            <div class="col-xs-12">
               <button class="btn btn-primary" @click="selectedComponent='AddBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent='AddYellow'">Load Yellow Template</button>
                <button class="btn btn-danger" @click="selectedComponent='AddRed'">Load Red Template</button>
                <hr>
              <P>{{selectedComponent}}</P>
              <keep-alive>
                <component :is="selectedComponent"></component>
              </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
import Red from './Red.vue'
import Yellow from './Yellow.vue'
import Blue from './Blue.vue'
export default {
  data:function(){
      return {
        selectedComponent:"AddRed"
      }
  },
  components:{
    "AddRed":Red,
    "AddBlue":Blue,
    "AddYellow":Yellow
  }
}
</script>

<style>

</style>
