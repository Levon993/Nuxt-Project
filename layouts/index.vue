<template>
<div class="container">
    <div class="header"> 
    <div @click="navbar = !navbar"><i  class='bx menu' :class="{'bx-menu':!navbar,'bx-x':navbar}"></i></div>
    <div><input type="text" class="search">
    <button class="btn-reg"><i  class='bx bx-search'></i></button>
    </div>
    <div>
        <button class="btn-reg">login</button>
        <button class="btn-reg">regiser</button>
        </div>
    </div>
    <div>
    <nav  :class="{nav:navbar, navnone:!navbar}">
            <div class="logo_text">Solnechniy</div>
            <ul class="list">
                <li><img class="png" :src="require('@/assets/icons/bread.png')">  <p>{{$t('bread_products')}}</p> </li>
                <li><img class="png" :src="require('@/assets/icons/Beer.png')"> <p>{{$t('bear_products')}}</p> </li>
                <li><img class="png" :src="require('@/assets/icons/snow.png')"> <p>{{$t('frozen_food')}}</p> </li>
                <li><img class="png" :src="require('@/assets/icons/sousage.png')"> <p>{{$t('sausage')}}</p> </li>
                <li><img class="png" :src="require('@/assets/icons/milk.png')"> <p>Молочка</p> </li>
                <li><img class="png" :src="require('@/assets/img/dog.png')">
                 <ul v-if="pet">
                    {{$t('pet_food')}}
                    <li><img class="png" :src="require('@/assets/img/dog.png')"></li>
                    <li><img class="png" :src="require('@/assets/icons/cat.png')"></li>
                    
                    </ul></li>
                
                </ul>
        </nav>
</div>
    <div class="contant">
<nuxt/>
    </div>
 </div>
</template>
<script>
import NavBar from '@/components/user/NavBar'
export default {
    components:{
     NavBar
    },
    data:(()=>{
        return{
            navbar:false,
            pet:false
        }
    })
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
.contant
{

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
    position: fixed;
    top: 95px;
    left: 0;
    width: 30%;
    height: 800px;
    border-radius: 8px;
    background-color: white;
    border: 1px solid silver;
    transition-delay: 100ms;
    z-index: 1111111111111111;

}
.navnone
{
    display: none;
    transition-delay: 100ms;
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

@media screen and (max-width: 600px) { 

.btn-reg
{
   
    width: 60px;
    
}


}
</style>