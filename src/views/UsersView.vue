<template>
  <div>
    <NavbarComponente />
    <CorpoComponente>
      <MenuComponente />
      <MainComponente>



        <div class="box-list-user">

          <div class="box-add-user">
            <input type="text" />
            <input type="submit" />
          </div>


          <div v-for="(user, index) in userList" :key="index" class="list-user-api">

            <div class="name-perfil">
              <span class="name-perfil-span"> {{ user.nome }}</span>
              <span class="name-perfil-span"> {{ user.perfil_str }}</span>
            </div>
            
            <div class="status">
             <span class="span-status"> {{ user.status }} </span>
            </div>

            <div class="cnpj">
              {{ user.cpf_cnpj_formatado }}
            </div>

            
            <div class="andress">
              {{ user.endereco_residencial}}
            </div>

          </div>
        </div>


      </MainComponente>
    </CorpoComponente>
  </div>
</template>

<script lang="ts">
import NavbarComponente from '@/components/NavbarComponente.vue';
import MenuComponente from '@/components/MenuComponente.vue';
import CorpoComponente from '@/components/CorpoComponente.vue';
import MainComponente from '@/components/MainComponente.vue';
import axios from 'axios';
import { defineComponent, ref, onMounted } from 'vue';
import { Users } from '@/Model/UserList';

export default defineComponent({
  components: {
    NavbarComponente,
    CorpoComponente,
    MenuComponente,
    MainComponente
  },
  setup() {
    const userList = ref<Users[]>([]);

    onMounted(() => {
      axios.get('https://api-manager-test.infog2.com.br.infog2.com.br/a/colaborador/?text=', {
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('token')}`
        }
      })
        .then(response => {
          userList.value = response.data.results;
        })
        .catch(error => {
          console.error(error);
        });
    });

    return {
      userList
    };
  }
});
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@900&display=swap');

* {
   
    font-family: 'Mulish', sans-serif;
    font-weight: 700px;
}

.box-list-user {

  width: 97%;
  margin-top: 28px;
  margin-left: 10px;
  height: 90vh;
   overflow-x: hidden;
 
  white-space: nowrap; 
}

.list-user-api {
  display: flex;
  margin-top: 10px;
  height: 80px;
  align-items: center;
  border: 1px solid rgb(19, 19, 18);

  
}

.name-perfil-span{
  margin-left: 30px;
  color: #302F2F;
 
}
.name-perfil {

  display: flex;
  flex: 2;
  flex-direction: column;
  font-size: 14px;
 
}
.status{
  display: flex;
  flex:1;
  justify-content: center;
  font-size: 14px;

 
  

}
.span-status{
  color: #038868;
  background-color: #AEF5E4;
  padding: 10px;
  border-radius: 5px;
}

.cnpj{
  display: flex;
  flex: 3;
  background: rgb(91, 192, 8);
}
.andress{
  display: flex;
  flex: 3;
  
  background: rgb(55, 6, 230);
}
</style>
