<template>
    <div>
      <NavbarComponente/>
  
      <CorpoComponente>
        <MenuComponente/>
        <main>
         Usuarios
        </main>
      </CorpoComponente>
    </div>
  </template>
  
  <script lang="ts">
  import NavbarComponente from '@/components/NavbarComponente.vue';
  import MenuComponente from '@/components/MenuComponente.vue'; 
  import CorpoComponente from '@/components/CorpoComponente.vue';
  
  export default {
    components: {
      NavbarComponente,
      CorpoComponente,
      MenuComponente,
    }
  }
  </script>
  
  <style scoped>
  main {
    display: flex;
    flex: 1;
    background: #ffffff;
    overflow: auto;
  }
  </style>
  