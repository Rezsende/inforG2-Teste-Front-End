<template>
    <form @submit.prevent="submitLogin">
        <div class="box-body">
            <div class="box-left">
                <img class="img-logo" src="../assets/imagem-login.png" />
            </div>


            <div class="box-right">

                <div class="box-child-left">
                    <div class="box-login">
                        <div class="label-login">
                            <label>Login</label>
                        </div>

                        <div class="label-email">
                            <label class="label-child-email">Email</label>
                            <div class="box-input-email">
                                <input class="input-email" type="text" v-model="login.username" />
                            </div>
                        </div>

                        <div class="label-password">
                            <label class="label-child-password">Senha</label>
                            <div class="box-input-password">

                                <input class="input-password" type="password" v-model="login.password" />
                            </div>
                        </div>

                        <div class="box-forgot-password">
                            <label class="label-child-forgot-password">Esqueceu a senha?</label>
                            <input class="input-forgot-password" type="submit" />

                        </div>
                    </div>

                </div>

                <div class="box-child-right">
                    <img class="img-logo" src="../assets/foot.jpg" />
                </div>





            </div>
        </div>
    </form>
</template>

<script setup lang="ts">




import router from '@/router';
import axios from 'axios';

const login = {
    username: '',
    password: ''
}

const submitLogin = () => {


    axios.post('https://api-manager-test.infog2.com.br.infog2.com.br/a/auth/login_colaborador/', {
        username: login.username,
        password: login.password
    }, {
        headers: {'Content-type': 'application/json'}
    })
    .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.token,);
        router.push('/');

        
    })
    .catch(error => {
        console.log(error);
    });
}
</script>








<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@900&display=swap');

* {
    margin: 0;
    padding: auto;
    font-family: 'Mulish', sans-serif;
    font-weight: 900;
}

.box-body {
    height: 100vh;
    display: flex;
}

.box-left {
    display: flex;
    flex: 1;
}

.img-logo {
    width: 100%;
}

.label-login {
    display: flex;
    color: #000000;
    font-size: 32px;
    font-weight: 900px;
    justify-content: center;
}

.label-email {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.box-input-email {
    display: flex;
    border: 1px solid #E9EEF2;
    border-radius: 4px;
    height: 35px;
}

.label-child-email {
    color: #000000;
    font-size: 12px;
    font-weight: 900px;
}

.input-email:focus {
    outline: none;
}

.input-email {
    margin: 1px;
    width: 99%;
    border: none;
}

.label-password {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.label-child-password {
    color: #000000;
    font-size: 12px;
    font-weight: 900px;

}

.box-input-password {
    display: flex;
    border: 1px solid #E9EEF2;
    border-radius: 4px;
    height: 35px;
}

.input-password:focus {

    outline: none;
}

.input-password {
    margin: 1px;
    width: 99%;
    border: none;
}

.box-right {
    display: flex;
    flex: 1;
    flex-direction: column;
}


.box-child-left {
    display: flex;
    flex: 1 100%;
    align-items: center;
    justify-content: center;
}

.box-child-right {
    display: flex;
    flex: 1 180px;
    background: #0fc537;
}


.box-login {
    width: 375px;
    height: 340px;
    display: flex;
    gap: 36px;
    flex-direction: column;

}


.box-forgot-password {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.label-child-forgot-password {

    font-size: 16px;
    font-weight: 900px;


}

.input-forgot-password {
    color: #FFFFFF;
    width: 149px;
    height: 48px;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.8);
}
</style>