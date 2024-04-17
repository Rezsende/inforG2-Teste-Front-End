<template>

  <!-- <div class="box-menu-icon">
    <div v-for="(item, index) in listaItens" :key="index" class="Card">
      <img class="img-card" :src="require(`../assets/${item.imagem}`)">
      <span class="description">{{ item.nome }}</span>
    </div>
  </div> -->
  <div class="box-menu-icon">
    <router-link v-for="(item, index) in listaItens" :key="index" :to="item.rota" class="Card">
      <img class="img-card" :src="require(`../assets/${item.imagem}`)">
      <span class="description">{{ item.nome }}</span>
    </router-link>
  </div>


</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { Item } from '@/Model/MenuModel';

export default defineComponent({
  name: 'SeuComponente',
  data() {
    return {
      listaItens: [
         { nome: 'Configuração', imagem: 'menu-01.png', rota: '/users'   },
        { nome: 'Usuário', imagem: 'menu-02.png', rota: '/users' },

        { nome: 'Permissões', imagem: 'menu-03.png', rota: '/users' },
        { nome: 'Motivo de Cancelamento', imagem: 'menu-04.png', rota: '/users' },
        { nome: 'Logs', imagem: 'menu-05.png', rota: '/users' },
        { nome: 'Segmentos', imagem: 'menu-06.png', rota: '/users' },
        { nome: 'Versões', imagem: 'menu-07.png', rota: '/users' },
        { nome: 'Feriados', imagem: 'menu-08.png', rota: '/users' },
        { nome: 'Laudos', imagem: 'menu-09.png', rota: '/users' },
        { nome: 'Mensagens Pré-definidas', imagem: 'menu-10.png', rota: '/users' },

       

      ] as Item[]
    };
  },

});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@900&display=swap');

* {

  font-family: 'Mulish', sans-serif;
  font-weight: 700;
}

.box-menu-icon {
  display: flex;
  flex-wrap: wrap;
  width: 1070px;
  height: 224px;
  gap: 10px;

  border-radius: 6px;
  margin: 122px 0 0 119px;

}

.description {
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  

}

.img-card {
  padding-top: 8px;
  width: 61px;
  height: 61px;
}


.Card {
  display: flex;
  flex-direction: column;
  width: 125px;
  height: 108px;
  background: #0077FF;
  border-radius: 6px;
  text-decoration: none;
  align-items: center;
}
</style>