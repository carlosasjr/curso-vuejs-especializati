<template>
  <div>
    <h1 v-text="title"></h1>

    <form @submit.prevent="onSubmit">
      <div class="form-group" :class="{'has-warning' : errorValidation.name}">
        <input
          v-model="products.name"
          type="text"
          class="form-control"
          placeholder="Nome:"
        />
        <div v-if="this.errorValidation.name">
          <span
            v-for="(error, index) in this.errorValidation.name"
            :key="index"
            v-text="error"
          ></span>
        </div>
      </div>

      <div class="form-group" :class="{'has-warning' :  errorValidation.description}">
        <input
          v-model="products.description"
          type="text"
          class="form-control"
          placeholder="Descrição:"
        />
        <div v-if="this.errorValidation.description">
          <span
            v-for="(error, index) in this.errorValidation.description"
            :key="index"
            v-text="error"
          ></span>
        </div>
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-primary">Salvar</button>
      </div>

      <preloader-component :preloader="preloader"></preloader-component>
    </form>


  </div>
</template>

<script>
import preloaderComponent from '../general/preloaderComponent'
export default {
  data() {
    return {
      title: "Cadastrar novo Produto",
      products: {
        name: "",
        description: "",
      },
      errorValidation: "",
      preloader: false
    };
  },

  components: {      
      preloaderComponent
  },


  methods: {
    onSubmit() {
      this.preloader = true  
      this.$http
        .post("http://dev.api.products/api/v1/products", this.products)
        .then(
          (response) => {
            //console.log(response)
            this.$router.push({ name: "products" });
          },
          (error) => {
            this.errorValidation = error.body.errors;            
          }
        )
        .finally(() => {
          console.log("Finalizou");
          this.preloader = false
        });
    },
  },

};
</script>

<style scoped>
.has-warning {
    color: #e61111
}

.has-warning input {
    color: #e61111;
    border: 1px solid #e61111
}

</style>