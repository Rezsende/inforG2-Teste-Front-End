<template>

  <div>
    <h2>Home Page</h2>


    <ul>
      <p>nome</p>
    </ul>

  </div>




</template>

<script lang="ts">
import router from '@/router';
import axios from 'axios';




const getUsuario = () => {


axios.post('https://api-manager-test.infog2.com.br.infog2.com.br/a/auth/login_colaborador/', {
    headers: {'Content-type': 'application/json'}
})
.then(response => {
    console.log(response);
   // localStorage.setItem('token', response.data.token,);
    //router.push('/');

    
})
.catch(error => {
    console.log(error);
});
}










</script>

<style></style>