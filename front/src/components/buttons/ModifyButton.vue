<template>
  <div id="modify-button">
    <button @click="modifyThis">{{ label }}</button>
  </div>
</template>
 <script>
export default {
  name: "modifyButton",
  el: "#modify-button",
  props: {
    modifyThis: {
      type: Function,
      required: true,
    },
    label: {
      type: String,
      default: "Modifier",
    },
  },
};
</script>