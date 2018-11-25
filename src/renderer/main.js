import Vue from 'vue'
import axios from 'axios'
import VueMapbox from 'vue-mapbox'
import Mapbox from 'mapbox-gl'

import App from './App'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VueMapbox,{ mapboxgl: Mapbox });

/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'
}).$mount('#app')
