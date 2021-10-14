<template>
    <div class="auth">
        <img :src="logo" alt="">
        <form id="registration-form" class="auth-form" action="">
            <label for="login">Введите логин</label>
            <input id="login" name="login" type="text">
            <label for="password">Введите пароль</label>
            <input id="password" name="password" type="password">
            <div class="auth-form__btns">
                <router-link to="/" class="auth-form__btns-item">Вход</router-link>
                <button @click="registration" class="auth-form__btns-item">Зарегистрироваться</button>
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
        },
        methods:{
            registration(e){
                let passwordFirst = document.querySelector('#password')
                let passwordConfirm = document.querySelector('#re-password')
                if (passwordFirst.value === passwordConfirm.value){
                    let form = document.querySelector('#registration-form')
                    form.onsubmit = async (e) => {
                        e.preventDefault();
                        let formData = new FormData(form)
                        let response = await fetch('http://computers-api.loc:8080/api/registration', {
                            method: 'POST',
                            body: formData
                        });
                        window.location.pathname = '/'
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>