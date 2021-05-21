export default async function ({req,store,redirect,app}) {
  
  
  const token = app.$cookiz.get('token') 
  
  let user = null

 if(token && token.length > 100)
 {
   if (store.getters.auth)
   {
          store.dispatch('auth/getAuth',token)
          user = await store.getters['auth/auth']
   }

   if(!user)

    {
      redirect('/login')
    }
}else
{
  redirect('/login')
}

}
