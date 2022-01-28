<template>
  <div id="signup">
    <h1>Inscription</h1>
    <p>Description</p>
    <FormSignup></FormSignup>
  </div>
</template>

<script>
import FormSignup from "../components/forms/FormSignup.vue";
export default {
  name: "Signup",
  el: "#signup",
  components: {
    FormSignup,
  },
};
</script>