<template>
  <v-card
    max-width="350"
    max-height="350"
    class="card"
  >
    <v-img
      :src="kartdata.url"
      height="350px"
      width="350px"
      dark
    >
      <v-row class="fill-height">
        <v-spacer></v-spacer>
        <v-btn  dark icon class="mr-4" @click="sendLikedImage()">
          <v-icon v-if="selectedYet && canLike " >mdi-thumb-up</v-icon>
          <v-icon color="indigo lighten-1" v-else-if="canLike">mdi-thumb-up</v-icon>
        </v-btn>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
  export default {
    name: "ImageCard",
    props: ['kartdata', 'canLike'],
    data() {
      return {
        selectedYet: false
      }
    },

    methods: {
      async sendLikedImage() {
        if (!this.selectedYet && this.canLike) {
          this.selectedYet = true;
          try {
            const res = await this.$axios.$post('/api/liked-images/add', {url: this.kartdata.url});
            this.$notify.success({
              title: 'Success',
              message: "You have saved this image !"
            });

          } catch (e) {
            this.$notify.warning({
              title: '',
              message: e.response.data.message
            });
          }
        }
      }
    }

  }
</script>

<style scoped>
  .card {
    margin: 10px auto;
  }
</style>
