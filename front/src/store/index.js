import { createStore } from 'vuex';
import createPersistedStore from 'vuex-persistedstate';

// Modules
import auth from './modules/auth';
import app from './modules/app';

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  modules: {
    auth,
    app,
  },
  plugins: [createPersistedStore()],
});
