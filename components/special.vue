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
    <div v-for="product in data" :key="product.id" class="item">
     <img :src="require(`@/assets/img/${product.img}`)" alt="">
     <p>{{product.description}}</p>
     <div class="prices">
     <p class="price">545</p>
     <p class="old_price"><strike>545</strike></p>
     </div>
    <div class="icons">
  <button class="wish"><i class='bx bx-bookmark-heart'></i></button>
  <button class="basket"><i class='bx bx-basket'></i></button>
  </div>
    </div>
  </div>
    </div>
  </div>
</template>
<script>
export default {
 props:['data'],
 mounted(){
   console.log(this.data);
 }
}

</script>
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
  grid-template-columns: 160px 160px 160px 160px;
  grid-template-rows: 250px 250px;
  
}
.item
{
  position: relative;
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

.item:hover
{
  position: relative;
 width: 160px;
 height: 270px;
 
 
z-index: 111111111111111;
}
.icons
{
    display: flex;
    position: absolute;
    bottom:0;
    right: 0;
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
.prices
{
  display: flex;
  position: absolute;
  bottom: 0;
}
.prices p
{
  margin: 5px;
}
.old_price
{
  color: red;
}
</style>