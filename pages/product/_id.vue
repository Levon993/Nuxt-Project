
<template>
    <div class="spec_item">
        <div class="category" v-if="!products.length"><h1>Нет продуктов по данной категории((</h1></div>

    <div class='item' v-for="product in products" :key='product.id'>
        <img :src="`${$axios.defaults.baseURL}/storage/images/`+product.img" alt="">
         <p>{{product.description}}</p>
         <div>
        <div class="prices">
         <p class="price">{{product.price}} р</p>
         <p class="old_price"><strike>{{product.old_price}}р</strike></p>
            <button class="basket" @click="addToBasket(product.id)"><i class='bx bx-basket'></i></button>

      </div> 
    </div>
    </div>
    </div>
</template>
<script>
export default {
    
        data:(()=>{
            return{
                products:{}
            }
        }),
     async asyncData({app,params,store}){
     console.log( params.id);
      try{
     const token = app.$cookiz.get('token')
      
         
         await store.dispatch('products/getProductsByCategory',{id: params.id, token: token})
     
      }catch(e)
        {

     }
  },

  mounted()
  {
this.getData()
  },

  methods:{
    async  getData()
      {
           const res = await this.$store.getters['products/products']
           this.products = res
           console.log(this.products);
      },
      addToBasket(id)
      {
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
                        if(basket[i].id == id)
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
                        id:id,
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
                        this.$parent.$parent.getBasketformStorage()
                    },1000)
                    return;

                }
                else{
                    //Если корзина пуста, то в localstorage добавляется обьект с id и count
                     item = {
                        id:id,
                        count:count
                    }
                    basket.push(item)
                    this.getProductsForBasket(basket)
                    localStorage.setItem('Basket', JSON.stringify(basket));
                     setTimeout(()=>
                     {
                         this.$parent.$parent.getBasketformStorage()
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

.category{
    width: 100%;
    display: flex;
    justify-content: center; 
}
.category h1{
     text-align: center;
     display: block;
     width: 300px;
     color: white;
     font-family: 'Roboto';
     padding: 5px;
     border-radius: 5px;
     margin: 25px;
     background-color: #663399;

}
.spec_item
{
    width: 100%;
    display: flex;
   flex-wrap: wrap;
    
}
.item
{
     height: 280px;
     width: 170px;
     position: relative;
  display: flex;
  flex-direction: column;
 cursor: pointer;
  margin: 12px;
  border-radius: 8px;
 font-family: "Roboto";
 font-weight: 600;
 padding: 7px;
transition: 200ms;
}
.item:hover
{
 box-shadow:  0px 0px 5px 0px rgba(0,0,0,0.6);

}
.basket
{
    font-size: 20px;
    border-radius: 8px;
    border-style: hidden;
    color: white;
     background-color:   rgb(100, 231, 206) ;;
     margin: 3px;
     width: 55px;
     font-size: 25px;
     margin-left:  12px; 
     margin-bottom: 5px;
     transition: 200ms;
}
.basket:hover{
    background-color:   rgb(66, 149, 134) ;
}
.prices
{
    
  display: flex;
  position: absolute;
  bottom: 0;
}
.prices p
{
  display: inline-block;
  margin: 5px;
  width: 36px;
}
.old_price
{
  color: red;
}
.basket:focus
{
   border-style: none;
  
}
</style>
