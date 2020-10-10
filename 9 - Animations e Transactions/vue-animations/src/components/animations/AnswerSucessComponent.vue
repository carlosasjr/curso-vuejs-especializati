<template>
    <div class="aler alert-success text-center">
        <h2 v-text="title"></h2>        
        <h3>Resposta Correta</h3>
        <button class="btn btn-primary" @click="nextQuestion">Responder outra questão</button>
    </div>
</template>

<script>

export default {
    data () {
        return {
            title: 'Sucesso',

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
.sucess {
    border: 1px solid blue;
    margin: 5px;
    padding: 5px;
}
</style>