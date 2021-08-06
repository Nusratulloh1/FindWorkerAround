import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import Vuelidate from 'vuelidate'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import firebase from 'firebase/app'
import GSignInButton from 'vue-google-signin-button'
Vue.use(GSignInButton)



Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)

// ..
AOS.init()

Vue.use(Vuelidate)

Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGDs5F1E2UzGLSGv9WCDw2wQVuxrgTl_k",
  authDomain: "addboard1.firebaseapp.com",
  projectId: "addboard1",
  storageBucket: "addboard1.appspot.com",
  messagingSenderId: "906312232549",
  appId: "1:906312232549:web:10310f1e8ac8444e81208c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')