<template>
<div>
	  <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container-fluid px-md-4	">
	      <router-link :to="'/'" class="navbar-brand" data-aos="fade-down-left">Addboard</router-link>
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="oi oi-menu"></span> Menu
	      </button>
	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav ml-auto">
	          <li data-aos="fade-down-left" data-aos-duration="1000" class="nav-item"><a href="/" class="nav-link" >Bosh sahifa</a></li>
	          <li data-aos="fade-down-left" data-aos-duration="1000" class="nav-item"><router-link :to="'/getjob'" class="nav-link">Hizmatga yollanish</router-link></li>
	          <li data-aos="fade-down-left" data-aos-duration="1000" class="nav-item"><router-link :to="'/contact-us'" class="nav-link">Sayt haqida</router-link></li>
	          <li data-aos="fade-down-left" data-aos-duration="1000" class="nav-item"><router-link :to="'/contact-us'" class="nav-link">Kontakt</router-link></li>
	          <li data-aos="fade-down-left" data-aos-duration="1000" class="nav-item cta mr-md-1"><router-link :to="'/login'" class="nav-link" >Kirish</router-link></li>
	          <li data-aos="fade-down-left" data-aos-duration="1000" class="nav-item cta cta-colored"> <router-link :to="'/register'" class="nav-link">A'zo bo'lish</router-link> </li>
	        </ul>
	      </div>
	    </div>
	  </nav>
</div>
</template>
<script>
export default {
  name: 'Navbar',
}
</script>
<style scoped>
.ftco-navbar-light {
    background: black !important;
    position: absolute;
    top: 0px !important;
    left: 0;
    right: 0;
    z-index: 3;
}
</style>
