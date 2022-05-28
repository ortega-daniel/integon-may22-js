<template>
  <button @click="btnClick">Click me</button>
</template>

<script>
export default {
  data() {
    return {
      message: "Mensaje del evento",
    };
  },
  methods: {
    btnClick: function () {
      this.$emit("ButtonClick", this.message);
    },
  },
};
</script>
