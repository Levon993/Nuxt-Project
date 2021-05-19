<template>

 <div class="orders_page_body">
  
   <div class="search">
     <div class="search_input">
     <label for="title">{{$t('title')}}</label>
     <input type="text" v-model="search.title" placeholder="Search Title" id="title">
     </div>
     <div class="search_input">
     <label for="price">{{$t('price')}}</label>
     <input type="text" v-model="search.price" placeholder="Search Price" id="price">
     </div>
     <div class="search_input">
     <label for="price" >{{$t('brand')}}</label>
     <input type="text" v-model="search.brand" placeholder="Search Brand" id="price">
     </div>
      <div class="search_input">
      <label for="price" >{{$t('category')}}</label>
      <input type="text" v-model="search.category" placeholder="Search Category" id="price">
      </div>
      <div class="search_button_box">
      <button @click.prevent="searchQuery()" class="search_button">Search</button>
      </div>
     </div>
   <div class="order_list">
    <table>
      <thead>
        <tr>
          <th>{{$t('title')}}</th>
          <th></th>
          <th></th>
          <th>{{$t('brand')}}</th>
          <th></th>
          <th></th>
          <th>{{$t('category')}}</th>
          <th></th>
          <th></th>
          <th>{{$t('status')}}</th>
          <th></th>
          <th></th>
          <th>{{$t('old_price')}}</th>
          <th></th>
          <th></th>
          <th>{{$t('price')}}</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody >
        <tr  v-for="product in products" :key="product.id">
          <td class="table_item">{{product.title}}</td>
          <td></td>
          <td></td>
          <td class="table_item" >{{product.brand.title}}</td>
          <td></td>
          <td></td>
          <td class="table_item" >{{product.category.title}}</td>
          <td></td>
          <td></td>
          <td class="table_item" >{{product.status== 1 ? "Есть" : "Нет"}}</td>
          <td></td>
          <td></td>
          <td class="table_item" >{{product.old_price}}</td>
          <td></td>
          <td></td>
          <td class="table_item"><span :class="{currency_danger:(product.price >= 400)}" class="currency">{{product.price}}$</span></td>
          <td></td>
          <td></td>
          <td class="table_item"><button @click="ProductDetails(product)" class="change_button">Change</button></td>
        </tr>
      </tbody>
    </table>
   </div>
   <div class="paginate__box">
        <pagination
                  class="paginate"
                 :current="currentPage"
                  :total="totalPages"
                  @page-change="getResults">
         </pagination>
   </div>
   <AddProduct v-if="add"></AddProduct>
    <Change v-if="showDetails" :product ="product"></Change>
   <div @click="add = !add" class="add_product_button">
      <p>+</p> 
   </div>

 </div>

</template>
<script>
import AddProduct from '@/components/popup/addProduct'
import Change from '@/components/admin/productDetails'

import token from '@/mixins/token.js'
export default {
  components:{
    AddProduct,
    Change
  },
    middleware:['admin', 'auth'],
    mixins:[token],
    async asyncData({app,store}){
     try{
        const token = app.$cookiz.get('token')
      if (store.getters['products/products'].length === 0)
      {
         const page = 1
         await store.dispatch('products/getProducts',{page: page, token: token})
     }
      }catch(e)
        {

      }

  },
    data:(()=>{
      return{
        showDetails:false,
        add:false,
         currentPage: 1,
       totalPages: 10,
            search:{
              title:'',
              price:'',
              brand:'',
              category:'',
            },
            products:{},
            product:{},
            currentPage: 1,
            totalPages: 10,
            show: true
      }  
    }),
    mounted()
    {
      this.getProducts()
    },
    methods:{
       async  getResults(page = 1) {
       try{
          await this.$store.dispatch('products/getProducts',{page:page, token:this.token})
          const res = await this.$store.getters['products/products']
          this.products  = res.data
         }catch(e)
         {

         }
      
      },
      async  getProducts(){
        try{
         const res = await this.$store.getters['products/products']
         this.products = res.data 
        }catch(e)
        {

        }
       },
      async searchQuery()
       {
         try{
           await this.$store.dispatch('products/getSearchData',{searchData: this.search, token: this.token})
           this.products = await this.$store.getters['products/search']
         }catch(e)
         {

         }
          
       }, 

       ProductDetails(product)
       {
        this.showDetails = true
        this.product = JSON.parse(JSON.stringify(product))
       }
    }
    
}
</script>
<style >
.orders_page_body
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.order_list
{
   width: 100%;
   padding: 5px;
   margin: 35px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

}
.table_item
{
   padding: 5px;
   font-family: 'Roboto', sans-serif;
   margin-top: 5px;
   border-bottom: 1px solid silver;
}
.change_button
{
  border-style: none;
  background-color: rgb(169, 151, 185);
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px black;
  transition-delay: 50ms;
}
.change_button:active
{
  box-shadow: 1px 1px 1px 1px black;
}
.search
{
  display: flex;
  font-family: 'Roboto', sans-serif;
}
.search_input
{
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.search_button_box
{
  display: flex;
  justify-content: center;
  align-items: center;
}

.search_button
{
  margin-top: 18px;
  border-style: none;
  background-color: rgb(169, 151, 185);
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px black;
  transition-delay: 50ms;
}
.search_button:active
{
  box-shadow: 1px 1px 1px 1px black;
}
.currency
{
  display: inline-block;
  width: 50px;
  height: 25px;
  text-align: center;
  padding: 3px;
  border-radius: 8px;
    font-weight: 700;
  background-color: #246068;
  color: white;
  box-shadow: 2px 2px 2px 1px black;
}
@keyframes danger_currency_anim {   
  0% {     
   transform: rotate(-30deg);  
  }  
  25% {     
   transform: rotate(-20deg);  
  }   
  50% {     
   
  } 
  70% {
    transform: rotate(20deg);
   }
   100%{
     transform: rotate(30deg);
   }
}

@-moz-keyframes danger_currency_anim {   
  0% {     
   transform: rotate(-30deg);  
  }   
  50% {     
    transform: rotate(0deg); 
  } 
  100% {
    transform: rotate(30deg);
   }
}
@-webkit-keyframes danger_currency_anim {   
 0% {     
   transform: rotate(-30deg);  
  }   
  50% {     
    transform: rotate(0deg); 
  } 
  100% {
    transform: rotate(30deg);
   }
}
.currency_danger
{
     -webkit-animation: danger_currency_anim 500ms ; /* Safari 4+ */
     -moz-animation: danger_currency_anim 500ms ; /* Fx 5+ */
     -o-animation: danger_currency_anim 500ms ; /* Opera 12+ */
      animation: danger_currency_anim  500ms  ;
    animation-delay: 300ms;
     display: inline-block;
     width: 50px;
     height: 25px;
     text-align: center;
    padding: 3px;
     border-radius: 8px;
     background-color: red;
     font-weight: 700;
     color: rgb(19, 16, 16);
     box-shadow: 2px 2px 2px 1px black;
 
}

.paginate__box
{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 18px;
}  

.paginate ul
{
  display: flex;
  margin: 15px;
}
.paginate li
{
  width: 50px;
  height: 60px;
  margin:10px;
  font-size: 25px;
  list-style: none;
  background: #246068;
  color: wheat; 
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px 1px black;
  border-radius: 6px;
}
.paginate a
{
  color: wheat; 
  text-align: center;
}
.add_product_button
{
  background-color: blueviolet;
  width: 60px;
  height: 60px;
   border-radius: 50%;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center; 
  position: absolute;
  bottom: 70px;
  right: 80px;

}
.add_product_button p
{
  cursor: pointer;
   font-size: 25px;
   text-align: center;
   margin: 2px;
   padding: 3px;

}
</style>