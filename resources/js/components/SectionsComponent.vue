<template>
    <div class="service-features" >
    <h2 class="header"> Feature Items </h2>
        <div class="row box-list">
          <div class="box col-lg-3">
               <h2 class="text-header text-dark">Tiles</h2>
               <img src="frontend/image/tiles.png">
               <router-link class="btn btn-primary" to="/store/tile" >View All</router-link>
                
          </div>
          <div class="box col-lg-3">
                 <h2 class="text-header">Wall</h2>
              <img src="frontend/image/wall.png" alt="">
              <a class="btn btn-primary" href="/store/wall">View All</a>
          </div>
          <div class="box col-lg-3">
                <h2 class="text-header">PVC</h2>
                <img src="frontend/image/pvc.jfif" alt="">
              <a class="btn btn-primary" href="/store/pvc">
                View All</a>
          </div>
         
        </div><!-- /.row -->

        <!-- About us -->


        <div class="about-mini" id="about">
          <!-- <h2>Learn About Us</h2> -->
            <div class="row rowside">
              <div class="sides content">
               <h2 class="text-capitalize">We are an excellent  dealer</h2>
               <p>OliverConcept is the excellent and experienced leading suppliers & distributors that you can trust for your building mateirals in Nigeria,Our aim is to provide our client with the best services unique to their specific  needs at all time. </p>
               <a href="https://api.whatsapp.com/send?phone=2348034478066&text=Hi%2C%20I%20need%20to%20know%20more%20about%20" class="btn btn-primary">Get In Touch To Learn More</a>
              </div>
               <div class="sides img-content">
                 <img src="frontend/image/about.jpg">  </div>

            </div>
        </div>

<!-- contact Us -->
        <div class="container-fluid contact-us" id="contact">
          
           <div class="contact-content">
                <h2>Hey, We have an offer for you!!</h2>
                <p> We are making it rain and giving an offer of about 20% for any customer who make order through here, <br>range from 10-20 carton of tiles or bundles of pvc </p>
                 <div class="buttons">
                   <a href="tel:+2348034478066" class="btn btn-secondary">Place a Call</a>
                   <a href="mailto:info@oliverconcept.ng.com" class="btn btn-secondary">Send Mail</a>
                 </div>
           </div>
           <!-- <div class="overlay"></div> -->
      </div>

    </div>
</template>

<script>

export default {

 data(){
   return{
     aboutImg:''
   }
}
}
</script>

<style scoped>

</style>