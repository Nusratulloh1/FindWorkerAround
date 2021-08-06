<template>
<div>
	<navbar></navbar>
    <div id="map" class="bg-white justify-content-md-center">
      <div class="overlay"></div>
      <div class="container div1 d-none d-lg-block bg-white" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500">
							<div class="ftco-search">
								<div class="row">
				          <div class="col-md-12 tab-wrap p-3" >
				              	<form action="#" class="search-job">
				              		<div class="row no-gutters">
				              			<div class="col-md-12 mr-md-2 mb-2">
				              				<div class="form-group">
				              					<div class="form-field">
					              					<div class="icon"><span class="icon-map-marker"></span></div>
									                <input type="search" id="location"  class="form-control" placeholder="Manzil">	
									              </div>
								              </div>
				              			</div>
										  <div class="col-md-12 mr-md-2 mb-2">
				              				<div class="form-group">
				              					<div class="form-field">
					              					<div class="icon"><span class="icon-user"></span></div>
									                <input type="number" class="form-control" placeholder="Nechta odam" required>
									              </div>
								              </div>
				              			</div>
										<div class="col-md-12 mr-md-2 mb-2">
				              				<div class="form-group">
				              					<div class="form-field">
					              					<div class="icon"><span class="icon-phone"></span></div>
									                <telefon template="998XXXXXXXXX"></telefon>
									              </div>
								              </div>
				              			</div>
										<div class="col-md-12 mr-md-2 mb-2">
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
		<input id="radio-4" type="radio" name="radio" value="4" checked>
		<label for="radio-4" class="d-flex flex-column p-1 mr-2"> 
			<span><span class="icon-alarm mr-1"></span><span>6 soat</span></span>
											   <span>120.000 so'm</span></label>
	</div>
</div>
										  </div>
				              			<div class="col-md-12">
				              				<div class="form-group">
				              					<div class="form-field">
								                	<input type="submit" value="Buyurtma"  class="form-control btn btn-primary">
									              </div>
								              </div>
				              			</div>
				              		</div>
				              	</form>
				          </div>
				        </div>
			        </div>
	          </div>
			   <div class="container-fluid div2 d-lg-none" data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000">
							<div class="ftco-search">
								<div class="row">
				          <div class="col-md-12 tab-wrap">
				            <div class="tab-content p-4" id="v-pills-tabContent">
				              <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
				              	<form action="#" class="search-job">
				              		<div class="row no-gutters">
				              			<div class="col-sm-6 col-md-3 mr-2 mb-2">
				              				<div class="form-group">
				              					<div class="form-field">
					              					<div class="icon"><span class="icon-map-marker"></span></div>
									                <input type="search" id="location2" class="form-control" placeholder="Manzil">
									              </div>
								              </div>
				              			</div>
										  <div class="col-sm-5 col-md-3 mr-2 mb-2">
				              				<div class="form-group">
				              					<div class="form-field">
					              					<div class="icon"><span class="icon-user"></span></div>
									                <input type="number" class="form-control" placeholder="Nechta odam" required>
									              </div>
								              </div>
				              			</div>
										<div class="col-sm-6 col-md-3 mr-2 mb-2">
				              				<div class="form-group">
				              					<div class="form-field">
					              					<div class="icon"><span class="icon-phone"></span></div>
									                <telefon template="998XXXXXXXXX"></telefon>
									              </div>
								              </div>
				              			</div>
										<div class="col-sm-5 col-md-2 mr-2 mb-2">
				              				<div class="form-group">
				              					<div class="form-field">
					              					<div class="icon"><span class="icon-send"></span></div>
									                <input type="text" class="form-control" placeholder="Izoh">
									              </div>
								              </div>
				              			</div>
										   <div class="col-md-12 mb-2 d-flex">
<div class="form_radio_group">
	<div class="form_radio_group-item">
		<input id="radio1-1" type="radio" name="radio" value="1" checked>
		<label for="radio1-1" class="d-flex flex-column p-1 mr-2"> 
			<span><span class="icon-alarm mr-1"></span><span>3 soat</span></span>
				<span>60.000 so'm</span></label>
	</div>
	<div class="form_radio_group-item">
		<input id="radio1-2" type="radio" name="radio" value="2">
		<label for="radio1-2" class="d-flex flex-column p-1 mr-2">
			    <span><span class="icon-alarm mr-1"></span><span>4 soat</span></span>
					<span>80.000 so'm</span>
		</label>
	</div>
	<div class="form_radio_group-item">
		<input id="radio1-3" type="radio" name="radio" value="3">
		<label for="radio1-3" class="d-flex flex-column p-1 mr-2">
			 <span><span class="icon-alarm mr-1"></span><span>5 soat</span></span>
											   <span>100.000 so'm</span>
		</label>
	</div>
		<div class="form_radio_group-item">
		<input id="radio1-4" type="radio" name="radio" value="4">
		<label for="radio1-4" class="d-flex flex-column p-1 mr-2"> 
			<span><span class="icon-alarm mr-1"></span><span>6 soat</span></span>
											   <span>120.000 so'm</span></label>
	</div>
</div>
										   </div>
				              			<div class="col-12">
				              				<div class="form-group">
				              					<div class="form-field">
								                	<input type="submit" value="Buyurtma" class="form-control btn btn-primary">
									              </div>
								              </div>
				              			</div>
				              		</div>
				              	</form>
				              </div>
				            </div>
				          </div>
				        </div>
			        </div>
	          </div>
	        </div>
			<footer-bar></footer-bar>
	    	</div>
</template>
<script>
import NavBar from '../components/UserNav'
import Footer from '../components/Footer.vue'
import Telefon from '../components/telefon'
export default {
	name: 'Home',
	  components:{
  'navbar' : NavBar,
  'footer-bar' : Footer,
  'telefon': Telefon,
  },
  data:{
  phone_number: '',
  },
  methods: {    
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
	z-index: 1;
	padding: 0;
	margin: 0;
	margin-top: calc(100vh - -20%);
}
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