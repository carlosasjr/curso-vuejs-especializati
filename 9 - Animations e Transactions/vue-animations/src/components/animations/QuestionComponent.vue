<template>
  <div class="cart">
    <div class="card-header">
      <h2 v-text="question"></h2>
    </div>

    <div class="card-body">
      <form @submit.prevent="checkResult" class="form form-inline">
        <input type="text" placeholder="Resposta" v-model="reply" class="form-control" />
        <button type="submit" class="btn btn-primary">Responder</button>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "Criando pergunta...",
      reply: "",
      result: 0,
    };
  },

  created() {
    this.generateQuestion();
  },

  methods: {
    generateQuestion() {
      let number1 = this.generateRandomNumber(1, 100);
      let number2 = this.generateRandomNumber(1, 100);

      this.result = number1 + number2;

      this.question = `Qual é o resultado da some entre ${number1} e ${number2}`;
    },

    generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },

    checkResult() {
      let model = "error-question";

      if (this.reply == this.result) model = "sucess-question";

      this.$emit("changeModel", model);
    },
  },
};
</script>

<style scoped>
.default {
  border: 1px solid blue;
  margin: 5px;
  padding: 5px;
}
</style>