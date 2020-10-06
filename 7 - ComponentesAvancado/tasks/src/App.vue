<template>
  <div id="app" class="container">
      <list-tasks-component></list-tasks-component>
  </div>
</template>

<script>
import ListTasksComponent from './components/tasks/ListTasksComponent'

export default {
  name: 'app',
  data () {
    return {
     
    }
  },

  components: {
    ListTasksComponent
  }
}
</script>

<style>

</style>
