<template>
  <v-card>
  <div class="popup_box" data-id="login">
    <div class="popup">
      <div class="close_popup" @click="hideModal()"></div>
      <h5>{{"login-title" | localize}}</h5>
      <v-text-field :placeholder= "loc('login-email-placeholder')"
                    type="email"
                    color="indigo lighten-2"
                    v-model="email"
                    hide-details="auto"
                    required></v-text-field>

      <v-text-field color="indigo lighten-2"
                    v-model="password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    name="input-10-1"
                    :placeholder= "loc('login-password-placeholder')"
                    counter
                    @click:append="show = !show"
                    required></v-text-field>

      <div >
        <v-btn
          color="blue-grey"
          class="ma-2 white--text"
          @click="login()"
        >
          {{"login-title" | localize}}
        </v-btn>
      </div>
      <div class="added">
        <p>{{'register-yet' | localize}} <span class="open_popup" data-id="register"
                                                     @click="showModal('register')"> {{'register' | localize}} </span>
        </p>
      </div>
    </div>
  </div>
  </v-card>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        show: true,
        email: '',
        password: '',
      }
    },

    mounted() {
      setTimeout(() => {
        this.show = false;
      }, 500)
    },

    methods: {
      loc(str){
        return this.$options.filters.localize(str)
      },

      hideModal() {
        this.$store.dispatch('modals/hideModal');
      },

      showModal(type) {
        this.$store.dispatch('modals/showModal', type);
      },

      async login() {
       try {
             await this.$auth.loginWith('local', {
                data: {
                  email: this.email,
                  password: this.password
                }
              });

         this.$store.dispatch('modals/hideModal');
              this.$router.replace({
                path: `/search-images`
              });
            } catch (e) {

            }
      }
    }

  }
</script>

<style scoped>

.popup_box {

  position: fixed;

  width: 100%;

  height: 100%;

  left: 0;

  top: 0;

  background-color: rgba(247, 244, 244, 0.5);

  z-index: 9;

  /*display: none;*/

}

.popup_box .popup {

  position: absolute;

  left: 50%;

  top: 50%;

  text-align: center;

  border-radius: 5px;

  width: 100%;

  padding: 27px 21px 38px 21px;

  max-width: 390px;

  min-height: 350px;

  background-color: #fff;

  -webkit-box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.25);

  -moz-box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.25);

  box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.25);

  -webkit-transform: translate(-50%, -50%);

  -moz-transform: translate(-50%, -50%);

  -ms-transform: translate(-50%, -50%);

  -o-transform: translate(-50%, -50%);

  transform: translate(-50%, -50%);

}

.popup_box .popup .close_popup {

  position: absolute;

  width: 14px;

  height: 14px;

  right: 15px;

  top: 15px;

  background: url("~assets/img/images/css_sprites.png") -114px -325px;

  background-repeat: no-repeat;

  cursor: pointer;

  -webkit-transition: transform 0.2s linear;

  -moz-transition: transform 0.2s linear;

  -ms-transition: transform 0.2s linear;

  -o-transition: transform 0.2s linear;

  transition: transform 0.2s linear;

}

.popup_box .popup .close_popup:hover {

  cursor: pointer;

  background: url("~assets/img/images/css_sprites.png") -138px -325px;

  -webkit-transform: rotate(90deg);

  -moz-transform: rotate(90deg);

  -ms-transform: rotate(90deg);

  -o-transform: rotate(90deg);

  transform: rotate(90deg);

}

.popup_box .popup h5 {

  font-size: 22px;

  color: #1083ff;

  margin-bottom: 10px;

}

.popup_box .popup .desc {

  font-size: 14px;

  color: #595959;

  margin-bottom: 30px;

}

.popup_box .popup form input {

  width: 100%;

  border-radius: 5px;

  border: 1px solid #d8dee3;

  padding: 14px 20px;

  font-size: 16px;

  margin-bottom: 20px;

}

.captcha_box {

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 20px;

}

.popup_box .popup form .captcha_box input {

  width: 50%;

  margin-bottom: 0;

}

.reset {

  display: inline-block;

  width: 17px;

  height: 20px;

  background: url("~assets/img/images/css_sprites.png") -65px -325px;

  cursor: pointer;

}

.popup_box .popup form label {

  position: relative;

  display: block;

  width: 100%;

  text-align: left;

  margin-bottom: 40px;

  cursor: pointer;

}

.popup_box .popup form label input[type="checkbox"] {

  position: absolute;

  opacity: 0;

}

.popup_box .popup form label input + span {

  position: relative;

  display: inline-block;

  width: 16px;

  height: 16px;

  border-radius: 3px;

  border: 2px solid #9f9f9f;

  margin-right: 9px;

}

.popup_box .popup form label input:checked + span:after {

  position: absolute;

  content: '';

  left: 50%;

  top: 50%;

  width: 9px;

  height: 5px;

  -webkit-transform: translate(-50%, -50%);

  -moz-transform: translate(-50%, -50%);

  -ms-transform: translate(-50%, -50%);

  -o-transform: translate(-50%, -50%);

  transform: translate(-50%, -50%);

  background: url("~assets/img/images/css_sprites.png") -413px -197px;

}

.popup_box .popup form label input + span + span {

  /*display: inline-block;*/

  vertical-align: text-top;

  cursor: pointer;

}

.popup_box .popup form label input + span + span small {

  color: #00ccff;

  font-size: 16px;

  cursor: pointer;

}

.popup_box .popup form button {

  border: none;

  margin-bottom: 20px;

  border-radius: 5px;

}

.added {

  border-top: 1px solid #d8dee3;

  padding-top: 25px;

}

.added span {

  color: #00ccff;

  cursor: pointer;

}

.recall_box {

  position: relative;

}

.recall_box .recall {

  position: absolute;

  right: 20px;

  top: 16px;

  color: #00ccff;

  font-size: 16px;

  cursor: pointer;

}











  .worning{
    margin-bottom: 5px;
    color: #ff0f09;
    padding-left: 20px;
    text-align: left;
    font-size: 14px;
  }

  .worning i{
    font-family: 'Source Sans Pro', sans-serif !important;
    font-style: unset;
  }

  .errorinput {
    border-color: red !important;
  }
</style>
