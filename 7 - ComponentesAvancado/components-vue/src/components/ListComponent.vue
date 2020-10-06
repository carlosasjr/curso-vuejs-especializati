<template>
    <div>
        <h2>{{ title }}</h2>

        <input type="text" v-model="task">
        <button @click="push">Adicionar</button>

        <ul>
            <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            required: true,
            type: String,
            default: ''
        },

        items: {
            required: true,
            type: Array,
            default: []
        }
    },

    data () {
        return {
            task : ''
        }

    },

    methods : {
        push () {            
            this.$emit('pushParent', this.task)
            this.task= ''
        }
    }
    
}
</script>

<style scoped>

</style>
