import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogined: false,
    userNickName: '',
    access_token: null,
    detailData: [],
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
    getDetailData(state, payload) {
      state.detailData = payload;
    },
  },
  actions: {
    get({ commit }, payload) {
      fetch(`http://localhost:4004/api/todos/${payload}`)
        .then(res => {
          return res.json();
        })
        .then(res => {
          commit('getDetailData', res);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  modules: {},
});
