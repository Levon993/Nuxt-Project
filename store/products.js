
export const state = () =>({
    products: []
  })

  export const mutations = {
    setProducts(state, products)
    {
      state.products = products
    }
  }

  export const actions = {
    async getProducts({commit},params){
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const products = await  this.$axios.$post('/api/products/index?page=' +params.page)
     
      commit('setProducts', products)
    }
  }

  export const getters = {
    products: s => s.products
  }
