<template>
  <div id="formsignup">
    <form
      @submit.prevent="signup()"
      @input="submitValidation()"
      class="ctn ctn--column form"
    >
      <div class="ctn--input">
        <label for="email" class="text--label text--normal-f text--normal-w box"
          >Email</label
        >
        <input
          type="email"
          id="email"
          name="email"
          autocomplete="email"
          required
          v-model="form.email"
          @input="emailValidation()"
          placeholder="exemple@groupomania.com"
          class="input input--sign box text--normal-f text--light-w"
        />
        <span
          v-if="validator.email"
          class="text--normal-f text--normal-w text--error"
          >Email invalide, doit être de la forme :
          exemple@groupomania.com.</span
        >
      </div>
      <div class="ctn--input">
        <label
          for="password"
          class="text--label text--normal-f text--normal-w box"
          >Mot de Passe</label
        >
        <input
          type="password"
          id="password"
          name="password"
          autocomplete="new-password"
          required
          v-model="form.password"
          @input="passwordValidation()"
          class="input input--sign box text--normal-f text--light-w"
        />
        <span
          v-if="validator.password"
          class="text--normal-f text--bold-w text--error"
          >Mot de passe invalide, doit contenir au moins 1 lettre majuscule, une
          miniscule, un chiffre, un caractère spécial et entre 8 et 16
          caractères.</span
        >
      </div>
      <div class="ctn--input">
        <label
          for="passwordConf"
          class="text--label text--normal-f text--normal-w box"
          >Confirmation</label
        >
        <input
          type="password"
          id="passwordConf"
          name="passwordConf"
          autocomplete="new-password"
          required
          v-model="form.passwordConf"
          @input="passwordConfValidation()"
          class="input input--sign box text--normal-f text--light-w"
        />
        <span
          v-if="validator.passwordConf"
          class="text--normal-f text--bold-w text--error"
          >Mots de passe différents.</span
        >
      </div>
      <SubmitButton :label="label.submit" :disabled="disableSubmit" />
    </form>
  </div>
</template>

<script>
import SubmitButton from "../buttons/SubmitButton.vue";
// import trimAll from "../../scripts/triming";
import { mapActions } from "vuex";
import {
  validateEmail,
  validatePassword,
  validatePasswordConf,
  validateForm,
} from "../../scripts/validate";

export default {
  name: "FormSignup",
  el: "#formsignup",
  components: {
    // EmailInput,
    SubmitButton,
  },
  data() {
    return {
      label: {
        submit: "Inscription",
      },
      form: {
        email: "",
        password: "",
        passwordConf: "",
      },
      validator: {
        email: false,
        password: false,
        passwordConf: false,
      },
      disableSubmit: true,
    };
  },
  computed: {},
  methods: {
    emailValidation() {
      this.validator.email = validateEmail(this.form.email);
    },
    passwordValidation() {
      this.validator.password = validatePassword(this.form.password);
    },
    passwordConfValidation() {
      this.validator.passwordConf = validatePasswordConf(
        this.form.password,
        this.form.passwordConf
      );
    },
    submitValidation() {
      this.disableSubmit = validateForm(this.validator, this.form);
    },
    ...mapActions(["sign_up"]),
    signup() {
      this.sign_up(this.form);
    },
  },
};
</script>