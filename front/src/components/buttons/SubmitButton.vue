<template>
  <div id="submitButton">
    <input type="submit" :value="label" />
  </div>
</template>

<script>
export default {
  name: "SubmitButton",
  el: "#submitButton",
  props: {
    label: String,
  },
};
</script>