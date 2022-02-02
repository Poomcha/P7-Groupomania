<template>
  <div id="formsignin">
    <!-- <span>{{ getEmail }}</span> -->
    <form @submit.prevent="signin()">
      <div>
        <label for="email">E-mail : </label>
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
      <SubmitButton :label="submitLabel" />
    </form>
  </div>
</template>

<script>
import SubmitButton from "../buttons/SubmitButton.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "FormSignin",
  el: "#formsignin",
  components: {
    SubmitButton,
  },
  data() {
    return {
      submitLabel: "Connexion",
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState({ localUser: "user" }),
    ...mapGetters({ getEmail: "GET_EMAIL" }),
  },
  methods: {
    ...mapActions({
      setEmail: "set_email",
      setUserid: "set_userid",
    }),
    signin() {
      this.axios
        .post("/signin", { email: this.email, password: this.password })
        .then((res) => {
          this.setUserid(res.data.userId);
          this.setEmail(this.email);
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
