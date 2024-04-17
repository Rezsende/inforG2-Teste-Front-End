<template>
    <div>
      <NavbarComponente />
      <CorpoComponente>
        <MenuComponente />
        <MainComponente>
         <h2>Pagina 1</h2>
        </MainComponente>
      </CorpoComponente>
    </div>
  </template>
  
  <script lang="ts">
  import NavbarComponente from '@/components/NavbarComponente.vue';
  import MenuComponente from '@/components/MenuComponente.vue';
  import CorpoComponente from '@/components/CorpoComponente.vue';
  import MainComponente from '@/components/MainComponente.vue';
 
  import { defineComponent } from 'vue';
  
  
  export default defineComponent({
  
    components: {
      NavbarComponente,
      CorpoComponente,
      MainComponente,
      MenuComponente,
     
      
    }
  });
  </script>