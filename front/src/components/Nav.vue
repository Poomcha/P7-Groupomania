<template>
  <div id="nav">
    <div v-if="isLogged">
      <router-link to="home">Accueil</router-link>
      <router-link to="loggout">Déconnexion</router-link>
    </div>
    <div v-else>
      <router-link to="signin">Connexion</router-link>
      <router-link to="signup">Inscription</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Nav",
  el: "#nav",
  data() {
    return {
      isLogged: false,
    };
  },
  created() {},
};
</script>