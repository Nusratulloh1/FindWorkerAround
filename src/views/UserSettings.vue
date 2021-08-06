<template>
    <div>
      <navbar></navbar>
<div class="hero-wrap hero-wrap-2 img" style="background-image: url('../assets/bg_1.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-12 text-center mb-5" data-aos="fade-down-left" data-aos-duration="1000">
          	<p class="breadcrumbs mb-0"><span class="mr-3"><router-link :to="'/my-account'">Bosh sahifa <i class="ion-ios-arrow-forward"></i></router-link></span> <span>Profil sozlamalari</span></p>
            <h1 class="mb-3">Profil sozlamalari</h1>
          </div>
        </div>
      </div>
    </div>
    <section class="ftco-section contact-section bg-light">
      <div class="container">
        <div class="row d-flex contact-info">
        </div>
        <div class="row block-12 justify-content-center">
            <div class="col-md-4 p-5 bg-white text-center" style="margin-top: 11px"  data-aos="fade-down-left" data-aos-duration="1000">
                <h1
                  style="margin-bottom: 50px;"
                >
                  Profil rasmi
                </h1>
                <div class="userimage mb-2">
                    <img src="../assets/bg_1.jpg" alt="img" width="70%" style="border-radius: 50%">
                </div>
                
                 <input class="form-control" type="file" id="formFile">
            </div>
          <div class="col-md-8 order-md-last d-flex">
            <form class="bg-white p-5 contact-form" data-aos="fade-down-left" data-aos-duration="1000">
                <h1 
                  style="margin-bottom: 50px;"
                >Shaxsiy ma'lumotlar</h1>
              <div class="form-group row">
                <div class="col-md-4 py-0">
                    <label for="s" class="d-flex align-items-center"><span>Familiya</span><p style="color: red">*</p></label>
                </div>
                    <div class="col-md pt-0">
                        <input
                   type="text" 
                   class="form-control mb-4"
                    >
                    </div>
              </div>
               <div class="form-group row">
                <div class="col-md-4 py-0">
                    <label for="s" class="d-flex align-items-center"><span>Ism</span><p style="color: red">*</p></label>
                </div>
                    <div class="col-md  pt-0">
                        <input
                   type="text"
                   class="form-control mb-4"
                    >
                    </div>
              </div>
               <div class="form-group row">
                <div class="col-md-4 py-0">
                    <label for="s" class="d-flex align-items-center"><span>Otasini ismi</span><p style="color: red">*</p></label>
                </div>
                    <div class="col-md pt-0">
                        <input
                   type="text" 
                   class="form-control mb-4"
                    >
                    </div>
              </div>
              <div class="form-group row mb-3">
                <div class="col-md-4 py-0">
                    <label for="s" class="d-flex"><span>Jins</span><p style="color: red">*</p></label>
                </div>
                    <div class="col-md pt-0 d-flex">
                       <div class="form-check mr-4">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" style="margin-top: 8px;">
  <label class="form-check-label" for="flexRadioDefault1">
    Erkak
  </label>
</div>
<div class="form-check mr-2">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked style="    margin-top: 8px;">
  <label class="form-check-label" for="flexRadioDefault2">
    Ayol
  </label>
</div>
                    </div>
              </div>
                    <div class="form-group row">
                <div class="col-md-4 py-0">
                    <label for="s" class="d-flex align-items-center"><span>Tug'ilgan kun</span><p style="color: red">*</p></label>
                </div>
                    <div class="col-md pt-0">
                        <input
                   type="date" 
                   class="form-control mb-4"
                    >
                    </div>
              </div>
                <div class="form-group row">
                <div class="col-md-4 py-0">
                    <label for="s" class="d-flex align-items-center"><span>Qayerdansiz</span><p style="color: red">*</p></label>
                </div>
                    <div class="col-md pt-0">
                        <input
                   type="search" 
                   class="form-control mb-4"
                    >
                    </div>
              </div>
                <div class="form-group row">
                <div class="col-md-4 py-0">
                    <label for="s" class="d-flex align-items-center"><span>E-mail</span><p style="color: red">*</p></label>
                </div>
                    <div class="col-md pt-0">
                        <input
                   type="email" 
                   class="form-control mb-4"
                    >
                    </div>
              </div>
                <div class="form-group row">
                <div class="col-md-4 py-0">
                    <label for="s" class="d-flex align-items-center"><span>Telefon raqam</span><p style="color: red">*</p></label>
                </div>
                    <div class="col-md pt-0">
                       <telefon class="mb-4" template="998XXXXXXXXX"></telefon>
                    </div>
              </div>
              <div
                class="d-flex"
              >
                 <div class="form-group">
                <input type="submit" value="Saqlash" class="btn btn-primary py-3 px-5 mt-2">
              </div>
               <div class="form-group">
                <input type="reset" value="Bekor qilish" class="btn py-3 px-5 mt-2">
              </div>
              </div>
            </form>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-6 bg-white">
              <form action="#" class="p-5" data-aos="fade-down-left" data-aos-duration="1000">
                <h1 
                  style="margin-bottom: 50px;"
                >Parolni o'zgartirish</h1>
              <div class="form-group row">
                <div class="col-md-4 py-0">
                    <label for="s" class="d-flex align-items-center"><span>Oldingi parol</span><p style="color: red">*</p></label>
                </div>
                    <div class="col-md pt-0">
                        <input
                   type="text" 
                   class="form-control mb-4"
                    >
                    </div>
              </div>
              <div class="form-group row">
                <div class="col-md-4 py-0">
                    <label for="s" class="d-flex align-items-center"><span>Yangi parol</span><p style="color: red">*</p></label>
                </div>
                    <div class="col-md pt-0">
                        <input
                   type="text" 
                   class="form-control mb-4"
                    >
                    </div>
              </div>
              <div class="form-group row">
                <div class="col-md-4 py-0">
                    <label for="s" class="d-flex align-items-center"><span>Parolni tasdiqlash</span><p style="color: red">*</p></label>
                </div>
                    <div class="col-md pt-0">
                        <input
                   type="text" 
                   class="form-control mb-4"
                    >
                    </div>
              </div>
               <div
                class="d-flex"
              >
                 <div class="form-group">
                <input type="submit" value="O'zgartirish" class="btn btn-primary py-3 px-5 mt-2">
              </div>
               <div class="form-group">
                <input type="reset" value="Bekor qilish" class="btn py-3 px-5 mt-2">
              </div>
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
import NavBar from '../components/UserNav.vue'
import Footer from '../components/Footer.vue'
import Telefon from '../components/telefon'
export default {
    name: 'UserSettings',
      components:{
  'navbar' : NavBar,
  'footer-bar' : Footer,
  'telefon' : Telefon
  },
  data  (){
   return{
   }
  }
    }
</script>
<style scoped>
   .img{
       background-image: url('../assets/image_4.jpg') !important;
   }
   button{
     border-radius: 50px !important;
     width: 100%;
     padding: 11px;
     font-size: 19px;
   }
   .userimage{
       text-align: center;
   }
</style>