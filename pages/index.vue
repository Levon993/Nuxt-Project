<template>
<div class="container">
    <div class="slider">
      <vs-card-group >
    <vs-card v-for="offer in offers " :key="offer.id">
      <template #title>
        <h3>{{offer.title}}</h3>
      </template>
      <template #img>
        <img class="imag"  :src="'http://shop.laravel.loc/storage/images/'+offer.img" alt="">
      </template>
      <template #text>
        <p class="offer_desc">
          {{offer.description}}
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span">
            54
          </span>
        </vs-button>
      </template>
    </vs-card>
  </vs-card-group>
    </div>
      <div class="about_container">
        <div class="sunny">
          <img class="png_about" :src="require('@/assets/icons/sunny.png')">
        <p>Солнечны теперь онлайн </p>
        </div>
      <div class="about">
        <div class="about_item">
        <img class="png_about" :src="require('@/assets/icons/nature.png')">
        <p>Натуральные и свежие продукты </p>
       </div>
        <div class="about_item">
        <img class="png_about" :src="require('@/assets/icons/rebbit.png')">
        <p>Не только для людей</p>
       </div>
        <div class="about_item">
        <img class="png_about" :src="require('@/assets/icons/child.png')">
        <p>Не только для взросых</p>
       </div>
      </div>
      </div>
  
  <div class="spec">
  <Special :data="specData"></Special>
  </div>
  <div class="spec">
  <BuyersChoice  :data="discountData" ></BuyersChoice>
  </div>
  </div>
    </template> 
  <script>
    import Special from '@/components/special'
    import BuyersChoice from '@/components/BuyersChoice'
    import Slider from '@/components/slider'
    export default{
    
      
      components:{
      Special,
      Slider,
      BuyersChoice
      }, 
      async asyncData({app,store}){
     try{
        

      {
        
         await store.dispatch('products/ChoicesForUser')
         await store.dispatch('products/getDiscountForUser')
     }
     }catch(e)
      {

     }

  },
      data:(()=>{
      return{
        specData:{},
        discountData:{},
        offers:{},
        basketData:[]
      }  
    }),
      mounted()
      {
        this.getChoices()
        this.getOffers()
        this.getDiscounts()
      },
      methods:{
        async  getOffers(){
            try{
             await this.$store.dispatch('offers/getOffers')
             const res = await this.$store.getters['offers/offers']
              this.offers = res;
        }catch(e)
        {

        }
       },

        async  getChoices(){
        try{
         const res = await this.$store.getters['products/choicesForUser']
         this.specData = res 
       
        }catch(e)
        {

        }
       },
       async  getDiscounts(){
       try{
         const res = await this.$store.getters['products/discountForUser']
         this.discountData = res 
         
        }catch(e)
        {

        }
       },
         getBasketformStorage(){
          this.basketData = []   
          let products = localStorage.getItem('BasketData') ? JSON.parse(localStorage.getItem('BasketData')) :[]

           let basket = JSON.parse(localStorage.getItem('Basket'))
  
           let item = {
               title:'',
               category: '',
               count:'',
               brand: '',
               description:''
           }
           if(basket && products) {
               basket.map(b => {
                   products.map(p => {
                       if (p.id === b.id) {
                           item = {
                               id: p.id,
                               title: p.title,
                               count: b.count,
                               description: p.description,
                               img: p.img,
                               price: p.price


                           }
                           this.basketData.push(item)
                           this.$parent.$parent.getBasketData()
                           
                           {
                               return 'lkdkfdlkfl'
                           }
                       }
                   })
               })
           }

       }
        }
      }

    
  </script>
  <style>
    
    .slider
    {
      
     width: 1200px;
      min-width: 500px;
      display: flex;
      justify-content: center;
    }
    .offer_desc
    {
    font-size: 15px !important;
     font-weight: bold;
    }
  .container
  {
   min-width: 500px;
   display: flex;
   justify-content: center;
  }
  .about_container{
      min-width: 1100px;
       display: flex;
       flex-wrap: wrap;
     }
  .about
  {
    display: flex;
    min-width: 500px;

  }
  .about_item
  {
    
    display: flex;
    margin: 35px;
    
   
  }
   .about_item p
  {
    font-family: 'Roboto', sans-serif;
    margin-top: 20px;
    display: inline-block;
    width: 75px;
    font-size: 13px;
    font-weight: bold;
 
  }
  .sunny{
    display: flex;
    margin: 38px;
  
  }
   .sunny p
  {
    
     margin-top: 17px;
     display: inline-block;
     width: 75px;
     font-size: 18px;
     font-weight: bold;
     padding: 5px;
     font-family: 'Roboto', sans-serif;
  }
  .png_about
  {
    width: 80px;
    height: 80px;
  }
  

.spec
{
min-width: 500px;
margin-top: 25px;
}  
@media screen and (max-width: 600px)
{
  .about_container
  {
    display: flex;
    justify-content: center;
    
  }
  .sunny p
  {
    width: auto;
  }
  .about_item
  {
    margin: 25px;
  }
  .png_about
  {
    width: 40px;
    height: 40px;
  }
   .about_item p
  {
    margin-top: 0px;
    margin-left: 3px;
  }
  .slider{
    margin-left: 150px;
    
  }
}
    
  </style>