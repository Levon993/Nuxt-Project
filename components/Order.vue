<template>
    <div class="order">
        <div class="map">
<GmapMap 
:center="{lat:55.91675056131745, lng:37.41215038395942}"
:zoom="7"
style="width: 700px; height: 500px;"
@click="mark"
>
<GmapMarker
v-if="position"
:position="position"
:clickable='true'
:draggable="true"

/>
</GmapMap>
<div class="buttons">
<button @click="position ={lat:55.91675056131745, lng:37.41215038395942} ">Магазин</button>
</div>
</div>
<div class="questions">
    <button class="btn_q1" @click="disabled = false">Доставка</button>
    <button class="btn_q2">Самоывоз</button>
</div>
<div class="form">
<div class="form_item">
    <label for="addres">Адрес Доставки</label>
<input id='addres' :disabled="disabled" type="text">
</div>
<div class="form_item">
<label for="home">Дом</label>
<input id="home" :disabled="disabled" type="text">
</div>
<div class="form_item">
<label for="corpus">Корпус</label>
<input id="corpus" :disabled="disabled" type="text">
</div>
<div class="form_item">
<label for="stroy">Строение</label>
<input id="stroy" :disabled="disabled" type="text">
</div>
<div class="form_item">
<label for="pod">Подъезд</label>
<input id="pod" :disabled="disabled" type="text">
</div>
<div class="form_item">
<label for="Kvar">Квартира</label>
<input id="Kvar" :disabled="disabled" type="text">
</div>
</div>
    </div>
</template>
<script>
export default {
data:(()=>{
return {
    disabled:true,
    marker:[],
    position:{lat:55.91675056131745, lng:37.41215038395942},
adreses:[]
}
}) ,
mounted(){
this.getGoogleApi()
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
    },
   async  getGoogleApi()
    {
        const ket = 'AIzaSyDFeMlNRXL-3LlO5c3ncdpZXGpTr69fGm4'
    //   const res = await this.$axios.$post(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyDFeMlNRXL-3LlO5c3ncdpZXGpTr69fGm4`)
   const res = await fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=40.177628,44.512546&key=AIzaSyDFeMlNRXL-3LlO5c3ncdpZXGpTr69fGm4')
    
     res.json().then(r =>{
         console.log(r.results);
         let addres = r.results.map(m =>
         {
         return{
             name:m.address_components[0].long_name,
             location:m.geometry.location 
         }
       })
     //console.log(addres);
     })
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
.btn_q1
{
    background: rgb(231, 98, 50);
}
.btn_q2
{
    background: rgb(50, 174, 231);
}
</style>