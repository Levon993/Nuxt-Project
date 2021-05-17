<template>
<div class="container">
    <div class="special">
        
       
         <div class="text">
           <p>Солнечныe цены от солнеченго</p>
           <img class="png" :src="require('@/assets/icons/sunny2.png')" alt="">
           
         </div>
         <div class="cards">
            <div class="spec_item">
           <img  :src="require('@/assets/img/shishkin.jpg')" alt="">
           <p>Вода питьевая негазированная 5л</p>
             </div>
              <div class="spec_item">
         <img :src="require('@/assets/img/shishkin.jpg')" alt="">
         <p>Вода питьевая негазированная 5л</p>
       </div>
       <div class="spec_item">
         <img :src="require('@/assets/img/shishkin.jpg')" alt="">
         <p>Вода питьевая негазированная 5л</p>
       </div>
       <div class="spec_item">
         <img :src="require('@/assets/img/shishkin.jpg')" alt="">
         <p>Вода питьевая негазированная 5л</p>
       </div>
       <div class="spec_item">
         <img :src="require('@/assets/img/shishkin.jpg')" alt="">
         <p>Вода питьевая негазированная 5л</p>
       </div>
       <div class="spec_item">
         <img :src="require('@/assets/img/shishkin.jpg')" alt="">
         <p>Вода питьевая негазированная 5л</p>
       </div>
    </div>
    </div>
    </div>
    
  
</template>
<style scoped>
.container
{
    direction: flex;
    justify-content: center;
    align-items: center;
}
.special
{
display: grid;
grid-template-columns:40px 300px 40px 500px 40px ;

}
.cards
{
  grid-column: 3/4;
  display: grid;
  grid-template-columns: 150px 150px 150px;
  grid-template-rows: 180px 180px ;
  margin: 9px;
  padding: 5px;

}


.text
{
grid-column: 2/2;
background-color: #ffbf94;
border-radius: 8px;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
padding:35px ;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
.png
{
  width: 130px;
  height: 130px;

 
} 
.text p{
 font-family: 'Roboto';
 font-size: 30px;
 font-weight: 600;
}
</style>