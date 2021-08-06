<template>
    <div>
      <navbar></navbar>
<div class="hero-wrap hero-wrap-2 img" style="background-image: url('../assets/bg_1.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-12 text-center mb-5" data-aos="fade-down-left" data-aos-duration="1000">
          	<p class="breadcrumbs mb-0"><span class="mr-3"><router-link :to="'/forgot-password'">Orqaga <i class="ion-ios-arrow-forward"></i></router-link></span> <span>Parolni qaytarib olish</span></p>
            <h1 class="mb-3">Kodni tasdiqlash</h1>
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
            <form action="#" class="bg-white p-5 contact-form" data-aos="fade-down-left" data-aos-duration="1000">
              <div class="form-group">
                <input 
                   type="password"
                   id="password"
                   class="form-control"
                    placeholder="Kodni kiriting"
                    v-model.trim="$v.password.$model"
                   :class="{'is-invalid' :$v.password.$error, 'is-valid':!$v.password.$invalid} "
                    >
                    <div class="valid-feedback ml-3">
                       Tog'ri
                   </div>
                   <div class="invalid-feedback ml-3">
                       <span v-if="!$v.password.required">Kodni yozing !</span>
                       <span v-if="!$v.password.numeric">Raqam bilan yozing iltimos !</span>
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
               <div class="form-group">
                <input type="submit" value="Tasdiqlash" class="btn btn-primary py-3 px-5 mt-2">
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <footer-bar></footer-bar>
    </div>
</template>
<script>
import NavBar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import { required, minLength, email, maxLength, numeric} from 'vuelidate/lib/validators'
export default {
    name: 'Login',
      components:{
  'navbar' : NavBar,
  'footer-bar' : Footer
  },
    data(){
        return{
            click: false,
            password: '',
            showpassword: false
        }
},
validations:{
  password: {
    numeric,
    required,
  }
},
methods:{
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
     width: 100%;
     padding: 11px;
     font-size: 19px;
   }
   #auto{
       width: auto;
   }
</style>