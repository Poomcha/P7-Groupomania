import axios from 'axios';

const state = {
  user: null,
  posts: null,
};

const getters = {};

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

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
