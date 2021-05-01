
export const state = () =>({
    products: [],
    search:{},
  })

  export const mutations = {
    setProducts(state, products)
    {
      state.products = products
    },

    setSearch(state, search)
    {
      state.search = search
    },
  }

  export const actions = {
    async getProducts({commit},params){
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const products = await  this.$axios.$post('/api/products/index?page=' +params.page)
     
      commit('setProducts', products)
    },

    async getSearchData({commit},params){
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const search = await  this.$axios.$post('/api/products/search',params.searchData)
      console.log('store',search);
      commit('setSearch', search)
    }
  }

  export const getters = {
    products: s => s.products,
    search: s => s.search
  }
