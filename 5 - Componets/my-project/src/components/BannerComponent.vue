<template>
    <div class="row">
        <div class="col-6">
            <a :href="link1">{{ textLink1 }}</a>
        </div>

        <div class="col-6">
            <a :href="link2">{{ textLink2 }}</a>
        </div>
        
    </div>
</template>

<script>


export default {
    data () {
        return {
         link1 : 'https://www.especializati.com.br/campus'   ,
         textLink1 : 'Especializa ti',

         link2 : 'https://www.especializati.com.br/campus'   ,
         textLink2 : 'Especializa ti 2'
        }    
    }
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>