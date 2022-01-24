<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <span v-if="isLoggedIn"><a @click="logout()">Logout</a></span>
    <span v-else>
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/signin">Signin</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "Nav",
  
};
</script>