
export const state = () =>({
    products: [],
    product:[],
    search:{},
    addMessage:{},
    updateMessage:{},
    choiceMessage:{},
    choices:{},
    discounts:{},
    choicesForUser:{},
    discountMessage:{},
    discountForUser:{},
    message:[],
    recomendations:[],
    hits:[]
  })

  export const mutations = {
    setProducts(state, products)
    {
      state.products = products
    },
    setProduct(state, product)
    {
      state.product = product
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
    },
    setDiscountMessage(state, message)
    {
    state.discountMessage = message
    },
    setDiscounts(state, discounts)
    {
    state.discounts = discounts
    },
    setdiscountForUser(state,discountForUser)
    {
      state.discountForUser =discountForUser
    },
    setRecomendations(state, recomendations)
    {
      state.recomendations = recomendations
    },
    setHits(state,hits)
    {
      state.hits = hits
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
    async ChoicesForUser({commit}){
     
      const products = await  this.$axios.$post('/api/products/getChoicesForUser')
      commit('setChoicesForUser', products)
    },
    async addToDiscount({commit},params){
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const message = await  this.$axios.$post('/api/products/addToDiscount', {productId:params.id})
      commit('setDiscountMessage', message)
    },
    async getDiscounts({commit},params){
      this.$axios.defaults.headers.common['Authorization'] = `Bearer ${params.token}`
      const discounts = await  this.$axios.$get('/api/products/getDiscounts?page=' +params.page)
      commit('setDiscounts', discounts)
    },
    async getDiscountForUser({commit}){
      const discounts = await  this.$axios.$get('/api/products/getDiscountsForUsers')
      commit('setdiscountForUser', discounts)
    },
    async getProductById({commit},params)
    {
      const product = await  this.$axios.$post('/api/products/getById',{id:params.id})
      commit('setProduct', product)
    },
    async getRecomendations({commit},params)
    {
      const recomendations = await  this.$axios.$post('/api/products/recomended?page=' + params.page,{data:params.data})
      commit('setRecomendations', recomendations)
    },
    async getHits({commit},params)
    {
      const hits = await  this.$axios.$post('/api/products/hits?page=' + params.page )
      commit('setHits',hits)
    }
  }

  export const getters = {
    products: s => s.products,
    search: s => s.search,
    message:s=>s.message,
    updateMessage:s=>s.updateMessage,
    choiceMessage:s=>s.choiceMessage,
    choices:s=>s.choices,
    choicesForUser:s=>s.choicesForUser,
    discountMessage: s=>s.discountMessage,
    discounts:s=>s.discounts,
    discountForUser:s=>s.discountForUser,    
    product:s=>s.product,
    recomendations:s=>s.recomendations,
    hits:s=>s.hits
  }
