<template>
  <div class="nav" :class="{'slow' : slide }">
    <div class="close_popup" @click="hideModal()"></div>
    <div class="links">
      <div class="links-items">
        <span class="item" @click="changePage('/search-images')">SEARCH IMAGES</span>
        <span class="item" @click="changePage('/history')">HISTORY</span>
      </div>
    </div>
    <div class="blur-class"></div>
  </div>
</template>

<script>
  export default {
    name: "NavModal",
    data() {
      return {
        slide: false
      }
    },
    methods: {
      hideModal() {
        this.slide = true;
        setTimeout(() => {
          this.$store.dispatch('modals/hideModal');
          this.slide = false;
        }, 500);
      },
      changePage(path) {
        this.$router.push({
          path: path
        });
        this.slide = true;
        setTimeout(() => {
          this.$store.dispatch('modals/hideModal');
          this.slide = false;
        }, 1500);
      }
    },
  }
</script>

<style scoped>

  .nav {
    background-color: transparent;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 9999;
    display: block;
  }

  .close_popup {
    position: absolute;
    width: 14px;
    height: 14px;
    right: 20px;
    top: 15px;
    z-index: 2;
    background: url("~assets/img/images/css_sprites.png") -114px -325px;
    background-repeat: no-repeat;
    cursor: pointer;
    -webkit-transition: transform 0.2s linear;
    -moz-transition: transform 0.2s linear;
    -ms-transition: transform 0.2s linear;
    -o-transition: transform 0.2s linear;
    transition: transform 0.2s linear;
  }

  .close_popup:hover {
    cursor: pointer;
    background: url("~assets/img/images/css_sprites.png") -138px -325px;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .links {
    position: absolute;
    display: inline-block;
    max-width: 450px;
    max-height: 300px;
    -webkit-animation: spin 0.8s linear infinite; /* Safari */
    margin: auto;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
  }

  .links-items {
    animation-name: slide;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    text-align: center;
    font-size: 26px !important;
    font-weight: 400 !important;
    letter-spacing: 5px;
  }

  @keyframes slide {
    0% {
      transform: translate(0px, 10px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }

  .item {
    list-style: none;
    color: rgba(65, 11, 6, 0.96);
    cursor: pointer;
    font-family: Poppins, sans-serif;
    font-weight: bolder;
    font-size: 25px;
    letter-spacing: 10px;
    transition: all .4s;
  }

  .item:after {
    background-color: #ffeb3b;
    display: block;
    content: "";
    height: 2px;
    width: 0%;
    -webkit-transition: width .3s ease-in-out;
    -moz--transition: width .3s ease-in-out;
    transition: width .3s ease-in-out;
  }
  .item:hover:after,
  .item:focus:after {
    width: 100%;
  }


  .blur-class {
    background-color: rgb(235, 199, 248) !important;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1;
    filter: blur(15px);
  }

  .slow {
    animation-name: slide2;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes slide2 {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }


</style>
