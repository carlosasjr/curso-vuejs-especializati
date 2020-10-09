<template>
    <div>
        <h1>{{ title }}</h1>

        <h2>Tarefa: {{ id }}</h2>
    </div>
</template>

<script>
export default {
    props: ['id'],

    data () {
        return {
            title: 'Lista de Tarefas'
        }
    }
}
</script>

<style scoped>
    
</style>