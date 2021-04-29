<template>
  <div>
    <Navbar />
    <main>
      <div class="container">

        <Nuxt />
      </div>
    </main>
  </div>
</template>
<script>
  import Navbar from "@/components/NavBar"
  export default {
    components:{
      Navbar
    },
    methods:{
      setCookie()
      {
        const {access_token} = JSON.parse(localStorage.getItem('AuthUser'))
          Cookies.set('token', access_token)
      }
  }
  }
</script>
<style>


</style>
