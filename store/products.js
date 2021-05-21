
export const state = () =>({
    products: [],
    search:{},
    addMessage:{},
    updateMessage:{},
    choiceMessage:{},
    choices:{},
    choicesForUser:{},
    message:[]
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
    setMessage(state, message)
    {
      state.message = message
    },
    setUpdateMessage(state, message)
    {
      state.updateMessage = message
    },
    setChoiceMessage(state, message)
    {
      state.choiceMessage = message
    },
    setChoices(state, product)
    {
      state.choices = product
    },
    setChoicesForUser(state, product)
    {
      state.choicesForUser = product
    }

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
    },

    async addProduct({commit},params)
    {
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const message = await  this.$axios.$post('/api/products/create',params.data)
      commit('setMessage', message)
    },
    async getProductsByCategory({commit},params){
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const products = await  this.$axios.$post('/api/products/getByCategory', {categoryId:params.id})
      commit('setProducts', products)
    },
    async update({commit},params){
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const message = await  this.$axios.$post('/api/products/update', {product:params.product})
      commit('setUpdateMessage', message)
    },
    async addToChoice({commit},params){
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const message = await  this.$axios.$post('/api/products/addToChoice', {productId:params.id})
      commit('setUpdateMessage', message)
    },
    async getChoice({commit},params){
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const products = await  this.$axios.$post('/api/products/getChoices')
      commit('setChoices', products)
    },
    async ChoicesForUser({commit},params){
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const products = await  this.$axios.$post('/api/products/getChoicesForUser')
      commit('setChoicesForUser', products)
    },
  }

  export const getters = {
    products: s => s.products,
    search: s => s.search,
    message:s=>s.message,
    updateMessage:s=>s.updateMessage,
    choiceMessage:s=>s.choiceMessage,
    choices:s=>s.choices,
    choicesForUser:s=>s.choicesForUser
  }
