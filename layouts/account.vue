<template>
  <client-only>
    <v-app>
      <NavModal v-if="navModal"/>
      <div class="dynamic-content">
        <AccountHeader  @reload="reloadContant"/>
        <div class="pages" v-if="switching">
          <nuxt/>
        </div>
      </div>
    </v-app>
  </client-only>
</template>

<script>
  import AccountHeader from '@/components/AccountHeader';
  import NavModal from '@/components/NavModal';
  import {mapGetters} from 'vuex';

  export default {
    name: "account",
    data(){
      return{
        switching : true
      }
    },

    methods:{
       reloadContant(){
         this.switching = false;
         setTimeout(()=>{
           this.switching = true;
         },500);

       }
    },

    computed: {
      ...mapGetters({
        navModal: "modals/menu",
      })
    },

    components: {
      AccountHeader,
      NavModal
    },
  }
</script>

<style scoped>

  .pages {
    margin-top: 90px;
  }

  .dynamic-content {
    margin:  0 auto;
    width: 100%;
    max-width: 1100px;
    font-family: 'Noto Sans', sans-serif;
    opacity: 0.9;
  }

</style>

