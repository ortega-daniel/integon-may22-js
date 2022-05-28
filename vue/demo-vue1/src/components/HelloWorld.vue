<template>
  <div>
    <div>Mi primer componente {{ msg }}</div>
    <div>
      <Card>
        <template #image>
          <img src="https://picsum.photos/id/1015/300" />
        </template>
        <template #title>
          <h2>My Holiday picture</h2>
        </template>
        <template #description>
          <p>Here I can describe the contents of the picture.</p>
          <p>For example what we can see in the photo is a nice landscape.</p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    Card,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
