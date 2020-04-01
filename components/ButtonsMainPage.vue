<template>
  <div class="links">
    <v-btn
      color="blue-grey"
      class="ma-2 white--text"
      @click="showModal('login')"
    >
      {{'login-title' | localize}}
    </v-btn>

    <v-btn
      color="blue-grey"
      class="ma-2 white--text"
      @click="showModal('register')"
    >
      {{'register' | localize}}
    </v-btn>
  </div>
</template>

<script>
    export default {
        name: "ButtonsMainPage",
        methods: {
        showModal(type) {
          this.$store.dispatch('modals/showModal', type);
        },

      }
    }
</script>

<style scoped>
  .links {
    padding-top: 15px;
    z-index: 9999;
  }
</style>
