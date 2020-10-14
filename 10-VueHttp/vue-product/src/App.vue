<template>
  <div id="app" class="container">
    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'products'}">Produtos</router-link>    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  .preload {
    max-width: 60px;
  }
</style>
