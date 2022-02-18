<template>
  <div id="moderate-profile">
    <ModifyButton
      :label="label.modifyPwd"
      @click="modifyPwd()"
    ></ModifyButton>
    <ModifyButton
      :label="label.modifyProfile"
      @click="modifyProfile()"
    ></ModifyButton>
    <DeleteButton :label="label.delete" @click="deleteProfile"></DeleteButton>
    <CardProfile
      :userId="profile.userId"
      :email="profile.User.email"
      :firstName="profile.firstName"
      :lastName="profile.lastName"
      :position="profile.position"
      :description="profile.description"
      :profilePicURL="profile.profilPictureURL"
    ></CardProfile>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import ModifyButton from "../components/buttons/ModifyButton.vue";
import DeleteButton from "../components/buttons/DeleteButton.vue";
import CardProfile from "../components/cards/CardProfile.vue";
export default {
  name: "ModerateProfile",
  el: "#moderate-profile",
  components: {
    CardProfile,
    ModifyButton,
    DeleteButton,
  },
  data() {
    return {
      userId: this.$route.params.userId,
      label: {
        modifyPwd: "Modifier le mot de passe",
        modifyProfile: "Modifier le profil",
        delete: "Supprimer le profil",
      },
    };
  },
  computed: {
    ...mapGetters(["get_one_local_profile", "is_moderator"]),
    profile() {
      return this.get_one_local_profile(this.userId);
    },
  },
  methods: {
    ...mapActions(["delete_user"]),
    modifyProfile() {
      console.log("somethng");
    },
    modifyPwd() {},
    deleteProfile() {
      this.delete_user(this.userId);
    },
  },
};
</script>