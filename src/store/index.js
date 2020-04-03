import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogined: false,
    userNickName: '',
    access_token: null,
  },
  mutations: {
    isLogin(state, payload) {
      state.isLogined = payload;
    },
    getNickName(state, payload) {
      state.userNickName = payload;
    },
    getAccessToken(state, payload) {
      state.access_token = payload;
    },
  },
  actions: {},
  modules: {},
});
