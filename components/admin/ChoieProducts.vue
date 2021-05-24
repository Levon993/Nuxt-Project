<template>
    <div class="product_popup">
        <div class="close" @click="$parent.show = false ">X</div>
  <div class="form">
      <div  v-for="product in products" :key="product.id">
         <input type="checkbox" id="product" :value="product.id" v-model="checkProducts">
              <label for="product">{{product.title}}</label>
  </div>
<div class="produt_item">
          <button @click="Checkedroducts()">Push</button>

</div>
  </div>
  
    </div>
</template>
<script>

export default {
    props:['products'],
    data:(()=>{
        return{
          checkProducts:[]
        }
    }),

    methods:{
        Checkedroducts()
        {
            this.$parent.offer.products_id = this.checkProducts 
            console.log(this.$parent.offer.products_id);
        },
        
    }
}
</script>
<style scoped>
.product_popup
{
    margin-top: 120px;
    position:absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color:rgba(0,0,0,0.5);
}
.form{
    width: 1000px;
    height: 550px;
    max-height: 550px;
    background-color: white;
    margin: 50px;
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    box-shadow: 5px 5px 5px black;
    flex-wrap: wrap;
    overflow-y: scroll;
    margin: 3px;
}
.produt_item{
  
    padding: 5px;
    display: flex;
    width: 130px;
    flex-direction: row;
    overflow: hidden;
    
}
.close{
    width: 45px;
    height: 45px;
    border-radius: 50%;
 background-color: rgb(245, 233, 233);
 position:absolute;
 top: 130px;
 right: 100px;
 color: rgb(0, 0, 0);
 z-index: 222222222222222222 ;
 font-size: 35px;
 text-align: center;
 padding: 4px;
}
</style>