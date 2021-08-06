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
	          <li data-aos="fade-down-left" data-aos-duration="1000" class="nav-item"><router-link :to="'/my-account'" class="nav-link" >Bosh sahifa</router-link></li>
	          <!-- <li data-aos="fade-down-left" data-aos-duration="1000" class="nav-item"><router-link :to="'/getjob'" class="nav-link">Hizmatga yollanish</router-link></li> -->
	          <li data-aos="fade-down-left" data-aos-duration="1000" class="nav-item"><router-link :to="'/contact-us'" class="nav-link">Sayt haqida</router-link></li>
            <li data-aos="fade-down-left"  data-aos-duration="1000" class="nav-item"><router-link :to="'/contact-us'" class="nav-link">Kontakt</router-link></li>
          </ul>
          <div class="dropdown" data-aos="fade-down-left" data-aos-duration="1000">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span >User name</span>
    <v-avatar
      width="33px"
      height="33px"
    >
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <router-link class="dropdown-item"  :to="'/my-settings'"><i class="bi bi-gear-fill"></i> Profil sozlamalari</router-link>
        <div
      class="dropdown-item text-center"
    >
      <div class="form-check form-switch p-0">
        <i class="bi bi-calendar-check-fill float-left mr-3"></i>
  <input class="form-check-input"  type="checkbox" id="flexSwitchCheckDefault" v-model="CheckboxValue" style="    width: 79%;">
   </div>
    </div>
    <router-link class="dropdown-item align-center" style="" :to="'/'"><i class="bi bi-box-arrow-right"></i>Chiqish </router-link>
  </div>
</div>
	      </div>
	    </div>
	  </nav>
</div>
</template>
<script>
  export default {
      name: 'UserNav',
    data: () => ({
      CheckboxValue: '' ,
    }),
  
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
.bi{
  font-size: 18px;
  margin-right: 2px;
}
.form-check-input{
  font-size: 24px;
}
</style>
