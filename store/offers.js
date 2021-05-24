
export const state = () =>({
    offers: [],
    message:{}
    
  })

  export const mutations = {
    setOffers(state, offers)
    {
      state.offers = offers
    },
    setMessage(state, message)
    {
     state.message =  message
    }

  }

  export const actions = {
    async getOffers({commit},params){
      
      const offers = await  this.$axios.$post('/api/offers/index')
      commit('setOffers', offers)
    },
    async addOffer({commit},params)
    {
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const message = await  this.$axios.$post('/api/offers/create',params.data)
      commit('setMessage', message)
    },
    
    async update({commit},params){
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const message = await  this.$axios.$post('/api/products/update', {product:params.product})
      commit('setUpdateMessage', message)
    },
    async Delete({commit},params){
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const message = await  this.$axios.$post('/api/products/addToChoice', {productId:params.id})
      commit('setUpdateMessage', message)
    },
  }

  export const getters = {
    offers: s => s.offers,
   message:s=>s.message    
  }
