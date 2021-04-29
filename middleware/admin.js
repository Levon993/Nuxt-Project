
export default async function ({app,store,redirect}) {
 
   
    const token = app.$cookiz.get('token')
    let user = null
    if(token && token.length > 100)
    {
      
   
     if (store.getters.auth)
          {
           
        store.dispatch('auth/getAuth',token)
          user = await store.getters['auth/auth']
          
          }
    
     if( user.role !== "admin")
     {
        redirect('/')
      }
    }
   else
   {
        redirect('/')
    }
  }