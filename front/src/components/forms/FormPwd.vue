<template>
  <div id="form-pwd">
    <form
      class="ctn ctn--column ctn--space-between"
      v-if="!success"
      @submit.prevent="changePwd()"
      @input="submitValidation()"
    >
      <div
        v-if="!isAdminRoute"
        class="text--normal-f text--normal-w text--label ctn--column input-wrap"
      >
        <label for="oldPassword">Ancien mot de passe</label>
        <input
          class="input text--normal-f text--light-w"
          type="password"
          id="oldPassword"
          name="oldPassword"
          autocomplete="password"
          required
          v-model="form.oldPassword"
        />
      </div>
      <div
        class="text--normal-f text--normal-w text--label ctn--column input-wrap"
      >
        <label for="password">Nouveau mot de passe</label>
        <input
          class="input text--normal-f text--light-w"
          type="password"
          id="password"
          name="password"
          autocomplete="new-password"
          required
          v-model="form.password"
          @input="passwordValidation()"
        />
        <span v-if="validator.password"
          >Mot de passe invalide, doit contenir au moins 1 lettre majuscule, une
          miniscule, un chiffre, un caractère spécial et entre 8 et 16
          caractères.</span
        >
      </div>
      <div
        class="text--normal-f text--normal-w text--label ctn--column input-wrap"
      >
        <label for="passwordConf">Confirmez votre mot de passe</label>
        <input
          class="input text--normal-f text--light-w"
          type="password"
          id="passwordConf"
          name="passwordConf"
          autocomplete="new-password"
          required
          v-model="form.passwordConf"
          @input="passwordConfValidation()"
        />
        <span v-if="validator.passwordConf">Mots de passe différents.</span>
      </div>
      <SubmitButton :label="label.submit" :disabled="disableSubmit" />
    </form>
    <p v-else>Mot de passe modifié avec succès !</p>
  </div>
</template>

<script>
// import trimAll from "../../scripts/triming"
import {
  validatePassword,
  validatePasswordConf,
  validateForm,
} from "../../scripts/validate";
import SubmitButton from "../buttons/SubmitButton.vue";
import { mapActions } from "vuex";

export default {
  name: "FormPwd",
  el: "#form-pwd",
  components: {
    SubmitButton,
  },
  data() {
    return {
      label: {
        submit: "Changer le mot de passe",
      },
      form: {
        oldPassword: "",
        password: "",
        passwordConf: "",
      },
      validator: {
        password: false,
        passwordConf: false,
      },
      disableSubmit: true,
      success: false,
    };
  },
  computed: {
    isAdminRoute() {
      return this.$route.name === "moderate-profile" ? true : false;
    },
  },
  methods: {
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
      if (this.$store.getters.is_moderator) {
        this.disableSubmit = validateForm(this.validator, {
          password: this.password,
          passwordConf: this.passwordConf,
        });
      } else {
        this.disableSubmit = validateForm(this.validator, this.form);
      }
    },
    ...mapActions(["change_pwd"]),
    changePwd() {
      this.change_pwd(this.form)
        .then(() => {
          this.success = true;
        })
        .catch(() => {
          this.success = false;
        });
    },
  },
};
</script>