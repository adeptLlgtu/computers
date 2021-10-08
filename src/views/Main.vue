<template>
  <div class="main">
    <Banner></Banner>
    <section class="about-us">
      <div class="about-us__dark">
        <div class="content">
          <router-link to="/">ЗАБРОНИРОВАТЬ МЕСТО</router-link>
          <div class="about-us__info">
            <p class="about-us__info-title">О нас</p>
            <p class="about-us__info-text">Мы - компьютерный клуб CyberClub. У нас лучшее “железо” в городе, а также топовые игры.
              У нас вы сможете поиграть как на компьютере, так и на игровых присатвках</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import cyber from '../assets/cyber.png'


export default {
  name: "main",
  components: {Banner},
  data(){
    return{
      cyber
    }
  }

}
</script>

<style scoped>

</style>