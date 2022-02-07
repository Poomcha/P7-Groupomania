<template>
  <div id="profile">
    <Nav></Nav>
    <Sidebar :sidebar_items="this.sidebar_items"></Sidebar>
    <CardProfile
      v-if="!updateProfile && profileFilled"
      :profilePicURL="
        getProfile.profilePictureUrl ? profile.profilePictureUrl : undefined
      "
      :firstName="getProfile.firstName"
      :lastName="getProfile.lastName"
      :position="getProfile.position ? profile.position : undefined"
      :description="getProfile.description ? profile.description : undefined"
    ></CardProfile>

    <FormProfile v-else></FormProfile>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import FormProfile from "../components/forms/FormProfile.vue";
import CardProfile from "../components/cards/CardProfile.vue";
import Sidebar from "../components/Sidebar.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Profile",
  el: "#profile",
  data() {
    return {
      sidebar_items: {
        myInfos: {
          label: "Mes informations",
          method: this.goToInfos,
        },
        updateProfile: {
          label: "Modifier mon profil",
          method: this.goToUpdateProfile(),
        },
        updatePwd: {
          label: "Modifier mon mot de passe",
          method: this.goToUpdatePwd,
        },
      },
    };
  },
  components: { Nav, Sidebar, CardProfile, FormProfile },
  computed: {
    ...mapGetters([
      "get_update_status",
      "get_user_profile",
      "get_profile_status",
    ]),
    updateProfile() {
      return this.get_update_status;
    },
    getProfile() {
      return this.get_user_profile.profile;
    },
    profileFilled() {
      return this.get_profile_status;
    },
  },
  methods: {
    ...mapActions(["commit_update_status"]),
    goToInfos() {
      return "goToInfos";
    },
    goToUpdateProfile() {
      return this.commit_update_status;
    },
    goToUpdatePwd() {
      return "goToUpdatePwd";
    },
  },
};
</script>