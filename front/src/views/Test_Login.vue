<template>
  <div id="test_login">
    <h1>Secure Area</h1>
    <p>You can't access this unless you're logged in.</p>
    <button id="logout" @click="logout()">Logout</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Test_Login",
  data() {
    return {};
  },
  methods: {
    logout() {
      axios
        .delete("logout", {
          withCredentials: true,
        })
        .then((res) => console.log(res));
    },
  },
};
</script>
