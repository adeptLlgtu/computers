<template>
    <div class="auth">
        <img :src="logo" alt="">
        <form class="auth-form" action="">
            <label for="login">Введите логин</label>
            <input id="login" name="login" type="text">
            <label for="password">Введите пароль</label>
            <input id="password" name="password" type="password">
            <label for="re-password">Повторите пароль</label>
            <input id="re-password" type="password">
            <div class="auth-form__btns">
                <router-link to="/" class="auth-form__btns-item">Вход</router-link>
                <button class="auth-form__btns-item">Зарегистрироваться</button>
            </div>
        </form>
    </div>
</template>

<script>
    import logo from "../assets/logo.svg";
    export default {
        name: "Registration",
        data(){
            return{
                logo
            }
        }
    }
</script>

<style scoped>

</style>