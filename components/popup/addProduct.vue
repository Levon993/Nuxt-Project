<template>
    <div class="product_popup">
  <div class="form">
<div class="foem_item">
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
                <input  id="ImageUpload"   type="file"/>
<span class="error">Empty Fild Image</span>   
            </div>
<div class="foem_item">
<button @click="createNewProduct()">Add</button>
</div>
  </div>
    </div>
</template>
<script>
import token from '@/mixins/token.js'
export default {
   mixins:[token], 
   data:(()=>{
       return{
           product:{
              title:"",
              category_id:"",
              alias:'',
              brand_id:"",
              price:"",
              keywords:""
           },
             
             errors:{
              title:"",
              category_id:"",
              alias:'',
              brand_id:"",
              price:"",
              keywords:""
           },
           formData:{},
           brands:{},
           categories:{}
       }
   }),
   mounted(){
       this.getBrands()
       this.getCategories()
   },
   methods:{ 
 
     validate(form)
     {
         let validate = 5
         if(form.title.length < 4){this.errors.title ='Empty Title'; validate++} else {this.errors.title ='';--validate}
         if(!form.category_id) {this.errors.category_id ='Empty Category';validate++} else {this.errors.category_id ='';--validate}  
         if(!form.keywords){this.errors.keywords ='Empty Keyword';validate++}else {this.errors.keywords =''; --validate}  
         if(!form.price){this.errors.price ='Empty price';validate ++} else {this.errors.price =''; --validate}  
         if(!form.brand_id){this.errors.brand_id = 'Empty brand';validate ++}else {this.errors.brand_id = ''; --validate}
         if(validate === 0) {return true} else{return false}
     },

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
       async createNewProduct(){ 
                try {
                    const valid = this.validate(this.product)
                   
                    if(!valid){ return this.$toast.error('Empty Form'); }
                    let data = new FormData();
                    data.append('title', this.product.title)
                    data.append('category_id', this.product.category_id)
                    data.append('brand_id', this.product.brand_id)
                    data.append('alias', this.product.alias)
                    data.append('price', this.product.price)
                    data.append('keywords', this.product.keywords)
                    data.append('image', ImageUpload.files[0]);
//                    console.log(data);return

                     await this.$store.dispatch('products/addProduct', {data:data,token:this.token});
                     const res = await this.$store.getters['products/message'];
                      console.log(res);
                      this.product.title = '',
                        this.product.category_id = '',
                        this.product.brand_id = '',
                        this.product.alias = '',
                        this.product.price = '',
                        this.product.keywords = ''
                         this.$toast.success('Product Successfully Created')

                }catch (e) {
                    //console.log(e);
                   this.$toast.error('Something Went Wrong')
                }
                
            },


   }

}
</script>
<style scoped >
.error
{
  border-bottom: 1px solid red;
  color: red;
  font-size: 12px;
}
.product_popup
{
    position:absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color:rgba(0,0,0,0.5);
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
    position: relative;
    top: 5px;
    border-bottom: 2px solid green;
    outline: 0;
    outline-offset: 0;
}

button
{
     margin-top: 8px;
    width: 80px;
    border-style: none;
    outline: 0;
    outline-offset: 0;
    background-color: rgb(202, 231, 206);
    box-shadow: 3px 3px 3px  rgb(100, 231, 206) ;
}
</style>