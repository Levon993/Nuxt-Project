<template>
  <div class="container">
    
     
    <div class="wrapper">
<div class="text">
  <p>Выбор покупателя
  </p>
  <button class='btn-reg' @click="$router.push('/specials')"> Показать Еще</button>
       <img class="png" :src="require('@/assets/icons/woman.png')" alt="">
  </div>    
  <div class="items">
    <div @click="goProductPage(product.id)" v-for="product in data" :key="product.id" class="item">
     <img :src="require(`@/assets/img/${product.img}`)" alt="">
     <p>{{product.description}}</p>
     <div class="prices">
     <p class="price">{{product.price}} р</p>
     <p class="old_price"><strike>{{product.old_price}} р</strike></p>
     </div>
    <div class="icons">
  
  <button class="basket" @click="addToBasket(product)"><i class='bx bx-basket'></i></button>
  </div>
    </div>
  </div>
    </div>
  </div>
</template>
<script>
export default {
 props:['data'],
 data:(()=>{
   return{
   basket:[]
   }
 }),
 mounted(){
  
 },  

 methods:{
   goProductPage(id)
   {
    
    this.$router.push(`/users/product/show:${id}`)
   },
   addToBasket(product){
     if(product.category.id == 3)
     {
      const age = JSON.parse(localStorage.getItem('_ag'))
       if(age == 0)
       {
       this.$parent.$parent.$parent.child = true;
       return
       }
     }
                let basket =[]
                let item = {}
                let count = 1;
                if(localStorage.getItem('Basket'))
                {
                     basket = JSON.parse(localStorage.getItem('Basket'))

                  }
                //если корзина не пуста
                if(basket.length){
                

                    for (let i =0; i < basket.length; i++)
                    {
                        if(basket[i].id == product.id)
                        {
                            basket[i].count ++
                             localStorage.removeItem("Basket");
                             localStorage.removeItem('BasketData')

                           // localStorage.clear()
                            this.getProductsForBasket(basket)
                           
                            localStorage.setItem('Basket', JSON.stringify(basket))
                            setTimeout(()=>
                            {
                                this.$parent.getBasketformStorage()
                            },1000)
                            return
                        }
                    }
                    item = {
                        id:product.id,
                        count:count
                    }
                    basket.push(item)
                  
                    //localStorage.clear()
                    localStorage.removeItem("Basket");
                    localStorage.removeItem('BasketData')
                    this.getProductsForBasket(basket)
                    localStorage.setItem('Basket', JSON.stringify(basket));
                    setTimeout(()=>
                    {
                        this.$parent.getBasketformStorage()
                    },1000)
                    return;

                }
                else{
                    //Если корзина пуста, то в localstorage добавляется обьект с id и count
                     item = {
                        id:product.id,
                        count:count
                    }
                    basket.push(item)
                    this.getProductsForBasket(basket)
                    localStorage.setItem('Basket', JSON.stringify(basket));
                     setTimeout(()=>
                     {
                         this.$parent.getBasketformStorage()
                     },1000)

                }
                

            },
            async getProductsForBasket(data)
            {
               const res = await this.$axios.$post('/api/orders/getProductsForBasket',data)
                localStorage.setItem('BasketData', JSON.stringify(res))
            },
 }
}

</script>
<style scoped>
.container
{
  min-width: 500px;
}
.wrapper{
  display: grid;
  grid-template-columns: 300px 1fr; 

}
.text
{
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items:center;
  padding: 10px;
  background-color:#77c4d3;
  border-radius:8px;
  box-shadow:  0px 0px 5px 0px rgba(0,0,0,0.6);
}
.text p
{
margin: 5px;
padding: 12px;
font-family: 'Lobster', cursive;
font-weight:bold;
font-size: 30px;
}
.png
{
  margin-top: 100px;
  width:160px;
  height: 160px;
  
}
.items
{
  display: grid;
  grid-template-columns: 200px 200px 200px 200px;
  grid-template-rows: 350px 350px;
}
.item
{
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 12px;
  border-radius: 8px;
  font-family: "Roboto";
  font-weight: 600;
  padding: 3px;
   transition: 300ms;
}



.item:hover
{
  position: relative;

 box-shadow:  0px 0px 5px 0px rgba(0,0,0,0.6);
 
 
z-index: 111111111111111;
}
.icons
{
    display: flex;
    position: absolute;
    bottom:0;
    right: 0;
}
.prices, .icons{
  margin-bottom: 8px;
}
.wish, .basket
{
   font-size: 20px;
   border-radius: 5px;
   border-style: hidden;
   color: white;
   
}
.wish
{
   background-color: #ff4757;
  margin: 3px;
}
.basket
{
     background-color: rgb(1, 54, 63);
     width: 45px;
     height: 35px;
     align-items: center;
     margin-right: 7px;
     margin-bottom: 5px;
     display: flex;
     transition: 200ms;
}

.basket > i
{
     margin-left: 6px;
}
.basket:hover
{
   background-color: rgb(8, 89, 104);
     
}
.prices
{
  display: flex;
  position: absolute;
  bottom: 0;
}
.prices p
{
  margin: 5px;
}
.old_price
{
  color: red;
}
.btn-reg
{
    margin-top: 120px;
    width: 160px;
    height: 50px;
    border-style: none;
    border-radius: 6px;
    outline: 0;
    outline-offset: 0;
    background-color: rgb(39, 193, 240);
    box-shadow: 3px 3px 3px  rgb(36, 37, 37) ;
    font-family: 'Lobster', cursive;
    font-size: 20px;
}
.btn-reg:active  {
   
   box-shadow: 1px 1px 1px  rgb(100, 231, 206) ;
}
</style>