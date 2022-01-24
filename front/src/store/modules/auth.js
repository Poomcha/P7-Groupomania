import axios from 'axios';

const state = {
  user: null,
  posts: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  statePosts: (state) => state.posts,
  stateUser: (state) => state.user,
};

const mutations = {
  SET_USER(state, email) {
    state.user = email;
  },
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  LOG_OUT(state) {
    state.user = null;
    state.posts = null;
  },
};

const actions = {
  signup({ dispatch }, form) {
    axios.post('signup', form).then(() => {
      const userForm = new FormData();
      userForm.append('email', form.email);
      userForm.append('password', form.password);
      dispatch('Login', userForm);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
