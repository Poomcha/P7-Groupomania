<template>
  <div id="delete-button">
    <button @click="deleteThis">{{ label }}</button>
  </div>
</template>
 <script>
export default {
  name: "DeleteButton",
  el: "#delete-button",
  props: {
    deleteThis: {
      type: Function,
      required: true,
    },
    label: {
      type: String,
      default: "Supprimer",
    },
  },
};
</script>