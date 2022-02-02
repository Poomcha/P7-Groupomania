import { createStore } from 'vuex';
import createPersistedStore from 'vuex-persistedstate';
import user from './modules/user'

export default createStore({
  state: {},
  getters: {
    
  },
  mutations: {
    // SET_EMAIL(state, email) {
    //   state.user.email = email;
    // },
    // SET_FIRSTNAME(state, firstName) {
    //   state.user.profile.firstName = firstName;
    // },
  },
  modules: {
    user,
  },
  plugins: [createPersistedStore()],
});
