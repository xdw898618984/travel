import Vue from 'vue'
import Router from 'vue-router'
import HelloWord from '@/components/HelloWorld.vue'
// import Home from '@pages/home/Home'
Vue.use(Router)
export default new Router({
    routes:[{
        path:'/',
        name:'home',
        component:HelloWord
    }]
})