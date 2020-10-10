<template>
  <div class="container">
    <h2 v-text="title"></h2>

    <div class="row">
      <div class="custom.width">
        <transition name="effect" mode="out-in">
          <component 
            :is="model" 
            @changeModel="changeModel"> 
          </component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionComponent from "./QuestionComponent";
import AnswerErrorComponent from "./AnswerErrorComponent";
import AnswerSucessComponent from "./AnswerSucessComponent";

export default {
  data() {
    return {
      title: "Quiz",
      model: "app-question",
    };
  },

  methods: {
    changeModel(model) {
      this.model = model != undefined ? model : "app-question";
    },
  },

  components: {
    "app-question": QuestionComponent,
    "error-question": AnswerErrorComponent,
    "sucess-question": AnswerSucessComponent,
  },
};
</script>

<style scoped>
.effect-leave-active {
  animation: effect-out 1s;
}

.effect-enter-active {
  animation: effect-in 1s;
}

@keyframes effect-out {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(90deg);
  }
}

@keyframes effect-in {
  from {
    transform: rotateY(90deg);
  }

  to {
    transform: translateY(0deg);
  }
}


.custom.width {
    max-width: 500px;
    margin: 0 auto;
}
</style>