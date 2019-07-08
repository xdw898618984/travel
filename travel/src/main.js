import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/styles/reset.css'//默认css
import './assets/styles/border.css'//解决1px像素的问题

Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
  router,
}).$mount('#app')
