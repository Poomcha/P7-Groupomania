<template>
  <div class="login">
    <label id="email-label" for="email">Email : </label>
    <input id="email-input" type="text" v-model="email" />
    <label id="pwd-label" for="password">Password : </label>
    <input id="pwd-input" type="text" v-model="password" />
    <button id="submit-login" @click="signinUser(email, password)">
      Submit
    </button>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "Signin",
  data: () => {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signinUser(email, password) {
      fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      }).then((response) => {
        if (response.ok) {
          router.push({ name: "Home" });
        }
      });
    },
  },
};
</script>