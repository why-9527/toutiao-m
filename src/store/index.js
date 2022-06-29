import Vue from 'vue'
import Vuex from 'vuex'
import {setItem, getItem} from '@/utils/storage'

Vue.use(Vuex)

const TOKEN_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
    state: {
        // 保存用户信息
        user: getItem(TOKEN_KEY),
    },
    getters: {},
    mutations: {
        setUser(state, data) {
            state.user = data
            setItem(TOKEN_KEY, state.user)
        }
    },
    actions: {},
    modules: {}
})
