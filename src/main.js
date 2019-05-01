import Vue from 'vue'
import App from './App.vue'

// ant design component import
import "ant-design-vue/dist/antd.css"
import { Layout } from 'ant-design-vue'
import { Menu } from 'ant-design-vue'
import { Icon } from 'ant-design-vue'
import { Cascader } from 'ant-design-vue'
import { Spin } from 'ant-design-vue'
import { Table } from 'ant-design-vue'

// apex chart
import VueApexCharts from 'vue-apexcharts'

import router from "./router"

Vue.config.productionTip = false

// ant design component use
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Cascader)
Vue.use(Spin)
Vue.use(Table)

// apex chart
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
