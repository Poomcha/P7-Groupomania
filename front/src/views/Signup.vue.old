<template>
  <div class="login">
    <label id="email-label" for="email">Email : </label>
    <input id="email-input" type="text" v-model="email" />
    <label id="email-confirmation-label" for="email-confirmation-id"
      >Confirm Email :
    </label>
    <input id="email-confirmation-input" type="text" />
    <label id="pwd-label" for="password">Password : </label>
    <input id="pwd-input" type="text" v-model="password" />
    <label id="pwd-confirmation-label" for="pwd-confirmation-id"
      >Confirm Password :
    </label>
    <input id="pwd-confirmation-input" type="text" />
    <button id="submit-login" @click="signupUser(email, password)">
      Submit
    </button>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "Signup",
  data: () => {
    return {
      email: "",
      password: "",
    };
  },
  computed: {},
  methods: {
    signupUser(email, password) {
      fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((res) => {
          console.log(res);
        })
        .then(() => {
          router.push({ name: "Profil" });
        });
    },
  },
};
</script>