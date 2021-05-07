
export const state = () =>({
    brands: []
  })

  export const mutations = {
    setBrans(state, brands)
    {
      state.brands = brands
    }
  }

  export const actions = {
    async getBrands({commit},params){
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const brands = await  this.$axios.$get('/api/brands/index')

      commit('setBrans', brands)
    }
  }

  export const getters = {
    brands: s => s.brands
  }
