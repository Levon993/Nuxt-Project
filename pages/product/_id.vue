<template>
    <div class="container">
        <div class="category" v-if="!products.length"><h1>Нет продуктов по данной категории((</h1></div>
   <div v-show="products" v-for="product in products" :key="product.id" class="card">
  <img  :src="require('@/assets/img/Cereals/mistral_basmati.jpg')" alt="">
  <div class="desc">
  <p>{{product.description}}</p>
  <div class="icons">
  <button class="wish"><i class='bx bx-bookmark-heart'></i></button>
  <button class="basket"><i class='bx bx-basket'></i></button>
  </div>
  </div>
   </div>
  
    </div>
</template>
<script>
export default {
    layout:"index",
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
      }
  }
}
</script>
<style scoped>
.container
{
    
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

}
.card 
{
    width: 230px;
    border: .5px solid silver;
    margin: 5px;
    padding: 5px;
    text-align: center;
    display: flex;
    border-radius: 8px;
    
}
.card p
{
    width: 60px;
    overflow: hidden;
    text-align: center;

}

.wish, .basket
{
   font-size: 20px;
   border-radius: 8px;
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
   background-color: #663399;
     margin: 3px;
}
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
.desc
{
    position: relative;
}
.icons
{
    display: flex;
    position: absolute;
    bottom:0;
}
</style>
