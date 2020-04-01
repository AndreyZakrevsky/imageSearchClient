<template>
  <v-app>
    <section class="container" >
      <div>
        <ModalRegister v-if="registerModel"/>
        <ModalLogin v-if="loginModel"/>
        <ButtonsMainPage />
      </div>
    </section>
  </v-app>
</template>

<script>
  import ModalRegister from '@/components/ModelRegister' ;
  import ModalLogin from '@/components/ModelLogin' ;
  import ButtonsMainPage from '@/components/ButtonsMainPage' ;
  import {mapGetters} from 'vuex';


  export default {
    components: {
      ModalRegister,
      ModalLogin,
      ButtonsMainPage
    },

    computed: {
      ...mapGetters({
        loginModel: "modals/login",
        registerModel: "modals/register",
      })
    },

  }
</script>

<style scoped>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  /*.links {*/
  /*  padding-top: 15px;*/
  /*  z-index: 9999;*/
  /*}*/
</style>

