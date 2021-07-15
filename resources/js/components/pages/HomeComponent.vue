<template>

    <div>
         <header-component></header-component> 
         <banner-component></banner-component>
         <sections-component></sections-component>
         <footer-component></footer-component>
         <!-- <store-component></store-component> -->
    </div>

</template>

<script>

import HeaderComponent from "../HeaderComponent.vue";
import BannerComponent from "../BannerComponent.vue";
import FooterComponent from "../FooterComponent.vue";
import SectionsComponent from "../SectionsComponent.vue";
    export default {

        components:{
            HeaderComponent,
            BannerComponent,
            SectionsComponent,
            FooterComponent,
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
