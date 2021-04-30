<template>

 <div class="orders_page_body">
   
   
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
        <tr  v-for="product in products.data" :key="product.id">
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
          <td class="table_item">{{product.price}}</td>
          <td></td>
          <td></td>
          <td class="table_item"><button class="change_button">Change</button></td>
        </tr>
      </tbody>
    </table>
   </div>
   <div class="paginate__box">
 
   </div>

 </div>

</template>
<script>
import token from '@/mixins/token.js'
export default {
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
            products:{},
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
      async  getProducts(){
         this.products = await this.$store.getters['products/products']
        console.log(this.products);
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
</style>