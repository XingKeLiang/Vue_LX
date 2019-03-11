import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Plear from '@/components/Plear'
import Profile from '@/components/Plears/Profile'
import Stats from '@/components/Plears/Stats'
// import About from '@/components/About'
// import News from '@/components/News'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/plear/:uid',
      component:Plear,
      children:[
        {
          path:'/profile',
          component:Profile
        },
        {
          path:'/stats',
          component:Stats
        }
      ]
    }
    // {
    //   path:'/about',
    //   component:About
    // },
    // {
    //   path:'/news',
    //   component:News
    // }
  ]
})
