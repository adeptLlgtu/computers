<template>
    <div class="auth">
        <img :src="logo" alt="">
        <div class="auth-form">
            <label for="login">Введите логин</label>
            <input id="login" type="text">
            <label for="password">Введите пароль</label>
            <input id="password" type="password">
            <div class="auth-form__btns">
                <router-link to="/reg" class="auth-form__btns-item">Регистрация</router-link>
                <button @click.prevent="login" class="auth-form__btns-item">Войти</button>
            </div>
        </div>
    </div>
</template>

<script>
    import logo from "../assets/logo.svg";

    export default {
        name: "Login",
        data(){
            return{
                logo,
                users: []
            }
        },
        created() {
            this.$http.get('http://computers-api.loc:8080/api/enter').then(function(data){
                this.users = JSON.parse(JSON.stringify(data.body));
            })
        },
        methods:{
            login(){
                let login = document.querySelector('#login')
                let password = document.querySelector('#password')
                let usersArray = this.users
                console.log(usersArray)

                for (let i=0;i<usersArray.length; i++){
                    if(usersArray[i].login === login.value && usersArray[i].password === password.value){
                        localStorage.setItem('userId', usersArray[i].id)
                        window.location.pathname = '/main'


                    }
                }
            }
        },
        mounted() {


        }
    }
</script>

<style scoped>

</style>