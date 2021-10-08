<template>
    <div class="auth">
        <img :src="logo" alt="">
        <form class="auth-form" action="">
            <label for="login">Введите логин</label>
            <input id="login" name="login" type="text">
            <label for="password">Введите пароль</label>
            <input id="password" name="password" type="password">
            <div class="auth-form__btns">
                <router-link to="/reg" class="auth-form__btns-item">Регистрация</router-link>
                <button class="auth-form__btns-item">Войти</button>
            </div>
        </form>
    </div>
</template>

<script>
    import logo from "../assets/logo.svg";

    export default {
        name: "Login",
        data(){
            return{
                logo
            }
        }
    }
</script>

<style scoped>

</style>