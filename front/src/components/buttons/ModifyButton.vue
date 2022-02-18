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
    },
    label: {
      type: String,
      default: "Modifier",
    },
  },
};
</script>