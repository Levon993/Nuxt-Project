<template>
  <div>
    <h1>{{user.name}}</h1>
  </div>
</template>
<script>
  export default {
    validate({params})
    {
      console.log(params.id)
      return true
    },
  async  asyncData({$axios,params})
  {
  const user = await $axios.$get('https://jsonplaceholder.typicode.com/users/'+ params.id)
   return {user}
  }

  }
</script>
