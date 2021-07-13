<template>
   <div>
      <header-component></header-component>
      <div class="cont">
         <div class="store-banner">
             <h2>Check Out Our Store</h2>
         </div>
         <div class="main">
                 <div class="row">
                     <div class="left col-lg-3 ">
                       <h2>Items category</h2>
                       <ul>
                           <li> <span>Tiles</span> </li>
                           <li> <span>PVC</span> </li>
                           <li> <span>Wall</span> </li>
                       </ul>
                     </div>
                     <div class="right  col-lg-7 offset-lg-1 col-sm-12 com-md-12">
                         <header>
                             <input type="text  "  placeholder="Search">
                            <span><img src="frontend/image/search.png" alt=""></span>
                         </header>

                         <div class="item-list">
                             <div class="row">
                                <div class="items col-lg-3 col-sm-12">
                                 <img src="frontend/image/tiles.png" width="60" alt="">
                                  <h2>tiles 23</h2>
                                  <h6>#54.00</h6>
                                  <a href="" class="btn btn-primary">Checkout</a>
                                </div>
                                <div class="items col-lg-3 col-sm-12">
                                 <img src="frontend/image/tiles.png" width="60" alt="">
                                  <h2>tiles 23</h2>
                                  <h6>#54.00</h6>
                                  <a href="" class="btn btn-primary">Checkout</a>
                                </div>
                                <div class="items  col-lg-3 col-sm-12">
                                 <img src="frontend/image/tiles.png" width="60" alt="">
                                  <h2>tiles 23</h2>
                                  <h6>#54.00</h6>
                                  <a href="" class="btn btn-primary">Checkout</a>
                                </div>
                                <div class="items  col-lg-3 col-sm-12">
                                 <img src="frontend/image/tiles.png" width="60" alt="">
                                  <h2>tiles 23</h2> 
                                  <h6>#54.00</h6>
                                  <a href="" class="btn btn-primary">Checkout</a>
                                </div>
                             </div>
                         </div>
                     </div>

                 </div>
         </div>
      </div>
        

     </div>
</template>
<script>
import HeaderComponent from "./HeaderComponent.vue";
export default {
    components:{
        HeaderComponent
    }
    
}
</script>

<style scoped>

</style>