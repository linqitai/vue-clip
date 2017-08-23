// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import clipper from '../static/clipper'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'    // 默认主题

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(clipper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
