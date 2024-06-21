<template>
    <div>
      <h1>Productos</h1>
      <ul>
        <li v-for="producto in productos" :key="producto.id">
          {{ producto.nombre }} - ${{ producto.precio }}
        </li>
      </ul>
    </div>
  </template>

  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        productos: []
      };
    },
    mounted() {
      axios.get('/api/productos')
        .then(response => {
          this.productos = response.data;
        })
        .catch(error => {
          console.error("There was an error fetching the products!", error);
        });
    }
  };
  </script>
