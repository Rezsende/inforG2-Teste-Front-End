<template>

  <div>
    

    <header>nave</header>
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
  /* width: 100%; */
  flex: 1;
  background: #c54f0a;}

</style>