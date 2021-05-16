<template>
<div>
  
    <div class="">
    <no-ssr>
      <vs-navbar shadow square center-collapsed v-model="active">
        <template #left>
          <vs-button @click="activeSidebar = !activeSidebar" flat icon>
            <i class='bx bx-menu'></i>
          </vs-button>
        </template>
        <vs-navbar-item :active="active == 'guide'" id="guide">
          Guide
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'docs'" id="docs">
          Documents
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'components'" id="components">
          Components
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'license'" id="license">
          license
        </vs-navbar-item>
        <template #right>
          <vs-button flat >Login</vs-button>
          <vs-button>Get Started</vs-button>
        </template>
      </vs-navbar>
      </no-ssr>
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
          <i class='bx bxs-fridge'></i>
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
            <i class='bx bxs-music'></i>
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

    <div class="container_1">
      <div class="about_container">
        <div class="sunny">
          <img class="png_about" :src="require('@/assets/icons/sunny.png')">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
      <div class="about">
        <div class="about_item">
        <img class="png_about" :src="require('@/assets/icons/rebbit.png')">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
       </div>
        <div class="about_item">
        <img class="png_about" :src="require('@/assets/icons/rebbit.png')">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
       </div>
        <div class="about_item">
        <img class="png_about" :src="require('@/assets/icons/rebbit.png')">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
       </div>
      </div>
      </div>
    </div>
  </div>
 
  </template>
  <script>
import about from '../pages/about.vue'
  export default {
  components: { about },
    data:() => ({
      active: 'home',
      activeSidebar: false
    })
  }
  </script>
  <style >
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
    width: 24px;
    height: 24px;
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
  }
  .png_about
  {
    width: 80px;
    height: 80px;
  }
  .about_container{
       display: flex;
     }

  @media screen and (max-width: 500px) 
   {
     .about_container{
      flex-wrap: wrap;
      margin: 25x;
     }
     .sunny
     {
       width: 70%;
      display:none;
       align-items: center;
     
     }
     .about
     {
       display: none;
      margin-left: 100px;
      width: 300px;
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
     #child_1
     {
      display:none;
     }
     .about_item
     {
       flex-direction: column;
     }
     
    }
  </style>