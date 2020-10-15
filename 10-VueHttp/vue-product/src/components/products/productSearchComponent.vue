<template>
    <div>
        <input type="text" v-model="filter" @keyup="search">
    </div>
</template>

<script>
export default {
      data () {
          return {
              filter: ''
          }
      },

      methods: {
          search () {
              this.$emit('search', this.filter)
          }
      }
}
</script>

<style scoped>

</style>