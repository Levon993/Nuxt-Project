<template>
  <div class="container">
    <div class="wrapper">
<div class="text">
  <p>Солнечные цены
    от Солнечного
  </p>
       <img class="png" :src="require('@/assets/icons/sunny2.png')" alt="">
  </div>    
  <div class="items">
    <div class="item">
     <img :src="require('@/assets/img/shishkin.jpg')" alt="">
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    </div>
    <div class="item">
     <img :src="require('@/assets/img/shishkin.jpg')" alt="">
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    </div>
    <div class="item">
     <img :src="require('@/assets/img/shishkin.jpg')" alt="">
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    </div>
<div class="item">
     <img :src="require('@/assets/img/shishkin.jpg')" alt="">
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    </div>
    <div class="item">
     <img :src="require('@/assets/img/shishkin.jpg')" alt="">
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    </div>
    <div class="item">
     <img :src="require('@/assets/img/shishkin.jpg')" alt="">
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    </div>
     <div class="item">
     <img :src="require('@/assets/img/shishkin.jpg')" alt="">
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    </div>
     <div class="item">
     <img :src="require('@/assets/img/shishkin.jpg')" alt="">
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    </div>
  </div>
    </div>
  </div>
</template>
<style scoped>
.container
{
  min-width: 500px;
}
.wrapper{
  display: grid;
  grid-template-columns: 300px 1fr; 

}
.text
{
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items:center;
  padding: 10px;
  background-color: #ffbf94;
  border-radius:8px;
  box-shadow:  0px 0px 5px 0px rgba(0,0,0,0.6);
}
.text p
{
margin: 5px;
padding: 12px;
font-family: "Roboto";
font-weight:bold;
}
.png
{
  margin-top: 50px;
  width:120px;
  height: 120px;
}
.items
{
  display: grid;
  grid-template-columns: 150px 150px 150px 150px;
  grid-template-rows: 250px 250px;
  
}
.item
{
  display: flex;
  flex-direction: column;
  border: 1px solid silver;
  margin: 2px;
  border-radius: 2px;
 font-family: "Roboto";
 font-weight: 600;
 padding: 3px;
 box-shadow:  0px 0px 5px 0px rgba(0,0,0,0.6);
}
</style>