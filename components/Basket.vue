<template>
<div class="body">
 
    <div class="basket_form">
        <AddOrder :orderData="basket" v-if="show"/>   
 <div class="basket_form_body">
        <div @click="$parent.basket = false" class="close">X</div>
   <div class="basket_item" v-for="data in basket" :key="data.id">
  <img class="basket_img"  :src="require(`@/assets/img/${data.img}`)">
   <p class="prod_desc">{{data.title}}</p>
 <div class="basket_buttons">
<button class="minus" @click="minus(data.id)">-</button>
<p>{{data.count}} шт</p>
<button class="plus" @click="plus(data.id)">+</button>
 </div>
 <div class="sum"><p class="count">{{data.price * data.count}} р</p></div>
 <div class="delete">
 <button @click="itemDelete(data.id)" >Удалить</button>
 </div>  

   </div>
 </div>
 <div class="basket_form_right">
    <div class="basket_text">Корзина</div>
 <p class="order_desc"> <span class="green">Доставка по городу Химки от 50 рублей</span>
 </p>
  <div>
      <div @click="show=!show" class="order_button"><p>Офрмить заказ </p></div>
  </div>

 </div>
    </div>
    </div>
</template>
<script>
import AddOrder from '@/components/Order'
export default {
    props:['basket'],
    components:{
        AddOrder
    },
    data:(()=>{
         return {
       show:false,
          
    };
    }),
    mounted()
    {
      
    },
    methods:{
       plus(id)
       {
        let basket =  JSON.parse(localStorage.getItem('Basket'))
           basket.map(b =>{
               if(b.id == id)
               {
                   b.count = b.count+1 ;

               }
           })
           localStorage.removeItem('Basket')
           localStorage.setItem('Basket',JSON.stringify(basket))
      
      this.basket.map(b=>{
              if(b.id === id )
              {
                  b.count ++
            }
          })
           
          
       },
       minus(id)
       {
          let basket =  JSON.parse(localStorage.getItem('Basket'))
           basket.map(b =>{
               if(b.id == id)
               {
                   if(b.count !== 1)
                   {
                   b.count = b.count - 1       
                   }
               }
           })
           localStorage.removeItem('Basket')
           localStorage.setItem('Basket',JSON.stringify(basket))
      
      this.basket.map(b=>{
              if(b.id === id )
              {
                  if(b.count !== 1)
                  {
                  b.count --

                  }
                   
            }
          })
           
       },
       itemDelete(id)
        {
         if(confirm('Вы действительо хотите удалить продукт из коризины?'))
            {
           
           let basket =  JSON.parse(localStorage.getItem('Basket'))
           let nonDelete =  basket.filter(b => b.id != id)
           localStorage.removeItem('Basket')
           localStorage.setItem('Basket',JSON.stringify(nonDelete))
           this.basket = this.basket.filter(b=> b.id != id)
            }
       },
       send()
       {
           console.log(this.basket);
       }
    }
}
</script>
<style scoped>

.basket_form
{
    position:absolute;
    margin-bottom: 25px;
    width: 100%;
    min-width: 1100px;
    height: 100%;
    right: 0;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    z-index: 111111111111111111;
}
.basket_text
{
    font-family: 'Roboto';
    margin: 25px;
    color: yellowgreen;
    font-weight: bold;
    font-size: 25px;
}
.basket_form_body
{
      width: 50%;
      margin-bottom: 30%;
      margin-top: 25%;
     height: 80%;
     overflow-y: scroll;
}
.basket_form_right
{
       width: 50%;
      margin-bottom: 30%;
       height: 80%;
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
}
.basket_item
{
    border:1px solid silver ;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 68px;
    margin-top: 5px;
    margin-right: 5px;
    padding: 5px;
    border-radius: 5px;
    transition: 150ms;
}
.basket_item:hover{
    box-shadow:  0px 0px 5px 0px rgba(0,0,0,0.6);
    
}
.basket_img
{
    width: 70px;
}
.prod_desc{
    width: 130px;
    overflow: hidden;
    height: 65px;
}
.basket_buttons
{
    display: flex;
    align-items: center;
    padding: 5px;

}
.sum
{
     display: flex;
     align-items: center;
    
}
.plus, .minus
{
    width: 40px;
    height: 40px;
    margin: 15px;
    border-style: hidden;
}
.plus{
    background: rgb(130, 194, 137);
}
.minus{
    background: rgb(235, 129, 129);
}
.sum{
    font-size:20px;
}
.count_input
{
    width: 45px;
}
.delete
{
display: flex;
margin: 5px;
padding: 3px;
align-items: center;
}
.delete button
{
    border-radius: 5px;
    border-style: none;
    height: 33px;
    color: white;
    background: rgb(102, 14, 12);
}
.close{
    position:absolute;
    right: 0;
    top: 0;
    margin: 25px;
    border: 1px solid silver;
    width: 40px;
    cursor: pointer;
    height: 35px;
    color: black;
    text-align: center;
    font-size: 30px;
    transition: 200ms;
}
.close:hover{
    background: silver;
    color: white;
}
.green
{
    color: green;
}
.order_desc
{
    font-size: 20px;
  font-family: 'Roboto';
}
.order_button
{
    width: 120px;
    height: 50px;
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid silver;
    border-radius: 10px;
    color: white;
    font-size: 15px;
    background: rgb(57, 12, 78);
    opacity: 80%;
    cursor: pointer;
    font-family: 'Roboto';
transition: 150ms;
}
.order_button:hover
{
  
    box-shadow:  0px 0px 5px 0px rgba(0,0,0,0.6);
  
}
@media screen and (max-width: 600px) { 

.btn-reg
{
   
    width: 60px;
    
}


}
</style>

