<template>
    <div>
      <navbar></navbar>
<div class="hero-wrap hero-wrap-2 img" style="background-image: url('../assets/bg_1.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-12 text-center mb-5" data-aos="fade-down-left" data-aos-duration="1000">
          	<p class="breadcrumbs mb-0"><span class="mr-3"><router-link :to="'/'">Home <i class="ion-ios-arrow-forward"></i></router-link></span> <span>Login</span></p>
            <h1 class="mb-3">Login</h1>
          </div>
        </div>
      </div>
    </div>
    <section class="ftco-section contact-section bg-light">
      <div class="container">
        <div class="row d-flex contact-info">
        </div>
        <div class="row block-9 justify-content-center">
          <div class="col-md-6 order-md-last d-flex">
            <form class="bg-white p-5 contact-form" @submit.prevent="submitForm" data-aos="fade-down-left" data-aos-duration="1000">
              <div class="form-group">
                <input
                  type="text" 
                  class="form-control"
                  placeholder="Username"
                   v-model.trim="$v.email.$model"
                   :class="{'is-invalid' :$v.email.$error, 'is-valid':!$v.email.$invalid} "
                >
                <div class="valid-feedback ml-3">
                       Tog'ri
                   </div>
                   <div class="invalid-feedback ml-3">
                       <span v-if="!$v.email.required">Email kiriting !</span>
                       <span v-if="!$v.email.email">Email tog'ri kiriting !</span>
                   </div>
              </div>
              <div class="form-group mb-0">
                <input type="password" id="password" class="form-control" placeholder="Sizning parol"
                 v-model.trim="$v.password.$model"
                   :class="{'is-invalid' :$v.password.$error, 'is-valid':!$v.password.$invalid} "
                >
                <div class="valid-feedback ml-3">
                       Tog'ri
                   </div>
                   <div class="invalid-feedback ml-3">
                       <span v-if="!$v.password.required">Parol yozing iltimos !</span>
                        <span v-if="!$v.password.numeric">Raqam yozing </span>
                       <span v-if="!$v.password.minLength">Parol 6 raqamdan kam bo'lmasligi kerak </span>
                       <span v-if="!$v.password.maxLength">Parol 12 raqamdan ko'p bo'lmasligi kerak </span>
                   </div>
              </div>
              <div class="form-group justify-start pl-3 mt-2 mb-0">
                <input 
                   type="checkbox" 
                   id="auto"
                   @click="toggleShowPassword"
                   v-model="showpassword"
                   >
                <label for="auto" class="ml-2">Ko'rsatish</label>
              </div>
              <div
                class="form-group" style="float: right"
              >
                <router-link :to="'/forgot-password'">Forgot password ?</router-link>
              </div>
              <div class="form-group">
                <input type="submit" value="Login" class="btn btn-primary py-3 px-5 mt-2">
              </div>
              <div class="text-center">
                  <h6>or Login with </h6>
                  <google-sign-in></google-sign-in>
                  <facebook-sign-in></facebook-sign-in>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div
    >
    </div>
    <footer-bar></footer-bar>
    </div>
</template>
<script>
import NavBar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { required, minLength, maxLength, email, numeric} from 'vuelidate/lib/validators'
import  firebase from 'firebase/app'
import "firebase/auth"
import GoogleSignIn from '../components/Googlesignin.vue'
import FacebookSignIn from '../components/facebooksign'
export default {
    name: 'FormLogin',
      components:{
  'navbar' : NavBar,
  'footer-bar' : Footer,
  GoogleSignIn,
  FacebookSignIn,
  
  },
    data () {
         return {
             email: '',
             password: '',
             showpassword: false,
             submitstatus: null
         }
    },
    validations: {
        email: {
            required,
            email
            // isUnique (value) {
            //     if(value == '') return true

            //     return new Promise ((resolve) => {
            //         setTimeout(() => {
            //             resolve(typeof value === 'string' && value.length % 2 !== 0)
            //         }, 350 + Math.random() * 300)
            //     })
            // }
        },
        password: {
         required,
         numeric,
         minLength: minLength(6),
         maxLength: maxLength(12)

        }
    },
    methods: {
      toggleShowPassword () {
        var show = document.getElementById('password')
        if(this.showpassword == false){
          this.showpassword = true
          show.type = "text"
        } else{
          this.showpassword = false
          show.type = "password"
        }
      },
    async  submitForm() {

try{
 const val = await   firebase.auth().signInWithEmailAndPassword(this.email, this.password)
 console.log(val)
 this.$router.push('/my-account')
}catch(err){
  alert("Bunday foydalanuvchi mavjud emas !")
}


        this.$v.$touch()
        if(this.$v.$invalid){
          this.submitstatus = "Xato"
        }else {
         console.log("togri")
        }
      }
    }
}
</script>
<style scoped>
   .img{
       background-image: url('../assets/image_4.jpg') !important;
   }
   input{
       border-radius: 50px !important;
       width: 100%;
   }
   button{
     border-radius: 50px !important;
   }
      button:hover .icon-twitter{
     color: white;
   }
   #auto{
     width: auto;
   }
   .icon-twitter{
     color: #007bff;
   }
</style>