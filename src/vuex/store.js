import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as types from './type';
Vue.use(Vuex)
import {
    SHOW_SIDEBAR,
    HIDE_SIDEBAR,
    CHANGE_SIDEBAR
} from './type'
// 应用初始状态
const state = {
    count: 10,
    sidebar: true
}

// 定义所需的 mutations
const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    },
    [SHOW_SIDEBAR](state) {
        state.sidebar = true;
    },
    [HIDE_SIDEBAR](state) {
        state.sidebar = false;
    },

    [CHANGE_SIDEBAR](state) {
        state.sidebar = !state.sidebar;
    }

}

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})