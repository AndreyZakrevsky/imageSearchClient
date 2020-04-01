<template>
    <div class="history">
      <div  class="search">
        <div>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="CHOOSE THE DATE"
                readonly
                v-on="on"
                color="purple accent-4"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable color="purple accent-4">
              <v-spacer></v-spacer>
              <v-btn text @click="menu = false" color="purple accent-4">Cancel</v-btn>
              <v-btn text @click="$refs.menu.save(date)" color="purple accent-4">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </div>
        <div>
          <v-dialog v-model="dialog" scrollable max-width="300px">
            <template v-slot:activator="{ on }">
              <v-btn color="purple darken-2" dark v-on="on">Search History</v-btn>
            </template>
            <v-card>
              <v-card-title>Your search history</v-card-title>
              <v-divider></v-divider>
              <v-card-text style="height: 300px;">
                <v-btn outlined color="purple darken-2"  class="words" small  v-for="(item ,i ) in searchWords" :key="i"
                       @click="gotoSearching(item.key_word)"
                >{{item.key_word}}</v-btn>
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>
      </div>
      <div class="history_title">
        <h3>Images that you have liked {{date!== null ? date : 'today'}} </h3>
      </div>
      <div class="liked-images" v-if="likedImages && likedImages.length > 0">
        <ImageCard :kartdata="image" :canLike="false" v-for="(image ,i ) in likedImages" :key="i"/>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import ImageCard from '@/components/ImageCard';

  export default {
    name: "history",
    middleware: 'authenticated',
    layout: 'account',

    components: {
      ImageCard
    },

    data() {
      return {
        dialog:false,
        menu: false,
        date: null,
        showLine: false,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              gridLines: {
                display: false
              }
            }],
            yAxes: [{
              gridLines: {
                display: false
              }
            }]
          }
        }
      }
    },

    computed: {
      ...mapGetters({
        likedImages: 'images/likedlist',
        searchWords: 'images/searchWordHistoryList',
      })
    },

    created() {
      this.$store.dispatch('images/getLikedImages', '').then( ()=>{
         this.$store.dispatch('images/getSearchWordHistory', '')
      });
    },

    methods: {
      gotoSearching(keyword){
        this.dialog = false;
        this.$store.dispatch('images/getImagesByKeyword', keyword).then( ()=>{
          this.$router.push({
            path: '/search-images'
          });
        });
      }
    },

    watch: {
      date() {
        this.$store.dispatch('images/getLikedImages', this.date).then( ()=>{
          this.$store.dispatch('images/getSearchWordHistory', this.date)
        });
      }
    }

  }
</script>

<style scoped>

  .history_title{
    color: #76304b;
  }

  .search{
    width: 90%;
    margin: 5px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .liked-images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 30px;
    height: 700px;
    overflow-y: scroll;
  }

  .words{
    margin: 10px;
  }
</style>
