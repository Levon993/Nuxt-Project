<template>
  <section>
  <h1>Users page</h1>
  <ul>
    <li v-for="user of users"> <a href="#" @click.prevent="openUser(user.id)">{{user.name}} </a></li>
  </ul>
  </section>
</template>
<script>
  export default
  {
   async fetch({store})
   {
      
      if (store.getters['users/users'].length === 0)
      {
        await store.dispatch('users/fetch')
      }
   },
    data(){
      return{
        // users:{}

      }
    },
    computed:{
     users(){
       return this.$store.getters['users/users']
     }
    },
    methods:
    {
       openUser(user){
               this.$router.push('/users/'+user)
      },
     async getData()
      {

      }
    }
  }
</script>
