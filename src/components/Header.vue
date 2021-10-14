<template>
  <div v-if="headerFlag === true" class="header">
    <div class="content">
      <img :src="logo" alt="">
      <div class="header-links">
        <router-link to="/main">Главная</router-link>
        <router-link to="/equipment">Оборудование</router-link>
        <router-link to="/order">Купить билет</router-link>
      </div>
      <div class="header-person">
        <p class="header-person__nick">user</p>
        <div class="header-person__logo">
          <p>u</p>
        </div>
        <button class="header-person__exit">Выход</button>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../assets/logo.svg";

export default {
  name: 'Header',
  data(){
    return{
      logo,
      headerFlag: true,
    }
  },
  created() {
  },
  methods:{

  },
  mounted() {
    if(window.location.pathname === "/" || window.location.pathname === "/reg"){
      this.headerFlag = false
    }
    else{}
  }
}
</script>

