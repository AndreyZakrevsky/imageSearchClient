<template>
  <v-container>
    <v-layout>
      <v-flex>
        <div class="search_field">
          <v-text-field
            color="purple darken-2"
            label="Searching phrase"
            v-model="searchPrase"
          ></v-text-field>
          <v-btn
            color="deep-purple lighten-2"
            class="white--text"
            @click="findImages()"
            :disabled="checkKeyWord"
          >
            FIND
          </v-btn>
          <v-btn
            color="deep-purple lighten-2"
            class="white--text"
            @click="clear()"
            :disabled="checkKeyWord"
          >
            CLEAR
          </v-btn>
        </div>
      </v-flex>
      <hr>
    </v-layout>
    <div class="card-block" v-if="foundedImages">
        <ImageCard :kartdata="image" :canLike="true" v-for="(image ,i ) in foundedImages" :key="i"/>
    </div>
  </v-container>
</template>


<script>
  import {mapGetters} from 'vuex';
  import ImageCard from '@/components/ImageCard';

  export default {
    name: "accounts",
    middleware: 'authenticated',
    layout: 'account',
    components:{
      ImageCard
    },

    data() {
      return {
        searchPrase: ''
      }
    },
    computed: {
      ...mapGetters({
        foundedImages: 'images/list'
      }),
      checkKeyWord(){
        return this.searchPrase === ''
      }
    },

    methods: {
      clear() {
        this.searchPrase = '';
      },

      findImages(img) {
        this.$store.dispatch('images/getImagesByKeyword', this.searchPrase).then( ()=>{
          this.searchPrase = '';
        });
      }
    }
  }
</script>

<style scoped>
  .card-block{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 30px;
    height: 700px;
    overflow-y:scroll;
  }

  .search_field {
    max-width: 190px;
  }

</style>



