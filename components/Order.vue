<template>
    <div class="order">
         <div @click="$parent.show = false" class="close">X</div>
        <div class="map">
<GmapMap 

:center="{lat:55.917239150932645, lng:37.413900833372644}"
:zoom="16"
style="width: 800px; height: 400px;"
@click="getGoogleApi"
>
<GmapMarker
v-if="position"
:position="position"
:clickable='true'
:draggable="true"

/>
</GmapMap>
<div class="buttons">

</div>
</div>

<div class="questions">
    <button class="btn_q1" @click="disabled = false">Доставка</button>
    <button class="btn_q2">Самоывоз</button>
</div>
<div class="text" v-if="!disabled">
    <p>Дорогой покупатель, пожалуста выберите адрес доставки на карте поставив галочку на вашем доме либо на улиц,
     <small>(либо же введите самостоятельно)</small> и заполните все остальные полья.
     Подробный адрес избавит вас от уточнений курьеров  
    <b class="pay">Оплата при дставке </b>
     </p>
</div>
<div class="form">
<div class="form_item" id="addres_cont">
    <label for="addres">Адрес Доставки</label>
<input id='addres' v-model="orderUserData.address"  :disabled="disabled" type="text">
</div>
<div class="form_item">
<label for="home">Дом</label>
<input id="home" v-model="orderUserData.home" :disabled="disabled" type="text">
</div>
<div class="form_item">
<label for="corpus">Корпус</label>
<input id="corpus" v-model="orderUserData.corps" :disabled="disabled" type="text">
</div>
<div class="form_item">
<label for="stroy">Строение</label>
<input id="stroy" v-model="orderUserData.structure" :disabled="disabled" type="text">
</div>
<div class="form_item">
<label for="pod">Подъезд</label>
<input id="pod" v-model="orderUserData.entrance" :disabled="disabled" type="text">
</div>
<div class="form_item">
<label for="Kvar">Квартира</label>
<input id="Kvar" v-model="orderUserData.flat" :disabled="disabled" type="text">
</div>
<div class="form_item">
<label for="email">Email</label>
<input id="email" v-model="orderUserData.email" :disabled="disabled" type="email">
</div>
</div>
<button @click="addOrder()" class="send">Подтвердить</button>

    </div>
</template>
<script>
export default {
    props:['orderData'],
data:(()=>{
return {
    orderUserData:{
        address:'',
        home:'5',
        corps:'6',
        structure:'3',
        entrance:'4',
        flat:'55',
        email:'levon@mail111111.ru',
        phone:''
    },
    
    disabled:true,
    marker:[],
    name:'',
    position:{lat:55.91675056131745, lng:37.41215038395942},
adreses:[]
}
}) ,
mounted(){
//this.getGoogleApi()
this.$getLocation({})
  .then(coordinates => {
    this.position.lat = coordinates.lat
    this.position.lng = coordinates.lng
});
//this.$refs.mapRef.$mapPromise.then((map) => {
   // console.log(map) //  map.panTo({lat: 1.38, lng: 103.80})
   // })
   
},
methods:{ 
    mark(event)
    {
     this.position.lat =  event.latLng.lat()
     this.position.lng = event.latLng.lng()
     const res =  fetch('http://maps.google.com/maps/api/geocode/xml?address=Нижний%20Новгород&sensor=false')
    res.then((result) => {
        
    }).catch((err) => {
        
    });
   },
  async addOrder()
   {

       try{
      await this.$store.dispatch('orders/addOrder',{data:{products:this.orderData, user:this.orderUserData}})
            const res  = await this.$store.getters['orders/createMessage']
           for( let item in this.orderUserData)
                {
                    this.orderUserData[item] = ''
                }
           localStorage.removeItem("Basket")
           localStorage.removeItem("BasketData")
           this.$vs.notification({
                    color: "success",
                    position: "top-right",
                    title: "Успешно",
                    text: "Ваш заказ успешно добавлен))"
                });
       }catch(e)
      {
         
       }
   },
   async  getGoogleApi(event)
    {
       
        this.position.lat =  event.latLng.lat()
        this.position.lng = event.latLng.lng()
        
        
    //   const res = await this.$axios.$post(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyDFeMlNRXL-3LlO5c3ncdpZXGpTr69fGm4`)
   const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.position.lat},${this.position.lng}&key=AIzaSyDFeMlNRXL-3LlO5c3ncdpZXGpTr69fGm4`)
    
    await res.json().then(r =>{
         this.name = r.results[0].formatted_address
         this.orderUserData.address = r.results[0].formatted_address
         this.name =  this.name.replace(',', '');
         this.name =  this.name.replace('.', '');
         this.name =  this.name.replace(',', '');
         this.name =  this.name.replace(' ', '+');
         this.name =  this.name.replace(' ', '+');
         this.name =  this.name.replace(' ', '+');
         
         
     })
     console.log('name',this.name);
     const resp =  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.name},+CA&key=AIzaSyDFeMlNRXL-3LlO5c3ncdpZXGpTr69fGm4`)
       this.name = ''
    resp.then(r=>{r.json().then(r=> console.log('addres',r))})
    

    
    },
    
  
}   
}
</script>
<style scoped>
.order{
    
   position: absolute;
   top: 0;
   right: 0;
   left: 0;
   width: 100%;
   min-width: 800px;
   height: 1800px;
   display: flex;
   flex-direction: column;
   justify-content: start;
   align-items: center;
   z-index: 99999999999999;
   background: white;
   color: white;
}
.map{
    display: flex;
    flex-direction: column;
}
.form{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 700px;
   
}
.form_item
{
    margin: 8px;
    display: flex;
    flex-direction: column;
   color: black;
    font-family: 'Roboto';
    font-size: 17px;
}
.form_item input{
    height: 55px;
    border-radius: 8px;
}
.questions
{
    display: flex;
}
.questions button
{
    width: 170px;
    margin: 10px;
    height: 50px;
    border-style: none;
    border-radius: 5px;
    font-size: 20px;
    font-family: 'Roboto';
}
#addres_cont
{
    width: 670px;
}
#addres{
    width: 658px;
}
.btn_q1
{
    background: rgb(231, 98, 50);
}
.btn_q2
{
    background: rgb(50, 174, 231);
}
.send
{
    width: 190px;
    height: 60px;
    margin: 10px;
    padding: 10px;
    background: rgb(9, 30, 221);
    font-size: 20px;
    border-radius: 8px;
    font-family: 'Roboto';
}
.text{
    color: black;
    width: 730px;
}
.text p{
    font-size: 20px;
    font-family: 'Roboto';
}
.pay
{
    color: rgb(38, 221, 108);
}
.close{
    position:absolute;
    right:  0;
    top: 0;
    margin: 45px;
    border: 1px solid silver;
    width: 45px;
    cursor: pointer;
    height: 35px;
    font-size: 35px;
    color: black;
    text-align: center;
    z-index: 88888888888888888888888;
    transition: 200ms;
}

</style>