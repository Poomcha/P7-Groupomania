import { createStore } from 'vuex';

export default createStore({
  state: {
    
  },
  mutations: {
  
  },
  actions: {
    signupUser(email, password) {
      // fetch('http://localhost:3000/signup', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email: email, password: password }),
      // }).then(() =>
      //   console.log(
      //     'User signed up, email : ' + email + ', password : ' + password
      //   )
      // );
      console.log(`email: ${email} | password: ${password}`);
    },
  },
  modules: {},
});
