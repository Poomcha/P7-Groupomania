<template>
  <div class="home">
    <Nav></Nav>
    This is home !
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
// import Signin from "./Signin.vue";
// import Signup from "./Signup.vue";

export default {
  name: "Home",
  el: "#home",
  components: {
    Nav,
    // Signin,
    // Signup,
  },
  computed: {
    signin() {
      return this.$store.getters.get_sign_in_up;
    },
    isLoggedIn() {
      return this.$store.getters.is_logged_in;
    },
  },
};
</script>
