<template>
    <div class="service-features" >
    <h2 class="header"> Feature Items </h2>
        <div class="row box-list">
          <div class="box col-lg-3">
               <h2 class="text-header text-dark">Tiles</h2>
               <img src="frontend/image/tiles.png">
                 <a class="btn btn-primary" href="">View All</a>
          </div>
          <div class="box col-lg-3">
                 <h2 class="text-header">Wall</h2>
              <img src="frontend/image/wall.png" alt="">
              <a class="btn btn-primary" href="">View All</a>
          </div>
          <div class="box col-lg-3">
                <h2 class="text-header">PVC</h2>
                <img src="frontend/image/pvc.jfif" alt="">
              <a class="btn btn-primary" href="">View All</a>
          </div>
         
        </div><!-- /.row -->

        <!-- About us -->


        <div class="about-mini" id="about">
          <!-- <h2>Learn About Us</h2> -->
            <div class="row rowside">
              <div class="sides content">
               <h2>We are Excelent in making</h2>
               <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Cupiditate, iure molestiae repudiandae ad pariatur ex, deleniti consectetur quidem
                illum suscipit hic maxime fugit dolorem iste? Laudantium placeat nesciunt aliquam tempore.
                 repudiandae ad pariatur ex, deleniti consectetur quidem
                illum suscipit hic maxime fugit dolorem iste? Laudantium placeat 
               </p>
               <a href="" class="btn btn-primary">Get In Touch To Learn More</a>
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
                   <a href="" class="btn btn-secondary">Place a Call</a>
                   <a href="" class="btn btn-secondary">Send Mail</a>
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