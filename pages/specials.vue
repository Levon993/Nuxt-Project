<template>
    <div class="spec_item">
    <div class='item' v-for="product in data" :key='product.id'>
        <img :src="require(`@/assets/img/${product.img}`)" alt="">
         <p>{{product.description}}</p>
         <div>
        <div class="prices">
         <p class="price">{{product.price}} р</p>
         <p class="old_price"><strike>{{product.old_price}}р</strike></p>
            <button class="basket"><i class='bx bx-basket'></i></button>

      </div>

         
            
        
    </div>
    </div>
    </div>
    </template>
  </vs-card>
    </div>
    </div>
</template>
<script>
export default {
    layout:'index',
 async asyncData({app,store}){
     try{
        const token = app.$cookiz.get('token') 
         console.log('sdsdsdsdsd')
         const page = 1
         await store.dispatch('products/getChoice',{page: page, token: token})
      }catch(e)
        {
     }

  },
  data:(()=>{
return{
    data:{}
}
  }),
  mounted()
  {
   this.getChoices()
  },
  methods:{
     async getChoices()
      {
          const res =  await this.$store.getters['products/choices']
          this.data = res.data
      }
  }
}
</script>
<style>
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