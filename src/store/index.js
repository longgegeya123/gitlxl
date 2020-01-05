import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    addCart(state, newRes) {
      state.list = newRes;
      // eslint-disable-next-line no-console
      console.log(state.list);
    }
  },
  actions: {},
  modules: {}
});
