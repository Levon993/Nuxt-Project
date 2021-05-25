<template>
  <div class="container">
    <div class="wrapper">
<div class="text">
  <p>Солнечные цены
    от Солнечного
  </p>
  <button class='btn-reg' @click="$router.push('/specials')"> Показать Еще</button>
       <img class="png" :src="require('@/assets/icons/sunny2.png')" alt="">
  </div>    
  <div class="items">
    <div v-for="product in data" :key="product.id" class="item">
     <img :src="require(`@/assets/img/${product.img}`)" alt="">
     <p>{{product.description}}</p>
     <div class="prices">
     <p class="price">545 р</p>
     <p class="old_price"><strike>545 р</strike></p>
     </div>
    <div class="icons">
  
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
  
  grid-template-columns: 175px 175px 175px 175px;
  grid-template-rows: 280px 280px;
}
.item
{
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 12px;
  border-radius: 8px;
  font-family: "Roboto";
  font-weight: 600;
  padding: 3px;
   transition: 300ms;
}


.item:hover
{
  position: relative;

 box-shadow:  0px 0px 5px 0px rgba(0,0,0,0.6);
 
 
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
   background-color: rgb(1, 54, 63);
     width: 55px;
     margin-right: 7px;
     margin-bottom: 5px;
     transition: 200ms;
}
.basket:hover
{
   background-color: rgb(8, 89, 104);
     
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
.btn-reg
{
    margin-top: 8px;
    width: 130px;
    height: 30px;
    border-style: none;
    outline: 0;
    outline-offset: 0;
    background-color: rgb(39, 193, 240);
    box-shadow: 3px 3px 3px  rgb(36, 37, 37) ;
    font-family: "Roboto";
    font-size: 15px;
}
.btn-reg:active  {
   
   box-shadow: 1px 1px 1px  rgb(100, 231, 206) ;
}
</style>