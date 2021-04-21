export const state = () =>({
    
    auth:[]
  
  })
  
  export const mutations = {
    
    setAuth(state, auth)
    {
      state.auth = auth
    },
    
    
  
  }
  
  export const actions = {
     
    getAuth({commit}){
      const auth = this.$axios.$post('/api/test/user')
      commit('setAuth', auth)
   },
    
  }
  
  export const getters = {
    auth: s =>s.auth
   }
  