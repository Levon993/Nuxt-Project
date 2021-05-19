<template>
    <div class="container">
     <div class="details_body">
       <img :src="require(`@/assets/img/${product.img}`)" alt="">
        <div class="form">
<div class="foem_item">
    <h1>Редактирование</h1>
 <label for="title">{{$t('title')}}</label>
 <input v-model="product.title" type="text" placeholder="Enter Title" id="title">
<span class="error" v-if="errors.title" >{{errors.title}}</span>
</div>
<div class="foem_item">
<label id='brand' for="title">{{$t('brand')}}</label>
<select v-model="product.brand_id" id="brand" >
<option v-for="brand in brands" :key="brand.id" :value="brand.id">{{brand.title}}</option>
</select>
<span class="error" v-if="errors.brand_id">{{errors.brand_id}}</span>
</div>
<div class="foem_item">
<label for="category">{{$t('category')}}</label>
<select v-model="product.category_id" title="category">
<option v-for="category in categories" :key="category.id" :value="category.id">{{category.title}}</option>
</select>
<span class="error" v-if="errors.category_id">{{errors.category_id}}</span>
</div>
<div class="foem_item">
 <label placeholder="Enter Price" for="price">{{$t('price')}}</label>
 <input v-model="product.price" type="number" id="price">
<span class="error" v-if="errors.price"> {{errors.price}}</span>

</div>
<div class="foem_item">
 <label placeholder="Enter Keywords" for="keywords">Keywords</label>
 <input v-model="product.keywords" type="text" id="price">
<span class="error" v-if='errors.keywords'>{{errors.keywords}}</span>

</div>

<div class="foem_item">
<button @click="updateProduct()">Редакировать</button>
</div>
  </div>
     </div>
    </div>
</template>
<script>
import token from '@/mixins/token.js'
export default {
     mixins:[token], 
    props:['product'],
    data:(()=>
    {

        return{
            brands:{},
           categories:{},
             errors:{
              title:"",
              category_id:"",
              alias:'',
              brand_id:"",
              price:"",
              keywords:""
           },
        }
    }), 
    mounted()
    {
   this.getBrands()
    this.getCategories()
    },
    methods:{
        async getBrands()
       {
            await this.$store.dispatch('brands/getBrands',{token: this.token})
            this.brands = await this.$store.getters['brands/brands']
       },
        async getCategories()
       {
            await this.$store.dispatch('categories/getCategories',{token: this.token})
            this.categories = await this.$store.getters['categories/categories']
       },
     async updateProduct()
       {
             await this.$store.dispatch('products/update',{product:this.product, token: this.token})
          const res  = await this.$store.getters['products/updateMessage']
           console.log(res);
       }
    }
}
</script>
<style scoped>
.container
{
   position:absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color:rgba(0,0,0,0.5);
    z-index: 11111111111;
}
img
{
    width: 75px;
    height: 75px;
    margin-top:80px ;
}
.details_body
{

    width: 650px;
    height: 600px;
    margin-top:150px ;
    background-color: white;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 5px 5px 5px black;
    
}
.form{
    width: 400px;
    height: 550px;
    background-color: white;
    margin: 50px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 5px 5px 5px black;
}
.foem_item
{
    display: flex;
    flex-direction: column;
    margin: 10px;
}
input {
   
    border-style: none;
    border-bottom: 2px solid silver;
    transition: 300ms;
}
input:active, :focus
{
    
    top: 5px;
    border-bottom: 2px solid green;
    outline: 0;
    outline-offset: 0;
}

button
{
     margin-top: 8px;
    width: 100px;
    border-style: none;
    outline: 0;
    outline-offset: 0;
    background-color: rgb(202, 231, 206);
    box-shadow: 3px 3px 3px  rgb(100, 231, 206) ;
}
</style>