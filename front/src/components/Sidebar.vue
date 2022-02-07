<template>
  <div id="sidebar">
      
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  el: "#sidebar",
  data() {
    return {};
  },
  computed: {
    numOfLink() {
      return Object.values(sidebar_items).length;
    },
  },
  props: {
    sidebar_items: {
      type: Object,
      required: true,
    },
  },
};
</script>