<template>
    <div>
        <form class="form form-inline" @submit.prevent="onSumit">
            <input v-model="task.name" type="text" placeholder="Informe a tarefa" class="form-control">
            <button type="sumit" class="btn btn-primary">Enviar</button>
        </form>

        <table class="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th width="180px">Ação</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                 <td>{{ task.id }}</td>
                 <td>{{ task.name }}</td>
                 <td>
                     <a @click="edit(index)" href="#" class="btn btn-info">Editar</a>
                     <a href="#" class="btn btn-danger">Deletar</a>
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
            updateIndex: ''
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

        edit(index) {
            this.updating = true
            this.updateIndex = index
            this.task = this.tasks[index]
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

        clearForm () {
            this.task =  {
                id: '',
                name: ''
            }
        }
    }
}
</script>

<style scoped>
    form  {
        margin: 25px 0;
    }
</style>
