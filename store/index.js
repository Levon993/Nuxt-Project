export const state = () =>({
  user: {

  }
})

export const mutations = {
  setUser(state, user)
  {
    state.user = user
  },
  clearUser(state)
  {
    state.user = null
  }

}

export const actions = {
  nuxtServerInit({dispatch})
  {
   // console.log('here nuxt start')
  },

   login({commit}, data){
     const user = this.$axios.$post('/api/login',data)
     commit('setUser', user)
  },
  logout({commit}){
    this.$axios.$post('/api/logout')
    commit('clearUser')
  }
}

export const getters = {
  user: s => s.user
}
