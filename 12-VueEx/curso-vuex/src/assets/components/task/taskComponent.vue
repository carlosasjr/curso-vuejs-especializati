<template>
    <div>
        <h1 v-text="title"></h1>  

        <task-add-component></task-add-component>    

        <ul>
            <li v-for="(task, index) in getTasks" :key="index">            
                <a href="#" @click.prevent="taskCompleted(task)"
                class="task" :class="{'completed': task.completed}">{{ task.name }}</a>
            </li>
        </ul>

    </div>
</template>

<script>
import taskAddComponent from './taskAddComponent'

export default {
    data () {
        return {
            title: 'Tasks'
        }
    },

    computed : {
        getTasks () {
            return this.$store.state.tasks
        }
    },

    methods: {
        taskCompleted (task) {
            this.$store.commit('TASK_COMPLETED', task)
        }
    },

    components: {
        taskAddComponent
    }

}
</script>

<style scoped>
.task {
    text-decoration: none;
}

.completed {
    text-decoration: line-through;    
}
</style>