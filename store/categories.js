
export const state = () =>({
    categories: []
  })

  export const mutations = {
    setCategories(state, categories)
    {
      state.categories = categories
    }
  }

  export const actions = {
    async getCategories({commit},params){
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const categories = await  this.$axios.$get('/api/categories/index')

      commit('setCategories', categories)
    }
  }

  export const getters = {
    categories: s => s.categories
  }
