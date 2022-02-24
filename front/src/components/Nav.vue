<template>
  <div id="nav" class="ctn ctn--space-between nav">
    <router-link :to="pathToHome" class="link ctn"
      ><img class="icon" src="../assets/latest_news.svg" alt="" /><span
        v-if="isLargeScreen"
        class="text--normal-f text--normal-w link--router"
        >Actualités</span
      ></router-link
    >
    <router-link :to="pathToCreatePost" class="link ctn"
      ><img class="icon" src="../assets/create_post.svg" alt="" /><span
        v-if="isLargeScreen"
        class="text--normal-f text--normal-w link--router"
        >Publier</span
      >
    </router-link>
    <router-link :to="pathToProfiles" class="link ctn">
      <img class="icon" src="../assets/users.svg" alt="" />
      <span
        v-if="isLargeScreen"
        class="text--normal-f text--normal-w link--router"
        >Groupomaniens</span
      >
    </router-link>
    <router-link :to="pathToProfile" class="link ctn">
      <img class="icon" src="../assets/my_profile.svg" alt="" />
      <span
        v-if="isLargeScreen"
        class="text--normal-f text--normal-w link--router"
        >Mon Profil</span
      >
    </router-link>
    <router-link to="/" @click="logout()" class="link ctn">
      <img class="icon" src="../assets/logout.svg" alt="" />
      <span
        v-if="isLargeScreen"
        class="text--normal-f text--normal-w link--router"
        >Déconnexion</span
      >
    </router-link>
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
  computed: {
    isLargeScreen() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {},
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>