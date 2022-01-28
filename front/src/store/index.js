import { createStore } from 'vuex';
import createPersistedStore from 'vuex-persistedstate';

export default createStore({
  modules: {},
  plugins: [createPersistedStore()],
});
