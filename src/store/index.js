import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogined: false,
    username: null,
    access_token: null,
    detailData: [],
    currentDate: null,
    expiredDate: null,
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
    getUserInfo(state, payload) {
      state.username = payload.name;
      state.access_token = payload.access;
    },
    getCurrentDate(state) {
      state.currentDate = state.detailData.createAt.slice(0, 10);
    },
    getExpiredDate(state) {
      state.expiredDate = state.detailData.expired.slice(0, 10);
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
          commit('getCurrentDate');
          commit('getExpiredDate');
        })
        .catch(e => {
          console.log(e);
        });
    },
    getUser({ commit }, payload) {
      commit('getUserInfo', payload);
    },
  },
  modules: {},
});
