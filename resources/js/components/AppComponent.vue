<template>

    <div class="contain">
        <router-view></router-view>
    </div>

</template>

<script>

import HeaderComponent from "./HeaderComponent.vue";
import BannerComponent from "./BannerComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import SectionsComponent from "./SectionsComponent.vue";
import StoreComponent from "./pages/StoreComponent.vue";
    export default {

        components:{
            HeaderComponent,
            BannerComponent,
            SectionsComponent,
            FooterComponent,
            StoreComponent
        },
        mounted(){
            console.log('Component mounted.')
        },

     created(){
            
       var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?63986';
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    var options = {
  "enabled":true,
  "chatButtonSetting":{
      "backgroundColor":"#4dc247",
      "ctaText":"",
      "borderRadius":"25",
      "marginLeft":"0",
      "marginBottom":"50",
      "marginRight":"50",
      "position":"right"
  },
  "brandSetting":{
      "brandName":"OliverConcept",
      "brandSubTitle":"Tiles and Pvc Dealer",
      "brandImg":"",
      "welcomeText":"Hi there!\nHow can I help you?",
      "messageText":"Hello, I have a question about {{page_link}}",
      "backgroundColor":"#0a5f54",
      "ctaText":"Start Chat",
      "borderRadius":"25",
      "autoShow":false,
      "phoneNumber":"2348034478066"
  }
};
    s.onload = function() {
        CreateWhatsappChatWidget(options);
    };
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
    
       
    
      }
    }
</script>
