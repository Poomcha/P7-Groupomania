<template>
  <div id="profil">
    <p>Page de profil</p>
    <button @click="goHome()">Go Home</button>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "Profil",
  methods: {
    goHome() {
      router.push({ name: "Home" });
    },
  },
};
</script>
