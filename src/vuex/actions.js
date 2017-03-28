//test
import * as types from './type'
export const increment = ({ commit }) => {
    commit('INCREMENT')
}
export const decrement = ({ commit }) => {
    commit('DECREMENT')
}
export const SHOW_SIDEBAR = ({ commit }) => {
    commit(types.SHOW_SIDEBAR);
}
export const HIDE_SIDEBAR = ({ commit }) => {
    commit(types.HIDE_SIDEBAR);
}
export const CHANGE_SIDEBAR = ({ commit }) => {
    commit(types.CHANGE_SIDEBAR);
}