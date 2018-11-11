import Vue from 'vue';
import App from './App.vue';
import router from './router/index';


//引入element-ui
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element, { size: 'small' });

//引入全局CSS
import './assets/css/theme-default.less'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
