<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="task.name" />
      <button type="sumit">Adicionar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {
        name: "",
        completed: false,
      },
    };
  },

  methods: {
    onSubmit() {      
      //this.$store.commit("ADD_TASK", this.task);

      this.$store.dispatch("addTask", this.task)
      
      this.clearForm()
    },

    clearForm() {
      this.task = {
        name: "",
        completed: false,
      };
    },
  },
};
</script>

<style scoped>
</style>