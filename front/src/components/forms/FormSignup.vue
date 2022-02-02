<template>
  <div id="formsignup">
    <form @submit.prevent="signup()">
      <div>
        <label for="email">Email : </label>
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
        <label for="password">Mot de Passe : </label>
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
      <SubmitButton :label="submitLabel" />
    </form>
  </div>
</template>

<script>
// import EmailInput from "../inputs/EmailInput.vue";
import SubmitButton from "../buttons/SubmitButton.vue";
// import axios from "axios";
import router from "../../router";

export default {
  name: "FormSignup",
  el: "#formsignup",
  components: {
    // EmailInput,
    SubmitButton,
  },
  data() {
    return {
      submitLabel: "Inscription",
      emailInputLabel: "Email",
      email: "",
      password: "",
      passwordConf: "",
    };
  },
  computed: {},
  methods: {
    signup() {
      this.axios
        .post("/signup", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          router.push({ name: "profile", params: { userId: res.data.userId } });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>