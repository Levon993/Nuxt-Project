<template>
<div class="container">
  <div id="carousel">
      <vs-card-group >
    <vs-card type="4"  v-for="card in 3" :key="card">
      <template #title>
        <h3>Pot with a plant</h3>
      </template>
      <template #img>
        <img class="card" :src="require('@/assets/img/foto2.jpg')" alt="">
      </template>
      <template #text>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx search bx-heart'></i>
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
    <div class="container_1">
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
    </div>
  <div class="spec">
  <Special />
  </div>
  </div>
    </template> 
  <script>
    import Special from '@/components/special'
    export default{
    
      layout:'index',
      components:{
      Special
      }

    }
  </script>
  <style>
  .container
  {
   display: grid;
   justify-content: center;
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
    font-family: 'Roboto', sans-serif;
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
     font-family: 'Roboto', sans-serif;
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
      #carousel{
       display: none;
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
    
     .about_item
     {
       margin: 22px;
       flex-direction: column;
     }
    
    }

    .spec{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>