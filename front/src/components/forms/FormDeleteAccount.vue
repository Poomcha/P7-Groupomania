<template>
  <div id="delete-account">
    <p>
      Êtes-vous sûr de vouloir supprimer votre compte ? Attention cette action
      est irréversible !
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
