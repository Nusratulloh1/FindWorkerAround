<template>
    <div>
      <navbar></navbar>
<div class="hero-wrap hero-wrap-2 img" style="background-image: url('../assets/bg_1.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-12 text-center mb-5" data-aos="fade-down-left" data-aos-duration="1000">
          	<p class="breadcrumbs mb-0"><span class="mr-3"><router-link :to="'/login'">Kirish <i class="ion-ios-arrow-forward"></i></router-link></span> <span>Parolni qaytarib olish</span></p>
            <h1 class="mb-3">Parolni qaytarib olish</h1>
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
                   type="email" 
                   class="form-control"
                    placeholder="Sizning email"
                    v-model.trim="$v.email.$model"
                   :class="{'is-invalid' :$v.email.$error, 'is-valid':!$v.email.$invalid} "
                    >
                    <div class="valid-feedback ml-3">
                       Tog'ri
                   </div>
                   <div class="invalid-feedback ml-3">
                       <span v-if="!$v.email.required">Email yozing iltimos !</span>
                       <span v-if="!$v.email.email">Emailni tog'ri yozing iltimos !</span>
                   </div>
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
            email: '',
        }
},
validations:{
  email: {
    email,
    required,
  }
},
  methods:{
          submitForm() {
        this.$v.$touch()
        if(this.$v.$invalid){
          this.submitstatus = "Xato"
        }else {
          this.$router.push('/verify-code')
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
     width: 100%;
     padding: 11px;
     font-size: 19px;
   }
</style>