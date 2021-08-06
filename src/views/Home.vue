<template>
<div>
	<navbar></navbar>
    <div id="map" class="bg-white justify-content-md-center">
		<animat
		v-show="search"
		></animat>
      <div class="overlay"></div>
      <div class="container-fluid div1 pt-4 bg-white" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500"
	 v-show="!search"
	 >
							<div class="ftco-search">
								<div class="row">
				          <div class="col-md-12 tab-wrap p-3">
				              	<form class="search-job" @submit.prevent="">
				              		<div class="row no-gutters">
				              			<div class="col-sm-5 col-md-3  col-lg-12 mr-md-2 mb-2">
				              				<div class="form-group">
				              					<div class="form-field">
					              					<div class="icon"><span class="icon-map-marker"></span></div>
									                <input type="search" id="location"  class="form-control" placeholder="Manzil" required>
									              </div>
								              </div>
				              			</div>
										  <div class="col-sm-6 col-md-3 col-lg-12 mr-md-2 mb-2">
				              				<div class="form-group">
				              					<div class="form-field">
					              					<div class="icon"><span class="icon-user"></span></div>
									                <input type="number" class="form-control" placeholder="Nechta odam" value="1" required>
									              </div>
								              </div>
				              			</div>
										<div class="col-sm-5 col-md-3  col-lg-12 mr-md-2 mb-2">
				              				<div class="form-group">
				              					<div class="form-field">
					              					<div class="icon"><span class="icon-phone"></span></div>
									                 <telefon template="998XXXXXXXXX"></telefon>
									              </div>
								              </div>
				              			</div>
										<div class="col-sm-6 col-md-2  col-lg-12 mr-md-2 mb-2">
				              				<div class="form-group">
				              					<div class="form-field">
					              					<div class="icon"><span class="icon-send"></span></div>
									                <input type="text" class="form-control" placeholder="Izoh" required>
									              </div>
								              </div>
				              			</div>
										  <div class="col-md-12 mb-2 d-flex">
<div class="form_radio_group">
	<div class="form_radio_group-item">
		<input id="radio-1" type="radio" name="radio" value="1" checked>
		<label for="radio-1" class="d-flex flex-column p-1 mr-2">
			<span><span class="icon-alarm mr-1"></span><span>3 soat</span></span>
				<span>60.000 so'm</span></label>
	</div>
	<div class="form_radio_group-item">
		<input id="radio-2" type="radio" name="radio" value="2">
		<label for="radio-2" class="d-flex flex-column p-1 mr-2">
			    <span><span class="icon-alarm mr-1"></span><span>4 soat</span></span>
					<span>80.000 so'm</span>
		</label>
	</div>
	<div class="form_radio_group-item">
		<input id="radio-3" type="radio" name="radio" value="3">
		<label for="radio-3" class="d-flex flex-column p-1 mr-2">
			 <span><span class="icon-alarm mr-1"></span><span>5 soat</span></span>
											   <span>100.000 so'm</span>
		</label>
	</div>
		<div class="form_radio_group-item">
		<input id="radio-4" type="radio" name="radio" value="4">
		<label for="radio-4" class="d-flex flex-column p-1 mr-2"> 
			<span><span class="icon-alarm mr-1"></span><span>6 soat</span></span>
											   <span>120.000 so'm</span></label>
	</div>
</div>
										  </div>
										  <div class="col-md-12 p-0">
				              				<div class="form-group">
				              					<div class="form-field">
								                	<button  @click="search = !search" class="form-control btn btn-primary">Buyurtma</button>
												  </div>
								              </div>
				              			</div>
				              		</div>
				              	</form>
				          </div>
				        </div>
			        </div>
	          </div>
			  <div v-show="search" class="text-center div3 bg-primary text-white" style="border-radius: 6px; padding: 3px;">
  <div class="spinner-border" role="status">
    
  </div>
  <span class="ml-2" style="font-size: 25px;">Qidirilmoqda...</span>
</div>
				<button v-show="search" type="button" class="btn btn-primary div2" data-toggle="modal" data-target="#staticBackdrop">
<div class="text-center">
    
  </div>
  <span class="ml-2" style="font-size: 25px;">Bekor qilish</span>
</button>


<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Savol</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Rostan ham buyutmani bekor qilmoqchimisiz ?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="search = !search" data-dismiss="modal">Ha</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal">Yo'q</button>
      </div>
    </div>
  </div>
</div>
	        </div>
			<footer-bar></footer-bar>
	    	</div>
</template>
<script>
import NavBar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Telefon from '../components/telefon'
import Animat from '../components/Animat'
// import Map from  '../components/map'
export default {
	name: 'Home',
	  components:{
  'navbar' : NavBar,
  'footer-bar' : Footer,
  'telefon' : Telefon,
  Animat,

  },
  data(){
	  return{
		  search: false
	  }
  },
  mounted(){
	   alert('Sayt kartasi boshqa betga otgandan keyin ishlamay qolishi mumkin')
  }
}
</script>
<style scoped>
.btn-outline-primary{
	font-size: 14px;
    font-weight: 600;
}
#map{
	height: 700px;
	position: relative;
}
.search-job .form-group .icon{
	color: #206dfb;
}
.div1{
/* display: none !important; */
position: absolute; 
z-index: 1;
top: 140px;
margin-left: 5px;
width: 30%;
}
.div2{
	position: absolute;
	z-index: 99;
	margin-top: calc(85vh - 0%);
	margin-left: 260px;
}
.div3{
	position: absolute;
	z-index: 99;
	margin-top: calc(85vh - 0%);
	margin-left: 40px;
}
@media (max-width: 991px){
 .div1{
	 	position: absolute;
	z-index: 1;
	padding: 10;
	margin: 0;
	width: 100%;
	margin-top: calc(75vh - 0%);
 }
}
/* .div2{
	position: absolute;
	z-index: 1;
	padding: 0;
	margin: 0;
	margin-top: calc(75vh - 0%);
} */
.form_radio_group {
	display: inline-block;
	overflow: hidden;
}
.form_radio_group-item {
	display: inline-block;    
}
.form_radio_group input[type=radio] {
	display: none;
}
.form_radio_group label {
	display: inline-block;
	cursor: pointer;
	padding: 0px 15px;
	font-size: 15px;
    font-weight: 300;
	border: 1px solid #206dfb;
	color: #206dfb;
	user-select: none;
	border-radius:  6px;
}
 
/* Checked */
.form_radio_group input[type=radio]:checked + label {
	background: #206dfb;
	color: white;
}
 
/* Hover */
.form_radio_group label:hover {
	color: white;
	background: #206dfb;
}
 
/* Disabled */
.form_radio_group input[type=radio]:disabled + label {
	background: #206dfb;
	color: white;
}
</style>