<template>
  <nav id="nav" class="ctn ctn--space-between nav" v-if="disabled">
    <router-link
      :to="pathToHome"
      class="link ctn"
      :class="{ linkActive: this.$route.name === pathToHome.name }"
      ><img
        class="icon"
        src="../assets/latest_news.svg"
        alt="Icône Actualités"
      /><span
        v-if="isLargeScreen"
        class="text--normal-f text--normal-w link--router"
        >Actualités</span
      ></router-link
    >
    <router-link
      :to="pathToCreatePost"
      class="link ctn"
      :class="{ linkActive: this.$route.name === pathToCreatePost.name }"
      ><img
        class="icon"
        src="../assets/create_post.svg"
        alt="Icône Créer Publication"
      /><span
        v-if="isLargeScreen"
        class="text--normal-f text--normal-w link--router"
        >Publier</span
      >
    </router-link>
    <router-link
      :to="pathToProfiles"
      class="link ctn"
      :class="{ linkActive: this.$route.name === pathToProfiles.name }"
    >
      <img class="icon" src="../assets/users.svg" alt="Icône Groupomaniens" />
      <span
        v-if="isLargeScreen"
        class="text--normal-f text--normal-w link--router"
        >Groupomaniens</span
      >
    </router-link>
    <router-link
      :to="pathToProfile"
      class="link ctn"
      :class="{ linkActive: this.$route.name === pathToProfile.name }"
    >
      <img class="icon" src="../assets/my_profile.svg" alt="Icône Mon Profil" />
      <span
        v-if="isLargeScreen"
        class="text--normal-f text--normal-w link--router"
        >Mon Profil</span
      >
    </router-link>
    <router-link to="/" @click="logout()" class="link ctn">
      <img class="icon" src="../assets/logout.svg" alt="Icône Logout" />
      <span
        v-if="isLargeScreen"
        class="text--normal-f text--normal-w link--router"
        >Déconnexion</span
      >
    </router-link>
  </nav>
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
    disabled() {
      return this.$store.getters.get_profile_status;
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