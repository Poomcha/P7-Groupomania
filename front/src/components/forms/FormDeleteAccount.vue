<template>
  <div id="delete-account" class="ctn ctn--column ctn--space-between">
    <p class="text--normal-w text--warning ctn--column input-wrap text--center">
      Êtes-vous sûr de vouloir supprimer votre compte ?<br />
      Attention cette action est irréversible !
    </p>
    <form @submit="deleteAccount()">
      <SubmitButton :label="this.label.delete"></SubmitButton>
    </form>
  </div>
</template>
<script>
import SubmitButton from "../buttons/SubmitButton.vue";
export default {
  name: "DeleteAccount",
  el: "#delete-account",
  components: {
    SubmitButton,
  },
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      label: {
        delete: "Supprimer",
      },
    };
  },
  methods: {
    deleteAccount() {
      this.$store.dispatch("delete_user", this.userId);
    },
  },
};
</script>
