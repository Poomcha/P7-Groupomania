<template>
  <div id="formsignin">
    <form @submit.prevent="logIn()" @input="submitValidation()">
      <div>
        <label for="email">E-mail : </label>
        <input
          type="email"
          id="email"
          name="email"
          autocomplete="email"
          required
          v-model="form.email"
          @input="emailValidation()"
          placeholder="exemple@groupomania.fr"
        />
        <span v-if="validator.email">Email invalide.</span>
      </div>
      <div>
        <label for="password">Mot de Passe : </label>
        <input
          type="password"
          id="password"
          name="password"
          autocomplete="new-password"
          required
          v-model="form.password"
        />
      </div>
      <SubmitButton :label="label.submit" :disabled="disableSubmit" />
    </form>
  </div>
</template>

<script>
import trimAll from "../../scripts/triming"
import SubmitButton from "../buttons/SubmitButton.vue";
import { mapActions } from "vuex";
import { validateEmail, validateForm } from "../../scripts/validate";

export default {
  name: "FormSignin",
  el: "#formsignin",
  components: {
    SubmitButton,
  },
  data() {
    return {
      label: {
        submit: "Connexion",
      },
      form: {
        email: "",
        password: "",
      },
      validator: {
        email: false,
      },
      disableSubmit: true,
    };
  },
  computed: {},
  methods: {
    emailValidation() {
      this.validator.email = validateEmail(this.form.email);
    },
    submitValidation() {
      this.disableSubmit = validateForm(this.validator, this.form);
    },
    ...mapActions(["sign_in"]),
    logIn() {
      this.sign_in(trimAll(this.form));
    },
  },
};
</script>
