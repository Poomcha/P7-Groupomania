<template>
  <div id="profile">
    <FormProfile></FormProfile>
  </div>
</template>

<script>
import FormProfile from "../components/forms/FormProfile.vue";

export default {
  name: "Profile",
  el: "#profile",
  components: { FormProfile },
};
</script>