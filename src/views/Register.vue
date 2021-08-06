<template>
    <div>
      <navbar></navbar>
<div class="hero-wrap hero-wrap-2 img" style="background-image: url('../assets/bg_1.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-12 text-center mb-5" data-aos="fade-down-left">
          	<p class="breadcrumbs mb-0"><span class="mr-3"><router-link :to="'/'">Bosh sahifa <i class="ion-ios-arrow-forward"></i></router-link></span> <span>A'zo bo'lish</span></p>
            <h1 class="mb-3">A'zo bo'lish</h1>
          </div>
        </div>
      </div>
    </div>
        <section class="ftco-section contact-section bg-light">
      <div class="container" >
        <div class="row d-flex contact-info">
        </div>
        <div class="row block-9 justify-content-center">
          <div class="col-md-6 order-md-last d-flex">
            <form action="#" class="bg-white p-5 contact-form" @submit.prevent="submitForm" data-aos="fade-down-left">
               <div class="form-group">
                <input type="text" class="form-control" placeholder="User name"
                  v-model.trim="$v.username.$model"
                  :class="{'is-invalid' :$v.username.$error, 'is-valid':!$v.username.$invalid} "
                >
                 <div class="valid-feedback ml-3">
                       Tog'ri
                   </div>
                   <div class="invalid-feedback ml-3">
                       <span v-if="!$v.username.required">Username yozing iltimos !</span>
                       <span v-if="!$v.username.isUnique">Username bosh emas !</span>
                       <span v-if="!$v.username.minLength"> 6 dan kam bo'lmastligi lozim</span>
                       <span v-if="!$v.username.maxLength">12 dan ko'p bo'lmastligi lozim</span>
                   </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Email kiriting"
                v-model.trim="$v.email.$model"
                  :class="{'is-invalid' :$v.email.$error, 'is-valid':!$v.email.$invalid} "
                >
                <div class="valid-feedback ml-3">
                       Tog'ri
                   </div>
                   <div class="invalid-feedback ml-3">
                       <span v-if="!$v.email.required">Email yozing iltimos !</span>
                       <span v-if="!$v.email.email">Tog'ri yozing !</span>
                   </div>
              </div>
               <div class="form-group d-flex">
               <div class="form-check ml-2">
                   <input class="form-check-input mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked
                    v-model="men" required
                   >
                   <label class="form-check-label" for="flexRadioDefault1">
                     Erkak
                   </label>
                 </div>
                 <div class="form-check ml-3">
                   <input class="form-check-input mt-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                   v-model="women" required
                   >
                   <label class="form-check-label" for="flexRadioDefault2">
                     Ayol
                   </label>
                 </div>
               </div>
                  <div class="form-group mb-0">
                <input type="password" id="password" class="form-control" placeholder="Parol"
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
              <div class="form-group justify-start pl-3 mb-0 mt-2">
                <input 
                   type="checkbox" 
                   id="auto"
                   @click="toggleShowPassword1"
                   v-model="showpassword"
                   >
                <label for="auto" class="ml-2">Ko'rsatish</label>
              </div>
               <div class="form-group mb-0">
                <input type="password" id="confirm" class="form-control" placeholder="Parolni tasdiqlash"
                 v-model.trim="$v.confirm.$model"
                   :class="{'is-invalid' :$v.confirm.$error, 'is-valid':!$v.confirm.$invalid} "
                >
                <div class="valid-feedback ml-3">
                       Tog'ri
                   </div>
                   <div class="invalid-feedback ml-3">
                       <span v-if="!$v.confirm.required">Parol yozing iltimos !</span>
                        <span v-if="!$v.confirm.sameAs">Parol notog'ri </span>
                   </div>
              </div>
              <div class="form-group justify-start pl-3 mt-2 mb-0">
                <input 
                   type="checkbox" 
                   id="auto1"
                   @click="toggleShowPassword2"
                   v-model="showpassword2"
                   >
                <label for="auto1" class="ml-2">Ko'rsatish</label>
              </div>
              <div class="form-group">
                <input type="submit" value="A'zo bo'lish" class="btn btn-primary py-3 px-5 mt-3 submit1">
              </div>
              <div class="text-center">
                  <h6>quidagilar orqali a'zo bo'ling :</h6>
                  <button type="button" class="btn btn-outline-primary mr-3"><span class="icon-facebook"></span></button>
                  <button type="button" class="btn btn-outline-primary mr-3"><span class="icon-google"></span></button>
                  <button type="button" class="btn btn-outline-primary"><span class="icon-twitter"></span></button>
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
import { required, minLength, maxLength, numeric, email, sameAs} from 'vuelidate/lib/validators'
import  firebase from 'firebase/app'
import "firebase/auth"
export default {
    name: 'Register',
      components:{
  'navbar' : NavBar,
  'footer-bar' : Footer
  },
    data () {
         return {
             username: '',
             email: '',
             men: '',
             women: '',
             password: '',
             confirm: '',
             showpassword: false,
             showpassword2: false,
             submitstatus: null

         }
    },
    validations: {
        username: {
            required,
             minLength: minLength(6),
            maxLength: maxLength(12),
            isUnique (value) {
                if(value == '') return true

                return new Promise ((resolve) => {
                    setTimeout(() => {
                        resolve(typeof value === 'string' && value.length % 2 !== 0)
                    }, 350 + Math.random() * 300)
                })
            }
        },
        email:{
         required,
         email,
        },
        password: {
         required,
         numeric,
         minLength: minLength(6),
         maxLength: maxLength(14)
        },
        confirm: {
         required,
         sameAs: sameAs('password')
         
        }
    },
    methods: {
      toggleShowPassword1 () {
        var show = document.getElementById('password', 'confirm')
        if(this.showpassword == false){
          this.showpassword = true
          show.type = "text"
        } else{
          this.showpassword = false
          show.type = "password"
        }
      },
        toggleShowPassword2 () {
        var show = document.getElementById('confirm')
        if(this.showpassword2 == false){
          this.showpassword2 = true
          show.type = "text"
        } else{
          this.showpassword2 = false
          show.type = "password"
        }
      },
    async  submitForm() {
        
        try{

      const user =  firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      console.log(user)

        }
        catch(err){
         console.log(err)
          this.submitstatus = alert("Iltimos a'zo bo'lish uchun to'liq to'ldiring")
        }
                this.$v.$touch()
        if(this.$v.$invalid){
          this.submitstatus = alert("Iltimos a'zo bo'lish uchun to'liq to'ldiring")
        }
        else {
          alert('Muzaqqiyatli !!!')
          this.$router.push('/my-settings')
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
   }
   .submit1{
    width: 100%;
   }
   button{
     border-radius: 50px !important;
   }
   .form-select{
     width: 100%;
     border-radius: 50px;
     height: 52px;
    font-weight: 400;
    font-size: 15px;
    padding: 0.375rem 0.75rem;
    color: #b3b5b6 !important;
   }
</style>