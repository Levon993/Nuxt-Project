<template>
<div class="container">
    <div class="alert" v-show="question">
        <div class="alert_body">
            <div>
         <p>Вам есть 18 лет?</p>
            </div>
        <div class="yes_or_no">  
        <button class="yes" @click="yes()">Да</button>
        <button class="no" @click="no()">Нет</button>
        </div>
        
        <div class="no_child">
            <div class="age18"><p>18+</p> </div>
        <p>Продажа алкогольной и табачной
             продукции осуществляется только
              лицам старше 18 лет</p>
        </div>
        </div>
        </div>
    <div class="alert" v-show="child">
        <div class="worning_alert_body">
        <div class="worning_no_child">
            <div class="worning_age18"><p>18+</p> </div>
                    <p>Продажа алкогольной и табачной
                        продукции осуществляется только
                        лицам старше 18 лет</p>
             
        </div>
         <button class="ok" @click="child=false">ok</button>
        </div>
        </div>
        
    <div class="header"> 
    <div @click="navbar = !navbar" class="catalog"><button><p>Каталог</p><i  class='bx menu' :class="{'bx-menu':!navbar,'bx-x':navbar}"></i></button></div>
    <div v-if="!basket" @click="basket = !basket"><i  class='bx basket bx-basket'></i></div>
    <div v-if="basket" @click="basket = !basket" class="basket_x"><i  class='bx bx-basket basket_i' ></i><p>X</p></div>
   <p class="name" @click="$router.push('/')">Солнечный</p>
    <div><input type="text" v-model="searchData" class="search">
    <button class="btn-reg" @click="search"><i  class='bx bx-search'></i></button>
    </div>
       <div class="nav_buttons">
        <button class="btn-reg"><nuxt-link active-class to="/login">Войти</nuxt-link></button>
        <button class="btn-reg"><nuxt-link  exect no-prefetch active-class :to="`/register`">  Регистрация </nuxt-link></button>
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
            child:false,
            question:false,
            basket:false,
            navbar:false,
            pet:false,
            basketData:{},
            categories:{},
            searchData:''
        }
    }),
  mounted(){
  this.getCategories()
  this.getBasketData()
  this.getAgeFromStorage()
  },

  methods:{
      getAgeFromStorage()
      {
       if(localStorage.getItem('_ag')){this.question = false}else{this.question =true} 
        
        
     

      },
      yes()
      {
          localStorage.setItem('_ag', 1)
        this.question = false
          
      },
      no(){
        localStorage.setItem('_ag', 0)
        this.question = false
      },
      async  getCategories(){
        try{
            await this.$store.dispatch('categories/getCategories',{ token: this.token})
            const res = await this.$store.getters['categories/categories']
            this.categories = res
           
        }catch(e)
        {

        }
       },
       search()
       {
           
             
            this.$router.push(`search:${this.searchData}` )
           //this.$router.push({ name: 'search', query: { page: 2 } })
        
          // const res = this.$store.getters['products/search']
            //console.log(res);
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
   margin: 25px;
   min-width: 1100px;
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
   font-size: 40px;
   width: 55px;
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
.catalog button
{
    background: rgb(10, 92, 10);
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    border-radius: 8px;
    border-style: hidden;
}
.catalog button > p
{
    font-size: 20px;
    margin: 5px;
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
    min-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
    padding: 5px;
    
}

.btn-reg
{
    margin-top: 8px;
    width: 100px;
    border-style: none;
    outline: 0;
    outline-offset: 0;
    background-color: rgb(202, 231, 206);
    box-shadow: 3px 3px 3px  rgb(100, 231, 206) ;
}
.btn-reg:active  {
   
   box-shadow: 1px 1px 1px  rgb(100, 231, 206) ;
}
.ok 
{
    margin-top: 8px;
    width: 100px;
    border-style: none;
    outline: 0;
    outline-offset: 0;
    background-color: rgb(202, 231, 206);
    box-shadow: 3px 3px 3px  rgb(100, 231, 206) ;
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
    width: 40%;
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
  .bask_cont
  {
      position:absolute;
      width: 100%;
      height: 100%;
      top: 0;
      z-index:7777777777777777 ;
      left: 0;
  }
.basket_button
{
    display: flex;
}
.alert
{
    width: 300%;
    height: 2000px;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    position: absolute;
    z-index:555555555555555555555555555;
   top: 0;
}
.alert_body
{
    position: fixed;
       background: white;
       width: 350px;
       height: 470px;
       color: white;
       margin-top:150px ;
       color: black;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       border-radius: 5px;

}
.worning_alert_body
{
       background: white;
       width: 350px;
       height: 250px;
       color: white;
       margin-top:150px ;
       color: black;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       border-radius: 5px;
}
.alert_body p
{
  font-size: 30px;
  font-family: "Roboto";
  
}
.yes_or_no
{
display: flex;
justify-content: center;
margin-top: 100px;

}
.yes{
margin-right: 25px;
width:80px;
height: 60px;
font-family: 'Roboto';
font-size: 25px;
background: cornflowerblue;
border-style: none;
border-radius: 5px;
}
.no
{
    margin-left: 25px;
    width:80px;
    height: 60px;
    font-family: 'Roboto';
    font-size: 25px;
    background: rgb(90, 6, 70);
    border-style: none;
    border-radius: 5px;
}
.no_child{
    display: flex;
   margin-top: 140px;

}
.worning_no_child{
    display: flex;
}
.worning_no_child p{
font-size: 15px;
font-family: 'Roboto';
}
.no_child p{
font-size: 15px;
font-family: 'Roboto';

}
.age18{
    width: 100px;
    height: 40px;
    margin: 15px;
    border-radius:50%;
    color: white;
    background: red;
    display: flex;
    justify-content: center;
     align-items: center;
}

.age18 p{
    display: inline-block;
    margin-top: 6px;
    font-size: 20px;
    font-weight: bold;
}
.worning_age18
{
    width: 100px;
    height: 40px;
    margin: 15px;
    border-radius:50%;
    color: white;
    background: red;
    display: flex;
    justify-content: center;
     align-items: center;
}
.worning_age18 p
{
    display: inline-block;
    margin-top: 6px;
    font-size: 20px;
    font-weight: bold;
}
@media screen and (max-width: 600px) { 
.header
{
    margin-left: 250px;
}
.btn-reg
{
   
    width: 60px;
    
}


}
</style>