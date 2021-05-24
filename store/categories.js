
export const state = () =>({
    categories: [],
    categoriesWithPr:{}
  })

  export const mutations = {
    setCategories(state, categories)
    {
      state.categories = categories
    },
    setCategoriesWithPr(state, categories)
    {
      state.categoriesWithPr = categories
    }
  }

  export const actions = {
    async getCategories({commit},params){
      
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const categories = await  this.$axios.$get('/api/categories/index')

      commit('setCategories', categories)
    },
    async getCategoriesWithPr({commit},){
      const categories = await  this.$axios.$get('/api/categories/CategoryWithProducts')
      commit('setCategoriesWithPr', categories)
    }
  }

  export const getters = {
    categories: s => s.categories,
    CategoriesWithPr:s=>s.categoriesWithPr
  }
