<template>
  <div id="signup">
    <h1>Inscription</h1>
    <p>Description</p>
    <FormSignup></FormSignup>
    <p>
      Déjà inscrit ?
      <a href="" @click.prevent="changeSignView()">Connectez vous !</a>
    </p>
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
  methods: {
    changeSignView() {
      this.$store.dispatch("change_sign_in_up");
    },
  },
};
</script>