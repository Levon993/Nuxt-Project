<template>
    <div class="product_popup">
  <div class="form">
<div class="foem_item">
 <label for="title">Заголовок</label>
 <textarea type="" v-model="offer.title" placeholder="Enter Title" id="title" />
<span class="error" v-if="errors.title" >{{errors.title}}</span>
</div>
<div class="foem_item">
<label id='desc' for="title">Описание</label>
 <textarea type="" v-model="offer.description" placeholder="Enter Title" id="desc" />
<span class="error" v-if="errors.brand_id">{{errors.brand_id}}</span>
</div>
<div class="categores">
    <button class="cat_btn" v-for="categry in categories" :key='categry.id'
    @click="productData(categry.product)"
    ><p class="cat_p">{{categry.title}}</p></button>
</div>
<div class="foem_item">
                <input  id="ImageUpload"   type="file"/>
<span class="error">Empty Fild Image</span>   
            </div>
<div class="foem_item">
<button @click="createNewOffer()">Add</button>
</div>
  </div>
  <ChoiceProducts v-show="show" :products='products'/>
    </div>
</template>
<script>
import ChoiceProducts from '@/components/admin/ChoieProducts'
import token from '@/mixins/token.js'
    export default{
        mixins:[token],
        components:{
            ChoiceProducts
        },
        data:(()=>{
           
            return{
                show:false,
                 errors:{
              title:"",
              category_id:"",
              alias:'',
              brand_id:"",
              price:"",
              keywords:""
           },
                offer:{
                    title:'',
                    products_id:[],
                    description:'',
                },
                categories:[],
                products:{},
                brands:[],
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                }
            }
        }),
        mounted() {
            this.getProducts()


        },

        methods:{
            async  createNewOffer(){
                try {
                    console.log(this.offer);
                    let data = new FormData();
                    data.append('title', this.offer.title)
                    data.append('products_id', this.offer.products_id)
                    data.append('description', this.offer.description)
                    data.append('image', ImageUpload.files[0]);
                   await this.$store.dispatch('offers/addOffer',{data:data, token:this.token} );
                    const res = await this.$store.getters['offers/message'];

                        this.offer.title = '',
                        this.offer.products_id = [],
                        this.offer.description = ''
                       this.$vs.notification({
                    color: "success",
                    position: "top-right",
                    title: "Успешно",
                    text: "Заголовок успешно добавлен"
                });
                        
                }catch (e) {
                   
                }
            },
             async  getProducts(){
        //try{
            await this.$store.dispatch('categories/getCategoriesWithPr')
         const res = await this.$store.getters['categories/CategoriesWithPr']
         this.categories = res
       //  console.log(this.categories);
     //  }catch(e)
       //    {

        //   }
          },
          productData(product)
          {
              this.show = true
              this.products = product 
          }
        }


    }
</script>

   <style scoped >
   .categores
   {
       display: flex;
       flex-wrap: wrap;
   }
   .cat_p
   {
       display:inline-block;
       width: 75px;
       height: 55px;
       overflow: hidden;
       text-align: center;
   }
   .cat_btn{
       margin: 5px;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
   }
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
    width: 1000px;
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