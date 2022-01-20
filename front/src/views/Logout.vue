<template>
  <div class="loggout">
    <button @click="logout()">Loggout</button>
  </div>
</template>
<script>
export default {
  name: "Loggout",
  methods: {
    logout() {
      fetch("http://localhost:3000/logout", {
        method: "DELETE",
      });
    },
  },
};
</script>