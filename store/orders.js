
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
    async getOrders({commit},params){
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const orders = await  this.$axios.$post('/api/orders/index?page=' +params.page)

      commit('setOrder', orders)
    }
  }

  export const getters = {
    orders: s => s.orders
  }
