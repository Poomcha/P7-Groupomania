<template>
  <div id="emailInput">
    <label for="email">{{ label }}</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="exemple@groupomania.com"
      required
      autocomplete="email"
      v-model="email"
      @change="$emit('change', $event.target.email)"
    />
  </div>
</template>

<script>
export default {
  name: "EmailInput",
  el: "#emailInput",
  data() {
    return {
      email: "",
    };
  },
  emits: ["change"],
  props: {
    label: { type: String, required: true },
    value: { type: String },
  },
  methods: {},
  setup() {},
};
</script>