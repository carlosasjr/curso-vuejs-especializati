<template>
    <div>
       <p>{{ title }}</p> 
       <banner-component></banner-component>
    </div>
</template>

<script>
import BannerComponent from './BannerComponent'

export default {
    data () {
        return  {
            title : 'Titulo do First Component'
        }
    },

    components : {
         BannerComponent
    }
}
</script>

<style scoped>
p {
    color : blue
}
</style>