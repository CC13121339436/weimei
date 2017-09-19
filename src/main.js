// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from "axios"

//公用的组件在这里注册
import vHeader from './components/public/Header.vue'
import vContent from './components/public/Content.vue'
import vFooter from './components/public/Footer.vue'

//mint-ui的组件

//按需导入 mint-ui的组件然后注册


//自己的组件 全局注册
Vue.component("v-header",vHeader)
Vue.component("v-content",vContent)
Vue.component("v-footer",vFooter)



Vue.config.productionTip = false

//给vue扩展 全局使用的插件
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data:{
    showList:"list1"
  }
})
