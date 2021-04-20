<template>
 <div>
   <h1></h1>
   <div class="order_list">

<table>
  <thead>
    <tr>
      <th>User</th>
      <th>Status</th>
      <th>created at</th>
      <th>Sum</th>
      <th></th>
    </tr>
  </thead>
  <tbody >
    <tr v-show="orders.length" v-for="order in orders" :key="order.id">
      <td class="table_item">{{order.name}}</td>
      <td class="table_item" >{{order.stataus == 0 ? 'Active' : 'Old'}}</td>
      <td class="table_item">{{new Date(order.created_at) }}</td>
      <td class="table_item">{{order.stataus == 0 ? 'Active' : 'Old'}}</td>
      <td class="table_item">{{order.sum}}</td>
      <td class="table_item"><button class="change_button">Change</button></td>
    </tr>
  </tbody>
</table>
   </div>

 </div>
</template>

<script>
export default {

   async fetch({store})
   {
  
      if (store.getters['orders/orders'].length === 0)
      {
            
         await store.dispatch('orders/getOrders')
      
      }

   },
   data:(()=>
   {
     return{
    
     }
   }
   ),
  

    computed:{
     orders(){
      return this.$store.getters['orders/orders']
      
     
     }
    },
}
</script>

<style>
.order_list
{
  width: 100%;
  padding: 5px;
   margin: 15px;
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
