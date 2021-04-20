export const state = () =>({
    user:{}
  })
  
  export const mutations = {
    setUser(state, user)
    {
      state.user = user
    }
  }
  
  export const actions  = {
    async register({commit},data){
        try{
            const user = await  this.$axios.$post('/api/register',data)
        
            commit('setUser', user)
        }catch(e)
        {
            console.log(e)
        }
    
    }
  }
  
  export const getters = {
    user: s => s.user
  }
  