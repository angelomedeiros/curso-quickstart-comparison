<template>
  <div id="app">
    <!-- <app-user></app-user> -->
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/blog" >Blog</router-link>
      <router-link to="/account">Account</router-link>
    </div>
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
