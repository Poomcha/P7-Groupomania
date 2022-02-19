<template>
  <div id="my-profile">
    <Sidebar :sidebar_items="this.sidebar_items"></Sidebar>
    <section
      id="change-profile"
      v-if="links.changeProfile || !get_profile_status"
    >
      <h3>Modification du profil</h3>
      <FormProfile
        @profileupdated="goToProfil()"
        :oldFirstName="get_user_profile.firstName"
        :oldLastName="get_user_profile.lastName"
        :oldPosition="get_user_profile.position"
        :oldDescription="get_user_profile.description"
        :oldImgURL="get_user_profile.profilPictureURL"
      ></FormProfile>
    </section>
    <section id="mes-infos" v-else-if="links.myInfos">
      <h3>Mes informations</h3>
      <ul>
        <li>Email : {{ get_user_email }}</li>
      </ul>
    </section>
    <section id="change-pwd" v-else-if="links.changePwd">
      <h3>Modification du mot de passe</h3>
      <FormPwd></FormPwd>
    </section>
    <section id="my-posts" v-else-if="links.myPosts">
      <h3>Mes publications</h3>
      <MyPosts></MyPosts>
    </section>
    <section id="my-coms" v-else-if="links.myComs">
      <h3>Mes commentaires</h3>
      <CardPost
        v-for="post in get_com_post_from_user(get_profile_id)"
        :key="post.id"
        :id="post.id"
        :creatorFirstName="post.Profile.firstName"
        :creatorLastName="post.Profile.lastName"
        :creatorImgUrl="post.Profile.profilPictureURL"
        :creatorId="post.Profile.userId"
        :title="post.title"
        :content="post.text"
        :imgUrl="post.postPictureURL"
        :nbOfCom="get_nb_of_com(post.id)"
      ></CardPost>
    </section>
    <section id="profile" v-else>
      <h3>Mon profil</h3>
      <CardProfile
        :userId="get_user_profile.userId"
        :profilePicURL="
          get_user_profile.profilPictureURL
            ? get_user_profile.profilPictureURL
            : undefined
        "
        :firstName="get_user_profile.firstName"
        :lastName="get_user_profile.lastName"
        :position="
          get_user_profile.position ? get_user_profile.position : undefined
        "
        :description="
          get_user_profile.description
            ? get_user_profile.description
            : undefined
        "
      ></CardProfile>
    </section>
    <div
      id="back-link-ctn"
      v-if="seeBackLink && !this.links.myProfile && get_profile_status"
    >
      <a href="" @click.prevent="back()">{{ backlink }} </a>
    </div>
  </div>
</template>

<script>
import FormProfile from "../components/forms/FormProfile.vue";
import CardProfile from "../components/cards/CardProfile.vue";
import Sidebar from "../components/Sidebar.vue";
import FormPwd from "../components/forms/FormPwd.vue";
import MyPosts from "../components/MyPosts.vue";
import CardPost from "../components/cards/CardPost.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "MyProfile",
  el: "#my-profile",
  data() {
    return {
      sidebar_items: {
        myProfile: {
          label: "Mon profil",
          method: this.goToProfil,
        },
        myInfos: {
          label: "Mes informations",
          method: this.goToInfos,
        },
        myPosts: {
          label: "Mes publications",
          method: this.goToMyPosts,
        },
        myComs: {
          label: "Mes publications commentées",
          method: this.goToMyComs,
        },
        updateProfile: {
          label: "Modifier mon profil",
          method: this.goToUpdateProfile,
        },
        updatePwd: {
          label: "Modifier mon mot de passe",
          method: this.goToUpdatePwd,
        },
      },
      backlink: "< Retour",
      links: {
        myProfile: true,
        changePwd: false,
        changeProfile: false,
        myInfos: false,
        myPosts: false,
      },
    };
  },
  components: {
    Sidebar,
    CardProfile,
    FormProfile,
    FormPwd,
    MyPosts,
    CardPost,
  },
  computed: {
    ...mapGetters([
      "get_update_status",
      "get_user_profile",
      "get_profile_status",
      "get_user_email",
      "get_user_id",
      "get_com_post_from_user",
      "get_profile_id",
      "get_nb_of_com",
    ]),
    seeBackLink() {
      return Object.values(this.links).find((value) => value);
    },
  },
  methods: {
    ...mapActions(["commit_update_status"]),
    goToProfil() {
      Object.keys(this.links).forEach((key) => (this.links[key] = false));
      this.links.myProfile = true;
    },
    goToInfos() {
      Object.keys(this.links).forEach((key) => (this.links[key] = false));
      this.links.myInfos = true;
    },
    goToUpdateProfile() {
      Object.keys(this.links).forEach((key) => (this.links[key] = false));
      this.links.changeProfile = true;
    },
    goToUpdatePwd() {
      Object.keys(this.links).forEach((key) => (this.links[key] = false));
      this.links.changePwd = true;
    },
    goToMyPosts() {
      Object.keys(this.links).forEach((key) => (this.links[key] = false));
      this.links.myPosts = true;
    },
    back() {
      Object.keys(this.links).forEach((key) => (this.links[key] = false));
    },
    goToMyComs() {
      Object.keys(this.links).forEach((key) => (this.links[key] = false));
      this.links.myComs = true;
    },
  },
};
</script>