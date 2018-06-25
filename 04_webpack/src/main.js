import TesztOsztaly from './TesztOsztaly';
import Vue from "vue";

new TesztOsztaly('Első név');

let app = new Vue({
    el: "App",
    data: {
        message: "sikerült"
    }
});