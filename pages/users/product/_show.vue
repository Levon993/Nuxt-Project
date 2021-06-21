<template>

    <div  class="show_container">
            <div v-if="loader" class="lds-ring"><div></div><div></div><div></div><div></div></div>
        <div class="show_product">       
           <img  :src="`${$axios.defaults.baseURL}/storage/images/`+data.img" alt="">
        <div class="desc">
            <div class="show_product_title"><p>{{data.description}}</p></div>
           <div class="show_product_prices">
             <p>{{data.price}} р</p>
             <p v-if="data.price > data.old_price"><strike>{{data.old_price}} р</strike></p>
               <button class="basket_prod" @click="addToBasket(data)"><i class='bx bx-basket'></i></button>

           </div>
        </div>
           
    </div>
    <div class="recomemded" v-show="recomendations">
      <div class="rec_text">Рекомендуем</div>
      <div class="recomended_items">
        <div v-for="product in recomendations.data" :key="product.id" class="recomended_item">
         <img :src="`${$axios.defaults.baseURL}/storage/images/`+product.img" alt="">
     <p>{{product.description}}</p>
     <div class="rec_prices">
     <p class="rec_price">{{product.price}} р</p>
     <p class="old_price"><strike>{{product.old_price}} р</strike></p>
     </div>
    <div class="rec_icons">
  <button class="rec_basket" @click="addToBasket(product)"><i class='bx bx-basket'></i></button>
  </div>
       </div>
      </div>
       
    </div>
      <div class="recomemded" v-show="recomendations">
      <div class="rec_text">Хиты Продаж</div>
      <div class="hit_items">
        <div v-for="product in hits.data" :key="product.id" class="hit_item">
         <img :src="`${$axios.defaults.baseURL}/storage/images/`+product.img" alt="">
         <p>{{product.description}}</p>
        <div class="rec_prices">
        <p class="rec_price">{{product.price}} р</p>
        <p class="old_price"><strike>{{product.old_price}} р</strike></p>
       </div>
    <div class="rec_icons">
  <button class="rec_basket" @click="addToBasket(product)"><i class='bx bx-basket'></i></button>
  </div>
       </div>
      
      </div>
        <button v-if="hits.next_page_url" class="recomended-btn-reg" @click="more()">Еще</button>
    </div>
    </div>
</template>
<script>

export default {
  
   async asyncData({params, store})
    {
     let text = params.show.replace(':'," ") 
     text = text.split(' ')
     await store.dispatch('products/getProductById',{id:text[1]})
     await store.dispatch('products/getHits',{page:1})
    
    },
    data:(()=>{
    return{
        data:[],
        recomendations:[],
        hits:[],
        loader:true,
        page:1,
        
    }
    }),
 created()
 {
     this.getProduct()
     
 },
    methods:{
     async more(product)
      {
        
        this.page ++
       let res = []
         await this.$store.dispatch('products/getHits',{page:this.page})
          res = this.$store.getters['products/hits']
         res.data.forEach(e => {
           console.log(e.hit);
         });
      },
        getProduct()
        {
           this.data = this.$store.getters['products/product']
          if(this.data){
            this.loader =false
            this.getrecomendations()
            }
           
        },
       async getrecomendations()
        {
           const params = {
             id:this.data.id,
            category_id:this.data.category_id,
            brand_id:this.data.brand_id,
            price:this.data.price
          }
          await this.$store.dispatch('products/getRecomendations', {data:params,page:this.page})
          this.recomendations = this.$store.getters['products/recomendations']
          this.hits = this.$store.getters['products/hits']
          console.log(this.hits);
          

          
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
                                this.$parent.$parent.getBasketformStorage()
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
<style>
.show_container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}
.show_product{
  display: flex;
  justify-content: center;
}

.show_product_title{
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  font-size: 20px;
}
.show_product_prices
{
  display: flex;
  margin-top: 15px; 
}
.show_product_prices p
{
   margin: 7px;
   font-family: 'Roboto';
   font-size: 15px;
   font-weight: bold;
}
 strike{
  color: red;
}
 .basket_prod
{
   font-size: 20px;
    border-radius: 5px;
    border-style: hidden;
    color: white;
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
.recomemded
{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 400px;
  margin-top: 35px;
}
 .icons
{
    display: flex;
    position: absolute;
    bottom:0;
    right: 0;
}
 .rec_icons
{
    display: flex;
    position: absolute;
    bottom:0;
    right: 0;
}
.rec_prices{
  
  display: flex;
  position: absolute;
  bottom: 0;
}
.rec_prices, .rec_icons{
  
  margin-bottom: 8px;
  display: flex;
}
.rec_text
{
  text-align: center;
  font-family: 'Roboto';
  font-size: 30px;
  margin-bottom: 15px;
  font-family: 'Lobster', cursive;
  
}
.recomended_items
{
  display: flex;
  width: 100%;
  justify-content: center;
  overflow-x: scroll;
}
.hit_items
{
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
}
.recomended_item{
  margin: 25px;
  width: 230px;
  height: 270px;
   position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 8px;
  font-family: "Roboto";
  font-weight: 600;
  padding: 3px;
   transition: 300ms;
}
.hit_item{
  margin: 25px;
  width: 170px;
  height: 270px;
   position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
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
.hit_item:hover
{
  position: relative;
 box-shadow:  0px 0px 5px 0px rgba(0,0,0,0.6);
z-index: 111111111111111;
}
.rec_basket
{
  font-size: 20px;
   border-radius: 5px;
   border-style: hidden;
   color: white;
   background-color: rgb(1, 54, 63);
     width: 45px;
     height: 35px;
     align-items: center;
     margin-right: 7px;
     margin-bottom: 5px;
     display: flex;
     transition: 200ms;
}
.rec_basket > i
{
     margin-left: 6px;
}
.rec_basket:hover
{
   background-color: rgb(8, 89, 104);
     
}
.rec_prices p
{
  margin: 5px;
}
.hits
{
  background: blue;
  width: 100%;
  height: 600px;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: black transparent transparent transparent;
}
.recomended-btn-reg
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
.recomended-btn-reg:active  {
   
   box-shadow: 1px 1px 1px  rgb(100, 231, 206) ;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>