<template>
<div class="container">
    <div class="header"> 
    <div><i  class='bx menu bx-menu'></i></div>
    <div><input type="text"></div>
    <div>
        <button>login</button>
        <button>regiser</button>
        </div>
    </div>
    <div>
       
        <nuxt />

        
    </div>
 </div>
</template>
<style scoped>
.container
{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 15px;
}
.header
{
    display: flex;
    width: 100%;
    height: 75px;
    justify-content: space-between;
    padding: 25px;
    min-width: 540px;    
   
} 
.menu
{
   background-color: aqua;
   font-size: 40px;
}
</style>