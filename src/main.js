import './assets/style/global.css';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { 
  faClipboardList, 
  faInfoCircle, 
  faPlus, 
  faTrash,
  faCheck
 } from "@fortawesome/free-solid-svg-icons";

import PerfectScrollbar from 'vue2-perfect-scrollbar'

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Font Awesome
library.add(faClipboardList, faInfoCircle, faPlus, faTrash, faCheck);
Vue.component('fa-icon', FontAwesomeIcon);

// Perfect Scrollbar
Vue.use(PerfectScrollbar);

// App
new Vue({
  render: h => h(App),
}).$mount('#app')
