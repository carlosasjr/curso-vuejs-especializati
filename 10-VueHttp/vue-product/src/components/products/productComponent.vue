<template>
  <div>
    <p>{{ title }}</p>
    
    <div class="row">
      <div class="col">
        <router-link class="btn btn-info btn-cre" :to="{name: 'productsCreate'}">Cadastrar Produto</router-link>
      </div>

      <div class="col">
        <product-search-component @search="searchProduct"></product-search-component>
      </div>
    </div>

    <p><strong>Total:</strong> <span>{{ products.total }}</span></p>

    <div v-if="confirm" class="alert alert-danger text-center">
      <h2>Confirma exclusão do item?</h2>
      <hr>
      <button @click.prevent="deleteProduct()" class="btn btn-danger">Confirmar</button>
    </div>

    <table class="table table-dark">
      <thead>
        <tr>
          <th>#id</th>
          <th>Produto</th>
          <th>Descrição</th>
          <th width="200px">Ações</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(product, index) in products.data" :key="index">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>            
            <router-link class="btn btn-info" 
            :to="{name: 'productsEdit', 
            params: {id: product.id} }">Editar</router-link>

            <a @click.prevent="confirmDelete(product.id)" class="btn btn-danger" href="#">Deletar</a>
          </td>
        </tr>
      </tbody>
    </table>

    <preloader-component :preloader="preloader"></preloader-component>

    <pagination-component
     :pagination="products"
     :offset="offset"
     @paginate="getProducts"
    
    ></pagination-component>

    <!-- <ul class="pagination">
      <li
        v-if="products.prev_page_url"
        @click.prevent="getProducts(1)"
        class="btn btn-info"
        href="#"
      >
        Primeira Página
      </li>

      <li
        v-for="(page, index) in this.products.last_page"
        :key="index"
        class="page-item"
      >
        <a href="#" 
          :class="{'activePage' : products.current_page == page}"
           class="page-link" 
           @click.prevent="getProducts(page)">
          {{ page }}
        </a>
      </li>

      <li
        v-if="products.current_page < products.last_page"
        @click.prevent="getProducts(products.last_page)"
        class="btn btn-info"        
        href="#"
      >
        Última Página
      </li>
    </ul>-->


  </div>
</template>

<script>
import paginationComponent from '../general/paginationComponent'
import preloaderComponent from '../general/preloaderComponent'
import productSearchComponent from './productSearchComponent'

export default {
  created() {
    this.getProducts();
  },
  
  data() {
    return {
      title: "Produtos",
      products: {
        total: 0,
        per_page: 10,
        from: 1,
        to: 0,
        current_page: 1,
        data: [],
      },
      offset: 10,
      preloader: false,
      confirm: false,
      idDelete : 0,
      filter: ''
    };
  },

  components: {
      paginationComponent,
      preloaderComponent,
      productSearchComponent
  },


  methods: {
    getProducts() {
      this.preloader = true;

      this.$http
        .get(
          `http://dev.api.products/api/v1/products?page=${this.products.current_page}&filter=${this.filter}`
        )
        .then(
          (response) => {
            this.products = response.body;
          },
          (error) => {
            console.log(error);
          }
        )
        .finally(() => {
          this.preloader = false;
        });
    },

    confirmDelete(id) {
        this.confirm = true
        this.idDelete = id        
    },

    deleteProduct() {
      this.preloader = true
      this.$http.delete(`http://dev.api.products/api/v1/products/${this.idDelete}`)
      .then(
          (response) => {            
            this.getProducts()
            this.idDelete = 0
            this.confirm = false
          },
          (error) => {
            console.log(error);
          }
        )
        .finally(() => {
          this.preloader = false;
        });
    },

    searchProduct (filter) {
      this.filter = filter
      this.getProducts()
    }
  },
};
</script>

<style scoped>
.activePage {
  font-weight: bold;
}

.btn-cre {
  margin: 10px 0;
}
</style>