import counterActions from './actions';
import counterGetters from './getters';
import counterMutations from './mutations';

export default {
  namespaced: true,
  state: {
    counter: 0,
  },
  actions: counterActions,
  getters: counterGetters,
  mutations: counterMutations,
};
