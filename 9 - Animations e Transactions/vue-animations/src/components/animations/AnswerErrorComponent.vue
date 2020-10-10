<template>
    <div class="alert alert-danger text-center"> 
        <h2 v-text="title"></h2>        
        <h3>Resposta Incorreta</h3>
        <button class="btn btn-danger" @click="nextQuestion">Responder outra questão</button>
    </div>
</template>

<script>

export default {
    data () {
        return {
            title: 'Erro',
        }
    },

    methods : {
        nextQuestion () {
            this.$emit('changeModel')
        }
    }
}
</script>

<style scoped>
.error {
    border: 1px solid red;
    margin: 5px;
    padding: 5px;
}
</style>