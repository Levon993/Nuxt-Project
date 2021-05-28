<template>
<div class="container">
    <div class="header"> 
    <div @click="navbar = !navbar"><i  class='bx menu' :class="{'bx-menu':!navbar,'bx-x':navbar}"></i></div>
    <div v-if="!basket" @click="basket = !basket"><i  class='bx basket bx-basket'></i></div>
    <div v-if="basket" @click="basket = !basket" class="basket_x"><i  class='bx bx-basket basket_i' ></i><p>X</p></div>
   <p class="name" @click="$router.push('/')">Солнечный</p>
    <div><input type="text" class="search">
    <button class="btn-reg"><i  class='bx bx-search'></i></button>
    </div>
       <div class="nav_buttons">
        <button class="btn-reg"><nuxt-link active-class to="/login">login</nuxt-link></button>
        <button class="btn-reg">regiser</button>
        </div>
    </div>
    <div>
    <nav  :class="{nav:navbar, navnone:!navbar}">
        <div class="nav_close" @click="navbar = false">X</div>
            <div class="logo_text">Каталог</div>
            <ul class="list">
                <li v-for="category in categories" :key="category.id">
                   <nuxt-link  exect no-prefetch active-class :to="`/product/${category.id}`">  <p class="category_name">{{category.title}}</p> </nuxt-link>
                </li>
             </ul>
        </nav>
    
           <Basket v-show="basket" :basket="basketData"/>
        
</div>
    <div class="contant">
<nuxt/>
    </div>
    <div class="footer">
     <Footer/>
    </div>
 </div>
</template>
<script>
import NavBar from '@/components/user/NavBar'
import Footer from '@/components/footer'
import Basket from '@/components/Basket'
import token from '@/mixins/token.js'
export default {
    components:{
     NavBar,
     Footer,
     Basket
    },
    mixins:[token],
        data:(()=>{
        return{
            basket:false,
            navbar:false,
            pet:false,
            basketData:{},
            categories:{}
        }
    }),
  mounted(){
  this.getCategories()
  this.getBasketData()
  
  },

  methods:{
      async  getCategories(){
        try{
            await this.$store.dispatch('categories/getCategories',{ token: this.token})
            const res = await this.$store.getters['categories/categories']
            this.categories = res
           
        }catch(e)
        {

        }
       },
       getBasketData()
       {
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
                         
                       }
                   })
               })
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
                           this.getBasketData()
                           
                           
                       }
                   })
               })
           }

       }

  }
    
}
</script>
<style scoped>
.container
{
    width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 15px;
   min-width: 700px;
}
.header
{
     min-width:700px;
    display: flex;
    width: 100%;
    height: 75px;
    justify-content: space-between;
    padding: 25px;
    
    border-bottom: 1px solid silver;   
   
} 
.menu
{
   border: 1px solid silver;
   font-size: 40px;
   
}
.basket
{
   width: 100px;
   border: 1px solid silver;
   font-size: 40px;
   text-align: center;
   border-radius: 5px;
   background: rgb(10, 92, 10);
   color: white;
   cursor: pointer; 
}
.basket_x
{
   width: 100px;
   height: 55px;
   display: flex;
   justify-content: space-around;
   align-items: center;
   font-size: 40px;
   text-align: center;
   border-radius: 5px;
   background: rgb(10, 92, 10);
   color: white;
   cursor: pointer; 
}
.basket_x p
{
 
   text-align: center;
   margin-top: 13px;
   font-size: 30px;
}

.contant
{
     width: 1200px;
    min-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 5px;
    
}

.btn-reg
{
    margin-top: 8px;
    width: 80px;
    border-style: none;
    outline: 0;
    outline-offset: 0;
    background-color: rgb(202, 231, 206);
    box-shadow: 3px 3px 3px  rgb(100, 231, 206) ;
}
.btn-reg:active  {
   
   box-shadow: 1px 1px 1px  rgb(100, 231, 206) ;
}
 input
{
  
    border-style: none;
    border-bottom: 2px solid silver;
    transition: 300ms;

}
 input:active, :focus
{
    position: relative;
    top: 5px;
    border-bottom: 2px solid green;
    outline: 0;
    outline-offset: 0;
    
}
.nav{
    overflow-y: scroll;
    position: fixed;
    top: 0px;
    left: 0;
    width: 30%;
    height: 700px;
    border-radius: 8px;
    background-color: white;
    border: 1px solid silver;
    z-index: 1111111111111111;
}
.nav_close
{
    width: 50px;
    position:absolute;
    font-size: 30px;
    right: 0;
    margin: 18px;
    border: 1px solid silver;
    text-align: center;
    transition: 200ms;
}
.nav_close:hover
{
background: silver;
color: white;
}
.category_name
{

    font-size: 25px;
}
.navnone
{
    overflow: auto;
    display: none;
}
.list
{
    list-style:  none;
    margin: 5px;
    padding: 5px;
}
 li
{
   margin: 4px;
   display: flex;
   text-align: center;
   align-items: center;
   font-family: 'Roboto';
   font-size: 20px;
}
.logo_text{
    text-align: center;
    font-family: "Roboto";
    font-weight: 600;
    font-size: 25px;
}
  .png
  {
    width: 44px;
    height: 40px;
  }
  .footer
  {
       min-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 5px;
  }
  .name
  {
      font-size: 40px;
      color: yellowgreen;
     font-family: 'Pacifico', cursive;
      cursor: pointer;
  }
  .active
  {
   border-bottom: 1px solid red;
  }
  .nav_buttons
  {
    
  }
.basket_button
{
    display: flex;
}
@media screen and (max-width: 600px) { 

.btn-reg
{
   
    width: 60px;
    
}


}
</style>