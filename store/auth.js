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
     
    getAuth({commit}, token){
      const auth = this.$axios.$post('/api/get/user')
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      commit('setAuth', auth)
   },
    
  }
  
  export const getters = {
    auth: s =>s.auth
   }
  