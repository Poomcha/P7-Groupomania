<template>
  <div class="login">
    <label id="email-label" for="email">Email : </label>
    <input id="email-input" type="text" v-model="input.email" />
    <label id="pwd-label" for="password">Password : </label>
    <input id="pwd-input" type="text" v-model="input.password" />
    <button id="submit-login" @click="signinUser(input.email, input.password)">
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
      input: { email: "", password: "" },
    };
  },
  methods: {
    signinUser(email, password) {
      fetch("http://localhost:3000/signin", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      }).then((response) => {
        if (response.ok) {
          router.push({ name: "Test_Login" });
        }
      });
    },
  },
};
</script>