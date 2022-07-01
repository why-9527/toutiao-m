import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入自定义样式
import '@/styles/index.less'

// 引入vant组件
import {
    Button,
    Form,
    Field,
    NavBar,
    Toast,
    CountDown,
    Tabbar,
    TabbarItem,
    Icon,
    Image,
    Grid,
    GridItem,
    Cell,
    Dialog,
} from 'vant'

Vue.use(Button)
    .use(Form)
    .use(Field)
    .use(NavBar)
    .use(Toast)
    .use(CountDown)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Icon)
    .use(Image)
    .use(Grid)
    .use(GridItem)
    .use(Cell)
    .use(Dialog)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
