<template>
  <div id="formsignin">
    <form @submit.prevent="signin()" @input="submitValidation()">
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
import SubmitButton from "../buttons/SubmitButton.vue";
import { mapState, mapActions, mapGetters } from "vuex";
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
  computed: {
    ...mapState({ localUser: "user" }),
    ...mapGetters({ getEmail: "GET_EMAIL" }),
  },
  methods: {
    emailValidation() {
      this.validator.email = validateEmail(this.form.email);
    },
    submitValidation() {
      this.disableSubmit = validateForm(this.validator, this.form);
    },
    ...mapActions({
      setEmail: "set_email",
      setUserid: "set_userid",
    }),
    signin() {
      this.axios
        .post("/signin", {
          email: this.form.email,
          password: this.form.password,
        })
        .then((res) => {
          this.setUserid(res.data.userId);
          this.setEmail(this.form.email);
        })
        .then(() => {
          console.log(this.localUser.user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
