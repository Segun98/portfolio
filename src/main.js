import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false
// AOS.init({
//   offset: 200,
//   duration: 600,
//   easing: 'ease-in-sine',
//   delay: 100,
// });

new Vue({
  router,
  store,
  created() {
    AOS.init({
      duration: 1000,
    })
  },
  render: h => h(App)
}).$mount('#app')