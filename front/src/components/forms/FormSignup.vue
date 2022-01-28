<template>
  <div id="formSignup">
    <form>
      <div>
        <label for="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          autocomplete="email"
          required
          v-model="email"
        />
      </div>
      <div>
        <label for="password">Mot de Passe :</label>
        <input
          type="password"
          id="password"
          name="password"
          autocomplete="new-password"
          required
          v-model="password"
        />
      </div>
      <div>
        <label for="passwordConf">Confirmez votre mot de passe :</label>
        <input
          type="password"
          id="passwordConf"
          name="passwordConf"
          autocomplete="new-password"
          required
          v-model="passwordConf"
        />
      </div>
      <SubmitButton :label="label" @click="signup()" />
    </form>
  </div>
</template>

<script>
import SubmitButton from "../buttons/SubmitButton.vue";
import axios from "axios";
import router from "../../router";

export default {
  name: "FormSignup",
  el: "#formSignup",
  components: {
    SubmitButton,
  },
  data() {
    return {
      label: "Inscription",
      email: "",
      password: "",
      passwordConf: "",
    };
  },
  computed: {},
  methods: {
    signup() {
      axios
        .post("/signup", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          router.push({ name: "profile" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>