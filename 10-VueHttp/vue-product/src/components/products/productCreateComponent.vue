<template>
  <div>
    <h1 v-text="title"></h1>    

    <form @submit.prevent="onSubmit">
      <div class="form-group" :class="{ 'has-warning': errorValidation.name }">
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

      <div
        class="form-group"
        :class="{ 'has-warning': errorValidation.description }"
      >
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
import preloaderComponent from "../general/preloaderComponent";
export default {
  props: {
    id: {
      default: "",
    },
  },

  data() {
    return {
      title: "Cadastrar novo Produto",
      products: {
        name: "",
        description: "",
      },
      errorValidation: "",
      preloader: false,
    };
  },

  components: {
    preloaderComponent,
  },

  created() {
      if (this.id != '') {
          this.title = 'Alterar produto - ' + this.id
          this.getProduct()
      }       
  },

  methods: {
    onSubmit() {
      this.preloader = true;

      if (this.id === "") 
         this.save()
          else 
           this.update()  
    },

    save() {
      this.$http
        .post("http://dev.api.products/api/v1/products", this.products)
        .then(
          response => {            
            this.$router.push({ name: "products" });
          },
          error => {
              if (error.status === 422)
                this.errorValidation = error.body.errors;
          }
        )
        .finally(() => {          
          this.preloader = false;
        });
    },

    update () {        
        this.$http.put(`http://dev.api.products/api/v1/products/${this.id}`, this.products)
        .then(response => {            
                this.$router.push({name: 'products'})
        }, error => {
            if (error.status === 422)
                this.errorValidation = error.body.errors;            
        })
        .finally((() => {
            this.preloader = false;
        }))        
    },

    getProduct () {
        this.preloader = true
        this.$http.get(`http://dev.api.products/api/v1/products/${this.id}`)
        .then(response => {            
            this.products = response.body
        }, error => {
            if (error.status === 404) {
                alert('produto não encontrado')
                this.$router.push({name: 'products'})
            }            
        })
        .finally((() => {
            this.preloader = false;
        }))
    }
  },
};
</script>

<style scoped>
.has-warning {
  color: #e61111;
}

.has-warning input {
  color: #e61111;
  border: 1px solid #e61111;
}
</style>