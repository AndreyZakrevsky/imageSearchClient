<template>
  <div class="header">
    <div class="buttons-block">
      <v-btn
        color="deep-purple lighten-2"
        class="white--text"
        @click="openNavModal('menu')"
      >
        {{'header-menu' | localize}}
      </v-btn>
      <v-btn
        color="deep-purple lighten-2"
        class="white--text"
        @click="logout()"
      >
        {{'header-exit' | localize}}
      </v-btn>
    </div>
  </div>
</template>

<script>

  export default {
    name: "AccountHeader",
    data: () => ({
      file: null,
      locale: "en",
    }),

    mounted() {
      this.locale = localStorage.getItem('locale') || 'ru';
    },

    methods: {

      async logout() {
        await this.$auth.logout();
        this.$router.replace({
          path: '/'
        });
      },

      loc(str) {
        return this.$options.filters.localize(str)
      },

      openNavModal(type) {
        this.$store.dispatch('modals/showModal', type);
      }
    }
  }
</script>

<style scoped>

  .header {
    height: 60px;
    width: 100%;
    max-width: 1098px;
    background: white;
    display: flex;
    position: fixed;
    z-index: 999;
    top: 0;
    border-bottom: 1px dotted yellow;
  }

  .buttons-block {
    width: 80%;
    margin: 7px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .locale {
    max-width: 70px;
  }

</style>





