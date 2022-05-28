<template>
  <div class="container">
    <div class="productos">
      <div class="producto" v-for="producto in productos" :key="producto.id">
        <div class="nombre-producto">
          {{ producto.nombre }}
        </div>
        <div>
          <input type="number" :key="producto.id" v-model="producto.cantidad" />
          <button @click="agregarProducto(producto)">Agregar al carrito</button>
        </div>
      </div>
    </div>
    <div class="carrito">
      <p>Hay {{ totalProductos }} productos en el carrito</p>
      <p>El total a pagar es: ${{ total }}</p>
      <button @click="limpiarCarrito">Limpiar carrito</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarritoDeCompras",
  data() {
    return {
      productos: [
        { id: 1, nombre: "Monitor", precio: 1200, cantidad: 1 },
        { id: 2, nombre: "Teclado", precio: 850, cantidad: 1 },
        { id: 3, nombre: "Microfono", precio: 800, cantidad: 1 },
      ],
      carrito: [],
      totalProductos: 0,
      total: 0,
    };
  },
  methods: {
    agregarProducto: function (producto) {
      if (this.carrito.findIndex((p) => p.id === producto.id) === -1) {
        this.carrito.push(producto);
        this.totalProductos++;
      }

      this.total += producto.precio * producto.cantidad;
    },
    limpiarCarrito: function () {
      this.carrito = [];
      this.totalProductos = 0;
      this.total = 0;
    },
  },
};
</script>

<style lang="sass" scoped>
*
    font-size: 1.3rem

p
  margin-top: 0

.container
    display: flex

.producto
    display: flex
    justify-content: space-between
    width: 400px

.nombre-producto
    width: 150px
    text-align: left

input[type=number]
    max-width: 30px
</style>
