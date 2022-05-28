<template lang="html">
  <div>
    <p>{{ x }} {{ op }} {{ y }} = {{ result }}</p>
    <p>{{ mayusculas ? texto.toUpperCase() : text }}</p>
    <div>
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
      <ul>
        <li>{{ items[0] }}</li>
        <li>{{ items[1] }}</li>
        <li>{{ items[2] }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatematicoComponent",
  props: {
    x: Number,
    y: Number,
    op: String,
  },
  data() {
    return {
      result: 0,
      texto: "texto de ejemplo",
      mayusculas: true,
      title: "My list component!",
      subtitle: "Vue JS basics",
      items: ["Item 1", "Item 2", "Item 3"],
    };
  },
  methods: {
    executeOperation: function () {
      switch (this.op) {
        case "+":
          this.result = this.x + this.y;
          break;
        case "-":
          this.result = this.x - this.y;
          break;
        case "*":
          this.result = this.x * this.y;
          break;
        case "/":
          this.result = this.x / this.y;
          break;
        default:
          break;
      }
    },
  },
  watch: {
    $props: {
      handler() {
        this.executeOperation();
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/typography.scss";
</style>
