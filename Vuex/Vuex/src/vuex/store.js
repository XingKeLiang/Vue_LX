import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store =new Vuex.Store({
  state:{
    counter:0
  },
  getters:{
    increments:function(state){
     return  state.counter*2;
    },
    decounters:function(state){
      return state.counter/2;
    }
  },
  mutations:{
    incrementt:function(state){
      state.counter++
    },
    decrementt:function(state){
      state.counter--
    }
  },
  actions :{
    increment:function(context){
      setTimeout(function(){
        context.commit("incrementt")
      },3000)
    },
    decounters:function(context){
      setTimeout(function(){
        context.commit("decrementt")
      },3000)
    }
  }
})
