import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入自定义样式
import '@/styles/index.less'

// 引入vant组件
import {
    Button
} from 'vant'

Vue.use(Button)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
