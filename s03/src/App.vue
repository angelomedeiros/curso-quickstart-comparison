<template>
  <div id="app">
    <!-- <app-user></app-user> -->
    <router-view> </router-view>
    <p>Teste</p>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: `Welcome to Your Vue.js App, Angelo Medeiros!`
      }
    }
  }
</script>
