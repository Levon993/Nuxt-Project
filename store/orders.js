export const state = () =>({
    orders: []
  })
  
  export const mutations = {
    setOrder(state, orders)
    {
      state.orders = orders
    }
  }
  
  export const actions = {
    async getOrders({commit}){
  const orders = await  this.$axios.$get('/api/orders/index')
  
      commit('setOrder', orders)
    }
  }
  
  export const getters = {
    orders: s => s.orders
  }
  