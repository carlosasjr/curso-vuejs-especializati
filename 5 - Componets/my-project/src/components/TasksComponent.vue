<template>
  <div>

      
    <table class="table table-striped">
      <thead>
        <th>Descrição</th>
        <th>Status</th>
      </thead>

      <tbody>
          <tr v-for="(task, index) in tasks" :key="index">
            <td>{{ task.name }}</td>
            <td>{{ task.state ? 'Sim' : 'Não' }}</td>
          </tr>
          
      </tbody>
    </table>
  </div>


</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { name: "Limpar Garagem", state: true },
        { name: "Limpar Banheiro", state: false },
        { name: "Limpar Cozinha", state: false },
        { name: "Limpar Sala", state: true },
      ],
    };
  },
};
</script>

<style scoped>
</style>
