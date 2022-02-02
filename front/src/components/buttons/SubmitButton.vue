<template>
  <div id="submitbutton">
    <input type="submit" :value="label" />
  </div>
</template>

<script>
export default {
  name: "SubmitButton",
  el: "#submitbutton",
  props: {
    label: String,
  },
};
</script>