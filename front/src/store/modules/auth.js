const auth = {
  state() {
    return {
      isLogged: false,
    };
  },
  getters: {
    GET_LOGSTATUS: (state) => {
      return state.isLogged;
    },
  },
  mutations: {
    LOGGED(state) {
      state.isLogged = true;
    },
    NOT_LOGGED(state) {
      state.isLogged = false;
    },
  },
  actions: {
     set_logstatus(context) {
         
     } 
  },
};

export default auth;
