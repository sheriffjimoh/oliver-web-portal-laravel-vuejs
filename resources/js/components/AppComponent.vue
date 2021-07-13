<template>

    <div class="contain">
         <!-- <header-component></header-component> -->
         <!-- <banner-component></banner-component>
         <servicesfeatures-component></servicesfeatures-component>
         <footer-component></footer-component> -->
         <store-component></store-component>
    </div>

</template>

<script>

import HeaderComponent from "./HeaderComponent.vue";
import BannerComponent from "./BannerComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import ServicesfeaturesComponent from "./ServicesfeaturesComponent.vue";
import StoreComponent from "./StoreComponent.vue";
    export default {

        components:{
            HeaderComponent,
            BannerComponent,
            ServicesfeaturesComponent,
            FooterComponent,
            StoreComponent
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
