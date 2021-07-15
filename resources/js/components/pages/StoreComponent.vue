<template>
   <div>
      <header-component></header-component>
      <div class="cont">
         <div class="store-banner">
             <h2>Our Store</h2>
         </div>
         <div class="main">
                 <div class="row">
                     <div class="left col-lg-3 ">
                       <h2>Items category</h2>
                       <ul>
                           <li> <span @click="searchbyCategory('tile')">Tiles</span> </li>
                           <li> <span @click="searchbyCategory('pvc')">PVC</span> </li>
                           <li> <span @click="searchbyCategory('wall')">Wall</span> </li>
                       </ul>
                     </div>
                     <div class="right  col-lg-7 offset-lg-1 col-sm-12 com-md-12">
                         <header>
                            
                             <input type="text " @keyup="onChangefire()" v-model="inputValue" placeholder="Search">
                            <span><img src="frontend/image/search.png" alt=""></span>
                         </header>

                         <div class="item-list">
                             <div class="row">
                                <div class="items col-lg-3 col-sm-12" v-for="(data,index) in dataRecord" :key="index">
                                 <img :src="data.logo" width="60" alt="">
                                  <h2>{{data.name}}</h2>
                                  <h6>₦{{data.price}}</h6>
                                  <router-link class="btn btn-primary" :to="'/checkout/'+data.id">Checkout</router-link>
                        
                                </div>
                            
                             </div>
                         </div>
                     </div>

                 </div>
         </div>
      </div>
        
  <footer-component></footer-component>
     </div>
</template>
<script>
import HeaderComponent from "../HeaderComponent.vue";
import FooterComponent from "../FooterComponent.vue"
export default {
    components:{
        HeaderComponent,
        FooterComponent
    },

    data(){
        return{
          datas:[
              {id : "98453", name:"tile4x4",price:"3400",description:"somthinge here",category:"tile",logo:"frontend/image/tiles.png"},
              {id : "34567",name:"tile7x4",price:"400",description:"somthinge here",category:"tile",logo:"frontend/image/tiles.png"},
              {id : "12389",name:"pvc4x4",price:"5400",description:"somthinge here",category:"pvc",logo:"frontend/image/pvc.jfif"},
              {id : "09865",name:"pvc4x4",price:"3400",description:"somthinge here",category:"pvc",logo:"frontend/image/pvc.jfif"},
              {id : "34234",name:"wall340",price:"3400",description:"somthinge here",category:"wall",logo:"frontend/image/tiles.png"},
              {id : "23453",name:"tile4x4",price:"3400",description:"somthinge here",category:"tile",logo:"frontend/image/tiles.png"},
              {id : "98456",name:"tile4x4",price:"9400",description:"somthinge here",category:"tile",logo:"frontend/image/tiles.png"},
              {id : "23956",name:"tile8x4",price:"3400",description:"somthinge here",category:"tile",logo:"frontend/image/tiles.png"},
              {id : "45638",name:"tile4x4",price:"3400",description:"somthinge here",category:"tile",logo:"frontend/image/tiles.png"},
              {id : "97527",name:"tile9x4",price:"3400",description:"somthinge here",category:"tile",logo:"frontend/image/tiles.png"},
              {id : "35498",name:"tile4x4",price:"3400",description:"somthinge here",category:"tile",logo:"frontend/image/tiles.png"},
              {id : "23748",name:"tile2x4",price:"3400",description:"somthinge here",category:"tile",logo:"frontend/image/tiles.png"},
              {id : "93568",name:"pvc2x2",price:"2300",description:"somthinge here",category:"pvc",logo:"frontend/image/pvc.jfif"},
              {id : "12307",name:"wall201",price:"1200",description:"somthinge here",category:"wall",logo:"frontend/image/wall.png"},
          ],

          inputValue:"",
          categoryValue:"",
          dataRecord:[]

        }
        // console.log(this.datas);
   },

   methods:{
            searchbyCategory(value){
                if( value != null){
                    this.categoryValue = value;
                    this.inputValue = " ";
                    return this.dataRecord = this.datas.filter((task) => task.category == this.categoryValue.toLowerCase().trim());
                    
                 } 
            },
            onChangefire(){
                if( this.inputValue != null){
                    return this.dataRecord= this.datas.filter((task) => ( task.category == this.inputValue.toLowerCase().trim()  || task.name == this.inputValue.toLowerCase().trim() ));
                    
                  }
              },
              url(param){
                      return '/checkout/'+param;
              }
   },

  mounted() {
        console.log(this.datas);
    },

    created(){

        if(this.$route.params.category == null){
           this.dataRecord = this.datas;    
        }else{
            this.dataRecord = this.datas.filter((task) => task.category == this.$route.params.category.toLowerCase().trim());
                    
        }
        
       
    }
    
}
</script>

<style scoped>

</style>