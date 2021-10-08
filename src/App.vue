<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>


<script>
import './assets/styles.scss'
import './assets/ubuntu/ubuntu.css'
import Header from "./components/Header";


export default {
  components: {Header},
  data(){
    return{

    }
  }


}



</script>