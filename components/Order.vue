<template>
    <div class="order">
<div>sdsdsdsd</div>
    </div>
</template>
<script>
export default {
data:(()=>{
return {

}
}) ,
mounted(){
this.getGoogleApi()
},
methods:{
   async  getGoogleApi()
    {
        const ket = 'AIzaSyDFeMlNRXL-3LlO5c3ncdpZXGpTr69fGm4'
    //   const res = await this.$axios.$post(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyDFeMlNRXL-3LlO5c3ncdpZXGpTr69fGm4`)
   const res = await fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyDFeMlNRXL-3LlO5c3ncdpZXGpTr69fGm4')
 
 console.log(res);
    }
}   
}
</script>
<style scoped>
.order{
   position: absolute;
   width: 100%;
   height: 100%;
   background: blue;
   z-index: 33333333333333333;
}
</style>