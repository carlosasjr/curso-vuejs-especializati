<template>
  <div>
    <h2 v-text="title"></h2>

    <form @submit.prevent="onSubmit">
      <input v-model="cep" type="text" placeholder="Informe o CEP:" />
      <button type="submit">Buscar CEP</button>
    </form>

    <div v-if="preloader">
        Carregando...
    </div>

    <div v-if="error != ''">
      {{ error }}
    </div>

    <hr />

    <div v-if="address.cidade">
      <p>Cidade: {{ address.cidade }}</p>
      <p>Bairro: {{ address.bairro }}</p>
      <p>UF: {{ address.estado }}</p>

      <p>IBGE: {{ address.cidade_info.codigo_ibge }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Busca Cep com Vue JS",
      cep: "",
      address: {},

      preloader: false,
      error : ''
    };
  },

  methods: {
    onSubmit() {
      this.reset()

      this.preloader = true 
      
      this.$http.get("https://api.postmon.com.br/v1/cep/" + this.cep).then(
        (response) => {          
          this.address = response.data;          
        },
        (error) => {
           console.log(error);
           this.error = 'Cep inválido'
        })
        .finally(() => {
           this.preloader = false
        });
    },

    reset() {
      this.address = {}
      this.error = ''

    }
  },
};
</script>

<style scoped>
</style>