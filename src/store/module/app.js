import {
  getMenuByRouter
} from '@/libs/util'
import routers from '@/router/routers'
export default {
  state: {
    homeRoute: {},
    hasReadErrorPage: false
  },
  getters: {
    menuList: (state, getters, rootState) => getMenuByRouter(routers, rootState.user.access)
  },
  mutations: {
  },
  actions: {}
}
