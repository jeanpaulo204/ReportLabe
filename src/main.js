import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import bootstrap from './bootstrap'
Vue.config.productionTip = false
Vue.use(bootstrap)
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
