<template>
  <div>
    <textarea
      cols="30"
      rows="5"
      placeholder="Type here"
      v-model="text"
      @input="countChars"
    ></textarea>
    <p>Has escrito {{ charCount }} caracteres</p>
  </div>
</template>

<script>
export default {
  name: "CuentaCaracteres",
  beforeCreate() {
    console.log("Before create");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("Before mount");
  },
  mounted() {
    this.countChars();
  },
  data() {
    return {
      text: "Initial text",
      charCount: 0,
    };
  },
  methods: {
    countChars: function () {
      this.charCount = this.text.length;
    },
  },
};
</script>
