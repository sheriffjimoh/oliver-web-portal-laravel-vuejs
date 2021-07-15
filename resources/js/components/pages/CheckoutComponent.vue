<template>
      <div>
          <header-component></header-component>
           <div class="store-banner">
             <h2>Checkout Page</h2>
           </div>

         <div  class="container col-lg-7 offset-lg-3">
            <div class="card">
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item text-center "><img :src="dataRecord.logo"  width="60"></li>
                        <li class="list-group-item text-capitalized"> Item name : {{dataRecord.name}}</li>
                        <li class="list-group-item text-capitalized"> Price per peices : {{dataRecord.price}}</li>
                        <li class="list-group-item"> Bundle/Carton price : {{dataRecord.price*12}}</li>
                        <li class="list-group-item text-capitalized"> Category : {{dataRecord.category}}</li>
                        <li class="list-group-item text-capitalized"> Item Availability : available</li>
                        <li class="list-group-item text-center p-10">
                            <a href="https://api.whatsapp.com/send?phone=2348034478066&text=Hi%2C%20I%20need%20to%20know%20more%20about%20" class="btn btn-whatsapp">Whatsapp</a> 
                            <a href="tel:+2348034478066" class="btn btn-secondary">Place Call</a>
                            <a href="mailto:info@oliverconcept.ng.com" class="btn btn-primary">Send Mail</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
         </div>

       <footer-component></footer-component>
      </div>
</template>

<script>

import HeaderComponent from "../HeaderComponent.vue";
import FooterComponent from "../FooterComponent.vue";
export default {
    
    components:{
        HeaderComponent,
        FooterComponent
    },
    data(){
        return{
         dataRecord:[],
         parameter:"",
          datas:[
              {id :"98453", name:"tile4x4",price:"3400",description:"somthinge here",category:"tile",logo:"/frontend/image/tiles.png"},
              {id :"34567",name:"tile7x4",price:"400",description:"somthinge here",category:"tile",logo:"/frontend/image/tiles.png"},
              {id : "12389",name:"pvc4x4",price:"5400",description:"somthinge here",category:"pvc",logo:"/frontend/image/pvc.jfif"},
              {id : "09865",name:"pvc4x4",price:"3400",description:"somthinge here",category:"pvc",logo:"/frontend/image/pvc.jfif"},
              {id : "34234",name:"wall340",price:"3400",description:"somthinge here",category:"wall",logo:"/frontend/image/tiles.png"},
              {id : "23453",name:"tile4x4",price:"3400",description:"somthinge here",category:"tile",logo:"/frontend/image/tiles.png"},
              {id : "98456",name:"tile4x4",price:"9400",description:"somthinge here",category:"tile",logo:"/frontend/image/tiles.png"},
              {id : "23956",name:"tile8x4",price:"3400",description:"somthinge here",category:"tile",logo:"/frontend/image/tiles.png"},
              {id : "45638",name:"tile4x4",price:"3400",description:"somthinge here",category:"tile",logo:"/frontend/image/tiles.png"},
              {id : "97527",name:"tile9x4",price:"3400",description:"somthinge here",category:"tile",logo:"/frontend/image/tiles.png"},
              {id : "35498",name:"tile4x4",price:"3400",description:"somthinge here",category:"tile",logo:"/frontend/image/tiles.png"},
              {id : "23748",name:"tile2x4",price:"3400",description:"somthinge here",category:"tile",logo:"/frontend/image/tiles.png"},
              {id : "93568",name:"pvc2x2",price:"2300",description:"somthinge here",category:"pvc",logo:"/frontend/image/pvc.jfif"},
              {id : "12307",name:"wall201",price:"1200",description:"somthinge here",category:"wall",logo:"/frontend/image/wall.png"},
          ],  
        }
    },

    created(){
        if(this.$route.params.id !=null){
             this.parameter = this.$route.params.id.trim();
             this.dataRecord = this.datas.filter((data) => data.id ==this.parameter)[0];
        }
    },
        method:{
           

        }

        
    
     
}
</script>

<style scoped>

</style>