import axios from 'axios';
import router from '../../router/index';
const state = {
  user: {
    email: null,
    _id: null,
    profile: {
      firstName: null,
      lastName: null,
      position: null,
      description: null,
      profilPictureUrl: null,
    },
  },
};
const getters = {
  is_logged_in(state) {
    return state.user._id !== null ? true : false;
  },
  get_user_id(state) {
    return state.user._id;
  },
  get_user_email(state) {
    return state.user.email;
  },
  get_user_profile(state) {
    return state.user.profile;
  },
};
const mutations = {
  set_user_email(state, email) {
    state.user.email = email;
  },
  set_user_id(state, id) {
    state.user._id = id;
  },
  set_user_profile(state, profile) {
    state.user.profile = { ...profile };
  },
  log_out(state) {
    state.user = {
      email: null,
      _id: null,
      profile: {
        firstName: null,
        lastName: null,
        position: null,
        description: null,
        profilPictureUrl: null,
      },
    };
  },
};
const actions = {
  signup({ dispatch }, form) {
    axios
      .post('/signup', form)
      .then(() => {
        dispatch('signin', form);
      })
      .catch((error) => {
        return error;
      });
  },
  signin({ commit, state }, form) {
    axios
      .post('/signin', form)
      .then((res) => {
        // Set user email and userId.
        commit('set_user_email', form.email);
        commit('set_user_id', res.data.userId);
        // Set profile if it exist, else redirect to profil completion view.
        axios
          .get(`users/${state.user._id}`)
          .then((res) => {
            console.log(res.data.profile.firstName);
            if (res.data.profile.firstName) {
              commit('set_user_profile', res.data);
              router.push({ name: 'home' });
            } else {
              console.log('Going here');
              router.push({
                name: 'profile',
                params: { userId: state.user._id },
              });
            }
          })
          .catch((error) => {
            return error;
          });
      })
      .catch((error) => {
        return error;
      });
  },
  logout({ commit }) {
    commit('log_out');
    axios
      .delete('/logout')
      .then(() => {
        console.log('Bye Bye !');
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
