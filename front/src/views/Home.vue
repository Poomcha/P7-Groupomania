<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
fetch("http://localhost:3000/home", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}).then((res) => {
  console.log(res);
});

export default {
  name: "Home",
};
</script>
