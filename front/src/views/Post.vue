<template>
  <div id="post">
    <div
      id="controllers"
      v-if="get_local_post.Profile.userId === get_user_id || is_moderator"
    >
      <ModifyButton :modifyThis="modifyPost"></ModifyButton>
      <DeleteButton :deleteThis="deletePost"></DeleteButton>
    </div>
    <Date type="POST" :id="get_local_post.id"></Date>
    <div>
      <a href="" @click.prevent="goToProfile()">
        <div>
          <img
            :src="get_local_post.Profile.profilPictureURL"
            alt="Profil Picture"
            width="100"
          />
        </div>
        <div>
          <span>{{ get_local_post.Profile.firstName }}</span>
        </div>
        <div>
          <span>{{ get_local_post.Profile.lastName }}</span>
        </div>
      </a>
    </div>
    <div>
      <div id="post-img-ctn">
        <img
          :src="get_local_post.postPictureURL"
          alt="Post Picture"
          width="100"
        />
      </div>
      <div>
        <div id="title-post-ctn">{{ get_local_post.title }}</div>
        <div id="content-post-ctn">{{ get_local_post.text }}</div>
      </div>
    </div>
    <div>{{ get_com_number_for_post(get_local_post.id) }} Commentaires</div>
    <div>
      <div>
        <FluxComments></FluxComments>
      </div>
      <div>
        <FormCom></FormCom>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FluxComments from "../components/flux/FluxComments.vue";
import FormCom from "../components/forms/FormCom.vue";
import Date from "../components/Date.vue";
import ModifyButton from "../components/buttons/ModifyButton.vue";
import DeleteButton from "../components/buttons/DeleteButton.vue";
export default {
  name: "Post",
  el: "#post",
  components: { FormCom, FluxComments, Date, ModifyButton, DeleteButton },
  beforeCreate() {
    this.$store.dispatch("commit_local_post", this.$route.params.postId);
  },
  created() {},
  data() {},
  computed: {
    ...mapGetters([
      "get_local_post",
      "get_local_coms",
      "get_user_id",
      "get_com_number_for_post",
    ]),
  },
  methods: {
    ...mapActions(["get_one_profile", "get_profile_id", "get_user_id"]),
    goToProfile() {
      this.$store.dispatch("go_to_profile", {
        local_profile_id: this.get_profile_id,
        local_user_id: this.get_user_id,
        target_id: this.get_local_post.profileId,
      });
    },
    deletePost() {
      this.$store.dispatch("delete_my_post", this.postId);
      if (this.$route.name === "post") {
        this.$router.push({ name: "home" });
      }
      this.deleted = true;
    },
    modifyPost() {
      this.$router.push({
        name: "modify-post",
        params: { postId: this.get_local_post.id },
      });
    },
  },
};
</script>