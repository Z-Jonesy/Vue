// CSS
import 'bootstrap/scss/bootstrap.scss';
import './style.scss';

// JS
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';

// INIT
Vue.use(VueRouter);

new Vue({
    el: '#app',
    router,
    render: h=> h(App)
});

//Dataservice teszt
import DataService from './DataService';

const message = {
    "email": "dosa.balint@netacademia.hu",
    "message": "Teszt üzenet",
    "name": "Dósa Bálint"
};

DataService.PostContactMessage(message).then (success =>{
    console.log('result:', success);
});