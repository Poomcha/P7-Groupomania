import { createStore } from 'vuex';
import createPersistedStore from 'vuex-persistedstate';
import user from './modules/user'

export default createStore({
  state: {},
  getters: {
    
  },
  mutations: {
  },
  modules: {
    user,
  },
  plugins: [createPersistedStore()],
});
