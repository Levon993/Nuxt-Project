<template>
<div>
  
    <div class="conatainer">
    
      <div w="4">
      <vs-navbar  shadow square center-collapsed v-model="active">
        <template #left>
          <vs-button @click="activeSidebar = !activeSidebar" flat icon>
            <i class='bx bx-menu'></i>
          </vs-button>
        </template>
        <vs-navbar-item >
        <div class="center content-inputs">
     <vs-input
        type="text"
        label-placeholder="Поиск "
        
        v-model="search"
        >
        <template  #icon>
         
          <i @click="test" class='bx search bx-search'></i>
        </template>

        <template >
          search
        </template>

      </vs-input>
    </div>
        </vs-navbar-item>
        
        <template #right>
          <vs-button flat >Login</vs-button>
          <vs-button>Get Started</vs-button>
        </template>
      </vs-navbar>
      </div>
      
      <vs-sidebar
        absolute
        v-model="active"
        :open.sync="activeSidebar"
        >
        <template #logo>
        <img class="logo" :src="require('@/assets/img/logo.png')" alt="">
        </template>
        <vs-sidebar-item id="bread_products">
          <template #icon>
              <img class="png" :src="require('@/assets/icons/bread.png')">
            
          </template>
          {{$t('bread_products')}}
        </vs-sidebar-item>
        <vs-sidebar-item id="bear_products">
          <template #icon>
      <img class="png" :src="require('@/assets/icons/Beer.png')">

          </template>
          {{$t('bear_products')}}
        </vs-sidebar-item>
        <vs-sidebar-item id="frozen_food">
          <template #icon>
            <img class="png" :src="require('@/assets/icons/snow.png')">
          </template>
          {{$t('frozen_food')}}
        </vs-sidebar-item>
       <vs-sidebar-item id="sausage">
          <template #icon>
            <img class="png" :src="require('@/assets/icons/sousage.png')">
          </template>
          {{$t('sausage')}}
        </vs-sidebar-item>
        <vs-sidebar-item id="sweet">
          <template #icon>
           <img class="png" :src="require('@/assets/icons/sweet.png')">

          </template>
          {{$t('sweet')}}
        </vs-sidebar-item>
        <vs-sidebar-item id="non_lac_drink">
          <template #icon>
           <img class="png" :src="require('@/assets/icons/bottle.png')">
          </template>
          {{$t('non_lac_drink')}}
        </vs-sidebar-item>
        <vs-sidebar-item id="milk">
          <template #icon>
          <img class="png" :src="require('@/assets/icons/milk.png')">
          </template>
          Молочные Продукты
        </vs-sidebar-item>
        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
              <img class="png" :src="require('@/assets/img/dog.png')">
              </template>
              {{$t('pet_food')}}
            </vs-sidebar-item>
          </template>
          <vs-sidebar-item id="github">
            <template #icon>
            <img class="png" :src="require('@/assets/icons/cat.png')">
            </template>
            Для Кошек
          </vs-sidebar-item>
          <vs-sidebar-item id="codepen">
            <template #icon>
             <img class="png" :src="require('@/assets/img/dog.png')">
            </template>
           Для собак
          </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-item id="donate">
          <template #icon>
            <i class='bx bxs-donate-heart' ></i>
          </template>
          Donate
        </vs-sidebar-item>
        <vs-sidebar-item id="drink">
          <template #icon>
            <i class='bx bx-drink'></i>
          </template>
          Drink
        </vs-sidebar-item>
        <vs-sidebar-item id="shopping">
          <template #icon>
            <i class='bx bxs-shopping-bags'></i>
          </template>
          Shopping
        </vs-sidebar-item>
        <vs-sidebar-item id="chat">
          <template #icon>
            <i class='bx bx-chat' ></i>
          </template>
          Chat
        </vs-sidebar-item>
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar>
              <img src="/avatars/avatar-5.png" alt="">
            </vs-avatar>

            <vs-avatar badge-color="danger" badge-position="top-right">
              <i class='bx bx-bell' ></i>

              <template #badge>
                28
              </template>
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar>
    </div>
    

    <div id='child_1' class="container_1">
      <nuxt />
    </div>

  
  </div>
 
  </template>
  <script>
import about from '../pages/about.vue'
  export default {
  components: { about },
    data:() => ({
      active: 'home',
      activeSidebar: false,
      search:""
    }),
    methods:{
      test()
      {
        console.log(search)
      }
    }
  }
  </script>
  <style >
    .search
    {
      cursor: pointer;
      margin-top: 5px;
    }
  .container_1
  {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
  }
  .logo
  {
    width: 100%;
    height: 100%;
  }
  .png
  {
    width: 44px;
    height: 40px;
  }
  .about
  {
    display: flex;
  }
  .about_item
  {
    display: flex;
    margin: 60px;
   
  }
   .about_item p
  {
    
    margin-top: 20px;
    display: inline-block;
    width: 75px;
    font-size: 13px;
    font-weight: bold;
 
  }
  .sunny{
    display: flex;
    margin: 60px;
  }
   .sunny p
  {
    
    margin-top: 20px;
    display: inline-block;
    width: 75px;
    font-size: 18px;
    font-weight: bold;
    padding: 5px;
  }
  .png_about
  {
    width: 80px;
    height: 80px;
  }
  .about_container{
       display: flex;
     }

  @media screen and (max-width: 540px) 
   {
     .container
     {
       margin-left: 200px;
     }
     .container_1
     {
       margin-right: 50px;
     }
     .about_container{
      
     flex-wrap: wrap; 
     }
     .sunny
     {
       width: 70%;
     
       align-items: center;
     
     }
     .about
     {
       
       width: 200px;
     }
     .png_about
     {
      width: 50px;
      height: 50px;
     }
     .sunny p
     {
       width: 100%;
     }
    
    
     
    }
  </style>