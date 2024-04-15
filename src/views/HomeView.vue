<template>

  <div>
    <h2>Home Page</h2>


    <ul>
      <p>nome</p>
    </ul>

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
      'Authorization':'Token 8d23698c5b30fe6515331ef1ef40e7a903169829'
    
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

<style></style>