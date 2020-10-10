<template>
  <div id="app">
      <app-quiz></app-quiz>

      
     <!-- <button @click.prevent="isVisible = !isVisible">Clique aqui</button>
      <transition name="exibicao">
        <div v-if="isVisible">Meu conteudo...</div>
      </transition> -->
      
  </div>
</template>

<script>
import QuizComponent from './components/animations/QuizComponent'

export default {
  name: 'app',
  data () {
    return {
      isVisible : false
    }
  },

  components : {
    'app-quiz' : QuizComponent
  }
}


</script>

<style>

#app {
  text-align: center;
}

/*

 leave-active durante a saida 
*/
  .exibicao-enter-active, .exibicao-leave-active {
    transition: opacity 1.5s;
  }

/*      
  enter inicio da entrada
  leave-to final da saida
*/
 .exibicao-enter, .exibicao-leave-to {
    opacity: 0;
  }
</style>
