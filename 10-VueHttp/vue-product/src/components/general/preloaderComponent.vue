<template>
  <div>
    <div class="preloader" v-if="preloader">
      <img src="../../../src/assets/load.gif" alt="" />
    </div>
  </div>
</template>

<script>
export default {
    props: {
        preloader: {
            type: Boolean,
            required: true,
            default: false
        }
    },

    data () {
        return {
        
        }
    }
};
</script>

<style scoped>
  .preloader {
    max-width: 60px;
  }
</style>