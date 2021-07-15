
require('./bootstrap');
window.Vue = require('vue').default;
import router from "./router.js";
Vue.component('app-component', require('./components/AppComponent.vue').default);
Vue.component('header-component', require('./components/HeaderComponent.vue').default);
const app = new Vue({
    el: '#app',
    router
});
