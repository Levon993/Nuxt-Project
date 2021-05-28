export default 
{
    data:(()=>{
        return{
            token: ""
        }
    }),
    
  mounted()
  {
    this.getTokenFromStorage()
  } , 
 
    methods:{

     getTokenFromStorage()
     {
       try
       {
        const {access_token} = JSON.parse(localStorage.getItem('AuthUser'))
        this.token = access_token
       }catch(e)
       {}
        
     }

    }


    
}