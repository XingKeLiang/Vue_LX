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
                <add-red>
                  <h1>helloworld</h1>
                </add-red>
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
  components:{
    "AddRed":Red,
    "AddBlue":Blue,
    "AddYellow":Yellow
  },
  data:function(){
    return {
      selectedComponent:"AddRed"
    }
  }
}
</script>

<style>

</style>
