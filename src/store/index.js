import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogined: false,
    userNickName: ""
  },
  mutations: {
    isLogin(state, payload) {
      state.isLogined = payload;
    },
    getNickName(state, payload) {
      state.userNickName = payload;
    }
  },
  actions: {},
  modules: {}
});
