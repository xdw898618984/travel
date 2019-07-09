import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import fastClick from 'fastclick'//解决移动端点击300ms延迟的问题
import './assets/styles/reset.css'//默认css
import './assets/styles/border.css'//解决1px像素的问题
import './assets/styles/iconfont.css'//引入iconfont.css
import VueAwesomeSwiper from 'vue-awesome-swiper'//引入swiper
import 'swiper/dist/css/swiper.css'//引入swiper.css

Vue.use(VueAwesomeSwiper, /* { default global options } */) //全局使用
Vue.config.productionTip = false
fastClick.attach(document.body)
new Vue({
  
  render: h => h(App),
  router,
}).$mount('#app')
