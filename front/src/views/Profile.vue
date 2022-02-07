<template>
  <div id="profile">
    <Nav></Nav>
    <CardProfile
      v-if="!updateProfile && profileFilled"
      :profilePicURL="getProfile.profilePictureUrl ? profile.profilePictureUrl : undefined"
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
import { mapGetters } from "vuex";
export default {
  name: "Profile",
  el: "#profile",
  components: { Nav, CardProfile, FormProfile },
  computed: {
    ...mapGetters(["get_update_status", "get_user_profile", "get_profile_status"]),
    updateProfile() {
      return this.get_update_status;
    },
    getProfile() {
      return this.get_user_profile.profile;
    },
    profileFilled() {
      return this.get_profile_status;
    }
  },
};
</script>