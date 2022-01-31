<template>
  <div id="formProfile">
    <span>{{ userId }}</span>
  </div>
</template>

<script>
import SubmitButton from "../buttons/SubmitButton.vue";

export default {
  name: "FormProfile",
  el: "#formProfile",
  data() {
    return {
      userId: document.cookie,
    };
  },
  components: {
    SubmitButton,
  },
};
</script>
