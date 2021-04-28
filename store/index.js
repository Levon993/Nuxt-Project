export const state = () =>({
  user: {},
  auth:[]

})

export const mutations = {
  setUser(state, user)
  {
    state.user = user
  },
  setAuth(state, auth)
  {
    
    state.auth = auth
  },
  
  clearUser(state)
  {
    state.user = null
  }

}

export const actions = {
async nuxtServerInit({dispatch, getters})
  {
   
    
  },

   login({commit}, data){
     const user = this.$axios.$post('/api/login',data)
     commit('setUser', user)
  },
  auth({commit}){
    const auth = this.$axios.$post('/api/auth/user')

    commit('setAuth', auth)
 },
   logout({commit}){
    this.$axios.$post('/api/logout')
    commit('clearUser')
   }
}

export const getters = {
  user: s => s.user,
  auth: s =>s.auth
 }
