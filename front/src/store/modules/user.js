const user = {
  state: () => {
    return {
      user: {
        email: null,
        id: null,
        profile: {
          firstName: null,
          lastName: null,
          position: null,
          description: null,
          profilPictureUrl: null,
        },
      },
    };
  },
  getters: {
    GET_EMAIL: (state) => {
      return state.user.email;
    },
    GET_PROFILE: (state) => {
      return state.user.profile;
    },
    GET_USERID: (state) => {
      return state.user.id;
    },
  },
  mutations: {
    SET_EMAIL(state, email) {
      state.user.email = email;
    },
    SET_PROFILE(state, profile) {
      state.user.profile = { ...profile };
    },
    SET_USERID(state, id) {
      state.user.id = id;
    },
  },
  actions: {
    set_email(context, email) {
      context.commit('SET_EMAIL', email);
    },
    set_userid(context, id) {
      context.commit('SET_USERID', id);
    },
    set_profile(context, profile) {
      context.commit('SET_PROFILE', profile);
    },
  },
};

export default user;
