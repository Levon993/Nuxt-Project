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
    async getOrders({commit},page){

  const orders = await  this.$axios.$post('/api/orders/index?page=' + page)

      commit('setOrder', orders)
    }
  }

  export const getters = {
    orders: s => s.orders
  }
