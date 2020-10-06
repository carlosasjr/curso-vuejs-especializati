<template>
  <div id="app">
    <h1>{{ msg }}</h1>  

    <list-component @pushParent="push" :title="'Lista de tarefas'" :items="tasks"></list-component>
    
  </div>
</template>

<script>

import ListComponent from './components/ListComponent'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tasks: ['Lavar', 'Passar']
    }
  },

  methods: {
    push (task) {
      this.tasks.push(task)
    }
  },

  components: {
    ListComponent
  }



}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
