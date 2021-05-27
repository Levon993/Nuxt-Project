<template>
    <div class="basket_form">
    <div class="basket_text">Корзина</div>
 <div class="basket_form_body">
   <div class="basket_item" v-for="data in basket" :key="data.id">
  <img class="basket_img"  :src="require(`@/assets/img/${data.img}`)">
   <p class="prod_desc">{{data.title}}</p>
 <div class="basket_buttons">
<button class="plus" @click="plus(data.id)">+</button>
<p>{{data.count}}</p>
<button class="minus" @click="minus(data.id)">-</button>
 </div>
 <div class="sum"><p class="count">{{data.price * data.count}} р</p></div>
   </div>
 </div>
 <button @click="send()">Подтвердить заказ</button>
    </div>
</template>
<script>
export default {
    props:['basket'],
    data:(()=>{
         return {
        
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
                   if(b.count !== 0)
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
                  if(b.count !== 0)
                  {
                  b.count --

                  }
                   
            }
          })
           
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
    position:fixed;
    width: 500px;
    height: 700px;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    z-index: 11111111111;
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
      width: 100%;
}
.basket_item
{
    display: flex;
    justify-content: space-around;
    width: 100%;
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
.sum{
    font-size:20px;
}
.count_input
{
    width: 45px;
}
</style>

