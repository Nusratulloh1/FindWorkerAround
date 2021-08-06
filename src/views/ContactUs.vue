<template>
    <div>
      <navbar></navbar>
<div class="hero-wrap hero-wrap-2 img" style="background-image: url('images/bg_1.jpg');" data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end justify-content-start">
          <div class="col-md-12 text-center mb-5" data-aos="fade-down-left" data-aos-duration="1000">
          	<p
              class="breadcrumbs mb-0"
            >
              <span class="mr-3">
                <router-link :to="'/'">
                  Bosh sahifa
                  <i class="ion-ios-arrow-forward"></i>
                  </router-link>
                  </span>
                  <span>Kontakt</span>
                  </p>
            <h1 class="mb-3">Bizga murojaat</h1>
          </div>
        </div>
      </div>
    </div>
		<section class="ftco-section contact-section bg-light">
      <div class="container">
        <div class="row d-flex mb-5 contact-info" data-aos="fade-down-left" data-aos-duration="1000">
          <div class="col-md-12 mb-4">
            <h2 class="h3">Biz haqimizda</h2>
          </div>
          <div class="w-100"></div>
          <div class="col-md-3">
            <p><span>Manzil:</span> Oʻzbekiston, Toshkent, Olmazor tumani, Universitet mahallasi</p>
          </div>
          <div class="col-md-3">
            <p><span>Telefon:</span> <a href="tel://+998977373098">+ 998 97 737-30-98</a></p>
          </div>
          <div class="col-md-3">
            <p><span>Email:</span> <a href="axunovnusrat@gmail.com">axunovnusrat@gmail.com</a></p>
          </div>
          <div class="col-md-3">
            <p><span>Website:</span> <a href="#">yoursite.com</a></p>
          </div>
        </div>
        <div class="row block-9">
          <div class="col-md-6 order-md-last d-flex">
            <form action="#" class="bg-white p-5 contact-form" data-aos="fade-down-left" data-aos-duration="1000">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Ismingiz">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Email">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Kasbingiz">
              </div>
              <div class="form-group">
                <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Habar mantni"></textarea>
              </div>
              <div class="form-group">
                <input type="submit" value="Habarni yuborish" class="btn btn-primary py-3 px-5">
              </div>
            </form>
          </div>
          <div class="col-md-6 d-flex">
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
export default {
    name: 'ContactUs',
      components:{
  'navbar' : NavBar,
  'footer-bar' : Footer
  },
    methods:{
    }
}
</script>
<style scoped>
   .img{
       background-image: url('../assets/image_4.jpg') !important;
   }
</style>