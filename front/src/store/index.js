import { createStore } from 'vuex';
import createPersistedStore from 'vuex-persistedstate';
import auth from './modules/auth';

export default createStore({
  modules: {
    auth,
  },
  plugins: [createPersistedStore()],
});
