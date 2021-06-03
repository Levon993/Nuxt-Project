
export const state = () =>({
    orders: [],
    createMessage:[]
  })

  export const mutations = {
    setOrder(state, orders)
    {
      state.orders = orders
    },
    setCreate(state,createMessage)
    {
      state.createMessage = createMessage
    }
  }

  export const actions = {
    async getOrders({commit},params){
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const orders = await  this.$axios.$post('/api/orders/index?page=' +params.page)
      commit('setOrder', orders)
    },
    async addOrder({commit},params){
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const message = await  this.$axios.$post('/api/orders/create', params.data)
      commit('setCreate', message)
    }
  }

  export const getters = {
    orders: s => s.orders,
    createMessage:s=>s.createMessage
  }
