import { createStore } from 'vuex';

import rootActions from './actions';
import rootGetters from './getters';
import rootMutations from './mutations';
import counterModule from './modules/counter';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  actions: rootActions,
  getters: rootGetters,
  mutations: rootMutations,
});

export default store;