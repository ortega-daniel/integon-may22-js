<template>
  <div class="container">
    <h1>Shop Watcher</h1>
    <div>
      Black Friday sale
      <strike>Was {{ oldDiscount }}%</strike>
      <strong> Now {{ discount }}% OFF</strong>
    </div>
    <br />
    <a href="#" @click="updateDiscount">Increase Discount!</a>
    <br />
    <h1>Deep Watcher</h1>
    <div>
      <h4>{{ product.label }}</h4>
      <h5>${{ product.price }} (${{ discountDeep }} Off)</h5>
    </div>
    <a href="#" @click="updatePrice">Reduce Price!</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oldDiscount: 0,
      discount: 5,
      discountDeep: 0,
      product: {
        price: 25,
        label: "Blue juice",
      },
    };
  },
  methods: {
    updateDiscount() {
      this.discount = this.discount + 5;
    },
    updatePrice() {
      if (this.product.price < 1) return;
      this.product.price--;
    },
  },
  watch: {
    discount(newValue, oldValue) {
      this.oldDiscount = oldValue;
    },
    "product.price"() {
      this.discountDeep++;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin: 0;
}
a {
  display: inline-block;
  background: rgb(235, 50, 50);
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}
</style>
