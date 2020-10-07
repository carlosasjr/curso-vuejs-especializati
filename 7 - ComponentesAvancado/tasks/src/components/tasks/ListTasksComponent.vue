<template>
    <div>
       <div class="row">
           <div class="col-6">
                <form class="form form-inline">
                    <input v-model="search"  type="text" placeholder="Procurar por?" class="form-control">                    
                </form>               
           </div>

           <div class="col 6">
                <form class="form form-inline" @submit.prevent="onSumit">
                    <input v-model="task.name" type="text" placeholder="Informe a tarefa" class="form-control">
                    <button type="sumit" class="btn btn-primary">Enviar</button>
                </form>
           </div>
       </div>
        

        <table class="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th width="180px">Ação</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(task, index) in searchTasks" :key="index">
                 <td>{{ task.id }}</td>
                 <td>{{ task.name }}</td>
                 <td>
                     <a @click="edit(task.id)" href="#" class="btn btn-info">Editar</a>
                     <a @click="destroy(task.id)" href="#" class="btn btn-danger">Deletar</a>
                 </td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
export default {   
    data () {
        return {
            tasks : [],
            task: {
                id: '',
                name: ''
            },
            updating: false,
            updateIndex: '',
            search: ''
        }
    },
    
    methods: {
        onSumit () {
            if (this.updating) {
                this.update()
                return
            }

            this.save()
        },

        edit(id) {
            this.updating = true
            this.updateIndex = this.findIndexById(id)
            this.task = this.tasks[this.updateIndex]
        },

        save() {
          this.task.id = this.tasks.length + 1
          this.tasks.push(this.task) 

          this.clearForm()  

        },

        update () {
            this.tasks[this.updateIndex] = this.task
            this.updateIndex = ''
            this.updating = false
            this.clearForm()  
        },
        
        destroy (id) {
            this.tasks.splice(this.findIndexById(id), 1);
        },

        clearForm () {
            this.task =  {
                id: '',
                name: ''
            }
        },

        findIndexById (id) {
           for (let index = 0; index < this.tasks.length; index++) {
               if (this.tasks[index].id == id)               
                return index
           } 
        }
    },

    computed : {
        searchTasks () {
            if (this.search === '')
             return this.tasks

            let vm = this
            return this.tasks.filter(task => {
                return task.name.toLowerCase().indexOf(vm.search.toLowerCase()) > -1
            })              
        }
    }
}
</script>

<style scoped>
    form  {
        margin: 25px 0;
    }
</style>
