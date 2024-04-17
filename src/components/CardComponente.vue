<template>
    <div class="Card">
      <h2>{{ nome }}</h2>
      <img :src="imagem" alt="Imagem">
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Card',
    props: {
      nome: {
        type: String,
        required: true
      },
      imagem: {
        type: String,
        required: true
      }
    }
  });
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente, se necessário */
  </style>
  