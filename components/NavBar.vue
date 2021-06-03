<template>
  <div class="body">
    <header class="header">
      <div class="logo">Admin Panel</div>
      <div class="links">
      <div class="link"><nuxt-link  exect no-prefetch active-class to="/">{{$t('home')}}</nuxt-link></div>
      <div class="link"> <nuxt-link active-class to="/admin/products">{{$t('poducts')}}</nuxt-link></div>
      <div class="link"> <nuxt-link active-class to="/admin/NonRegisterOrders">БезРег</nuxt-link></div>
      <div class="link"> <nuxt-link active-class to="/admin/offers">Наборы и предложения</nuxt-link></div>
      <div class="link"> <nuxt-link active-class to="/admin/discounts">Скидки</nuxt-link></div>  
      <div class="link" ><a href="#"  @click.prevent="logout">{{$t('logout')}}</a> </div>
      </div>
      <div class="user"><p class="auth">{{user.user}}</p> <p>{{$t('working')}}</p></div>
    </header>
  </div>
</template>
<script>
  export default
  {

    data:(()=>{
      return{
        user:{}
      }

    }),

    mounted() {
      this.getUser()
      
    },

    methods:{
       logout(){
         this.$store.dispatch('logout')
         localStorage.removeItem('AuthUser');
         this.$router.push("/login")
       },
       getUser(){
         if(localStorage.getItem('AuthUser') !== null)
         {
           this.user = JSON.parse(localStorage.getItem('AuthUser'))
           
         }
       }
     }
  }
</script>
<style>

  .body
  {
    display: grid;
    grid-template-areas: "header  header";
  }
  .header
  {
    grid-area: header;
    display: grid;
    grid-template-columns: 5px 200px 1fr 1fr 1fr 1fr 170px 5px;
    grid-template-rows: 95px;
    align-items: center;
    grid-column-gap: 10px;
  }
  .logo
  {

    height: 70px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 30px;
    grid-column: 2/3;
    text-align: center;
  }
  .links
  {
    grid-column: 4/5;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 15px;
    grid-template-rows: 100%;
    grid-column-gap: 10px;
    align-items: start;

  }
  .active
  {
   border-bottom: 1px solid red;
  }
  .user
  {
    grid-column: 7/8;
    font-size: 15px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

  }
  .user p
  {
    margin-right: 5px;
    font-size: 17px;
  }

.auth
{
  font-size: 18px;
  border-bottom: 1px solid silver;
}
  a{
    font-family: Roboto sans-serif;
    color: black;
  }
  a:hover
  {
    text-decoration: none;
    color: #47494E;
  }
</style>
