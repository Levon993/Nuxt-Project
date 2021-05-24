<template>
    <div>
        <h1>sdsdsdsdsdsdsd</h1>
    </div>
</template>
<script>
export default {
    layout:'index',
 async asyncData({app,store}){
     try{
        const token = app.$cookiz.get('token')

     
         console.log('sdsdsdsdsd')
         const page = 1
         await store.dispatch('products/getChoice',{page: page, token: token})
    
      }catch(e)
        {

    }

  },
  mounted()
  {
this.getChoices()
  },
  methods:{
     async getChoices()
      {
          const res =  await this.$store.getters['products/choices']
      console.log(res);
      }
  }
}
</script>