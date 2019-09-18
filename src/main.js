import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'
import 'amfe-flexible'
import './assets/iconfont/iconfont.css'
import './assets/iconfontVant/iconfont.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import FastClick from 'fastclick'
import * as custom from '@/common/filters'
Object.keys(custom).forEach(key => { Vue.filter(key, custom[key])})
import './plugins/element.js'
import publicJs from './common/utils/public'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'u7G2TDa7t4msVkVrHWPDf0Mkw8GjY2m1'
})



// FastClick.attach(document.body);
Vue.prototype.$axios = axios
Vue.use(Vant);
Vue.use(publicJs);


let locatStr = window.location.host.split(":");
if (locatStr[0] == 'localhost') {  // 开发环境
    console.log("开发环境")
    axios.defaults.baseURL = "/api/"
} else { // 生产环境
    console.log("生产环境")
    axios.defaults.baseURL = "http://101.37.245.98"   
}

axios.interceptors.request.use(
  (config) => {
      if (window.localStorage.token) {   // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.token = window.localStorage.token;
      }
      return config;  
  }, 
  (error) => {
      console.log("错误了")
      return Promise.reject(error);
  }
);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
