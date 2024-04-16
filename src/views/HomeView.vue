<template>

  

      <NavbarComponente/>
  
      <CorpoComponente>
        <MenuComponente/>
        <MainComponente>
          <div class="box-menu-icon">

          </div>
        </MainComponente>
      </CorpoComponente>


    

</template>

<script lang="ts">
  import NavbarComponente from '@/components/NavbarComponente.vue';
  import MenuComponente from '@/components/MenuComponente.vue'; 
  import CorpoComponente from '@/components/CorpoComponente.vue';
  import MainComponente  from '@/components/MainComponente.vue';
  export default {
    components: {
      NavbarComponente,
      CorpoComponente,
      MainComponente,
      MenuComponente,
    }
  }
  </script>


<style scoped>



.box-menu-icon{
  width: 1056px;
  height: 224px;
  background: red;
  border-radius: 6px;
  margin: 122px 0 0 119px;
}




</style>