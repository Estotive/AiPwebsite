import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
// import fb from 'firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
    vuetify,
    render:h=>h(App),
    router:router,
    store,
    created(){
        var firebaseConfig = {
  apiKey: "AIzaSyDz6k9bqs3k9-yhvy_9ElNsnj2Zj5vPyi8",
  authDomain: "nazvanieproekta-bebde.firebaseapp.com",
  projectId: "nazvanieproekta-bebde",
  storageBucket: "nazvanieproekta-bebde.appspot.com",
  messagingSenderId: "792037850649",
  appId: "1:792037850649:web:1fd65f3b4b740ef784f488",
  measurementId: "G-7F74VZ6ZVT"
    };
    // Initialize Firebase
        // fb.initializeApp(firebaseConfig);
        // fb.analytics();
        const app = initializeApp(firebaseConfig);
        getAnalytics(app);
    }  
}).$mount('#app')