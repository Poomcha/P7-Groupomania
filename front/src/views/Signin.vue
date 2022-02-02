<template>
  <div id="signin">
    <h1>Connexion</h1>
    <p>Description</p>
    <FormSignin></FormSignin>
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
};
</script>
