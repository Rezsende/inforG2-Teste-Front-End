<template>

  <div>
    

    <header>

      <div class="buton-toggle">
        <img class="img-togle" src="../assets/togle.png"/>
      </div>
      
      <div class="route-menu">
        <div>
          <span class="settings-label">Utilitarios</span>
        </div>
        <div>
          <span class="Manger">Manager</span>
        </div>
      </div>

    </header>
   <div class="body-main">
    <aside>section</aside>
    <main>Main</main>
   </div>

  </div>




</template>

<script lang="ts">

import axios from 'axios';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  setup() {
    
    onMounted(() => {
   

    


axios.get('https://api-manager-test.infog2.com.br.infog2.com.br/a/colaborador/?text=', {
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Token ${localStorage.getItem('token')}`
    
    }
})
.then(response => {
    console.log(response);

  
    // localStorage.setItem('token', response.data.token,);
    // router.push('/');

    
})
.catch(error => {
    console.log(error);
});


    });
  }
});


</script>


<style scoped>
header{ background: #0077FF;
height: 50px;
display: flex;
flex: 1;

}
aside{
background: #007AD6;
display: flex;
flex: 50px 100%;
height: calc(100vh - 50px);
}

.body-main{
display: flex;
}
main{
display: flex; 
flex: 1;
background: #ffffff;}


.buton-toggle{
display: flex;
 
 width: 56px;
 justify-content: start;
 align-items: center;
 
}
.route-menu{
  display: flex;
  flex: 1;
  align-items: center;

  justify-content: space-between;

}

.img-togle{
margin-left: 10px;  
height: 30px;
}

.Manger{
  color: #ffffff;
  margin-right: 20px;
  font-size: 20px;
}
.settings-label{
  margin-left: 50%;
  font-size: 20px;
  color: #ffffff;
}
</style>