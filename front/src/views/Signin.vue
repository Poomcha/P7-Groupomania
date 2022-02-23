<template>
  <div id="signin" class="bg--white sign">
    <h1 class="title--main text--center">Se Connecter</h1>
    <p class="text--normal-w text--center text--small-f">Déjà inscrit sur Groupomania ?<br/> Connectez-vous à votre réseau social préféré !</p>
    <FormSignin></FormSignin>
    <p class="text--normal-w text--small-f text--center">
      Pas encore inscrit ?
      <a href="" @click.prevent="changeSignView()">Inscrivez-vous !</a>
    </p>
  </div>
</template>

<script>
import FormSignin from "../components/forms/FormSignin.vue";
export default {
  name: "Signin",
  el: "#signin",
  components: {
    FormSignin,
  },
  methods: {
    changeSignView() {
      this.$store.dispatch("change_sign_in_up");
    },
  },
};
</script>

<style lang="scss">
</style>