<template>
  <div>{{ greeting }} {{ who }}</div>
</template>
<script>
export default {
  props: {
    greeting: {
      type: String,
      required: false,
      default: "Hello",
    },
    who: {
      type: String,
      required: false,
      default: "Vuejs",
    },
  },
};
</script>
