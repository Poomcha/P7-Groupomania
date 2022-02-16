<template>
  <div id="nav">
    <router-link :to="pathToHome">Fil d'Actualité </router-link>
    <router-link :to="pathToCreatePost">Créer un Post </router-link>
    <router-link :to="pathToProfiles">Groupomaniens </router-link>
    <router-link :to="pathToProfile">Mon Profil </router-link>
    <router-link to="/" @click="logout()">Déconnexion</router-link>
  </div>
</template>

<script>
export default {
  name: "Nav",
  el: "#nav",
  data() {
    return {
      pathToHome: { name: "home" },
      pathToProfile: {
        name: "my-profile",
        params: { userId: this.$store.getters.get_user_id },
      },
      pathToCreatePost: { name: "create-post" },
      pathToProfiles: { name: "profiles" },
    };
  },
  computed: {},
  created() {},
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>