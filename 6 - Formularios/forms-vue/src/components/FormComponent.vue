<template>
 <div>
  <ValidationObserver v-slot="{ handleSubmit }">
   
   <form @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider name="Nome" rules="required|min:3" v-slot="{ errors }">        
       <input v-model="dataUser.name" type="text" class="form-control" placeholder="Nome">
       <span class="error">{{ errors[0] }}</span>
       <p v-if="dataUser.name">{{ dataUser.name }}</p>      
      </ValidationProvider>

       <hr>

      <ValidationProvider name="E-mail" rules="required" v-slot="{ errors }">                
        <input v-model="dataUser.email" type="email" class="form-control" placeholder="Email">
         <span class="error">{{ errors[0] }}</span>
        <p v-if="dataUser.email">{{ dataUser.email }}</p>       
      </ValidationProvider>      

      <hr>


      <ValidationProvider name="Idade" rules="required|numeric" v-slot="{ errors }">                
        <input type="number" placeholder="Idade" v-model.number="dataUser.age" />
         <span class="error">{{ errors[0] }}</span>
        <p v-if="dataUser.age">{{ dataUser.age }}</p>
      </ValidationProvider>   
      
      
      <hr />

        
      <ValidationProvider name="Sexo" rules="required" v-slot="{ errors }">                  
        <input type="radio" name="sex" value="M" v-model="dataUser.sex" />
      Masculino |
        <input type="radio" name="sex" value="F" v-model="dataUser.sex" />
      Feminino
        <p v-if="dataUser.sex">Sexo selecionado: {{ dataUser.sex }}</p>     
         <span class="error">{{ errors[0] }}</span>    
      </ValidationProvider> 
        

      <hr />

      <ValidationProvider name="Estado" rules="required" v-slot="{ errors }">
      <select v-model="dataUser.state">
        <option value="">Selecione o Estado</option>
        <option value="SP">São Paulo</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="MG">Minas Gerais</option>
      </select>
       <span class="error">{{ errors[0] }}</span>  
      <p v-if="dataUser.state">Estado Selecionado: {{ dataUser.state }}</p>
      </ValidationProvider>  

      <hr />

      <label for="agree">Concordo com os termos de uso</label>
      <input type="checkbox" id="agree" v-model="agree" />

      <hr />

      <textarea cols="30" rows="10" v-model="description"></textarea>
      <div v-if="description">
        <pre v-html="description"></pre>
      </div>

      <hr />


      <button type="submit">Submit</button>
    </form>
  </ValidationObserver>

    <div v-if="isSubmited"> 
          {{ dataUser }}
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
      dataUser: {
        name: "",
        email: "",
        age: "",
        sex: "",
        state: "",
      },

      agree: true,
      description: "",
      isSubmited: false
  }),
  methods: {
    onSubmit () {
      this.isSubmited = true
    }
  }
};
</script>

<style scoped>
span {
  display: block;
}



.error {
    margin-bottom: .5em;
    font-size: .75em;
    color: #f22435;
}
</style>
