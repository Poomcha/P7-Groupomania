<template>
  <div id="profile">
    <Nav></Nav>
    <FormProfile></FormProfile>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import FormProfile from "../components/forms/FormProfile.vue";

export default {
  name: "Profile",
  el: "#profile",
  components: { FormProfile, Nav },
};
</script>