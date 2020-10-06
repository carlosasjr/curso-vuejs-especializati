<template>
  <div id="app">
      {{ msg }}

    <first-component></first-component>

    <tasks-component></tasks-component>
      
  </div>
</template>

<script>

import FirstComponent from './components/FirstComponent'
import TasksComponent from './components/TasksComponent'

export default {
  name : 'app',

  data () {
    return {
      msg: 'Arquivo APP'
    }
  },

  components : {
    FirstComponent, 
    TasksComponent
  }

}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

</style>
