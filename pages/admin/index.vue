<template>
<no-ssr>
 <div class="orders_page_body">
   
   <div class="chart">
   <bar-chart v-show="show"
        :data="barChartData"
        :options="barChartOptions"
        :width="1200"
        :heigth="650"
      />
      </div>
  
   <div class="order_list">
    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Status</th>
          <th>created at</th>
          <th></th>
        </tr>
      </thead>
      <tbody >
        <tr  v-for="order in orders.data" :key="order.id">
          <td class="table_item">{{order.name}}</td>
          <td class="table_item" >{{order.stataus == 0 ? 'Active' : 'Old'}}</td>
          <td class="table_item">{{new Date(order.created_at) }}</td>

          <td class="table_item">{{order.sum}}</td><td class="table_item"><span :class="{currency_danger:(order.sum > 700)}" class="currency">{{order.sum}}$</span> </td>
          <td class="table_item"><button class="change_button">Change</button></td>
        </tr>
      </tbody>
    </table>
   </div>
   <div class="paginate__box">
 <pagination
     class="paginate"
       :current="currentPage"
                  :total="totalPages"
                  @page-change="getResults"></pagination>
   </div>

 </div>
 </no-ssr>
</template>

<script>
import BarChart  from '@/components/chart.js'

export default {
middleware:['admin', 'auth'],
head()
{
  return{
title: "Orders",
   meta:[{
     hid:'prders',
     name:"desc",
     content:'desc'
   }]
  }
},

 components:{
    BarChart,

    },
   async asyncData({app,store})
  {
     try{
        const token = app.$cookiz.get('token')
      if (store.getters['orders/orders'].length === 0)
      {
         const page = 1
         await store.dispatch('orders/getOrders',{page: page, token: token})
     }
      }catch(e)
        {

      }

  },
   data:(()=>
   {
     return{
       show:false,
       currentPage: 1,
       totalPages: 10,

        orders:{},
          barChartData: {
        labels: [

        ],
        datasets: [
         
        ],
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Orders graphic',
          fontSize: 24,
          fontColor: '#6b7280',
        },
        tooltips: {
          backgroundColor: '#17BF62',
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      }
     }
   }
   ),

   mounted(){
     this.getorders()
     this.chartGraphic()
   },


    methods:
    {
     async  getResults(page = 1) {
       try{
          const {access_token} = JSON.parse(localStorage.getItem('AuthUser'))
          await this.$store.dispatch('orders/getOrders',{page:page, token:access_token})
          this.orders = await this.$store.getters['orders/orders']
          
          this.chartGraphic(this.orders)
    }catch(e)
       {

       }
      
      },


     async getorders(){
     //try{
        this.orders = await this.$store.getters['orders/orders']
        console.log(this.orders);
       this.chartGraphic(this.orders)
    //}catch(e)
    // {
       
    // }
    },
     
     async chartGraphic(orders)
          {
            this.show = false
              this.barChartData.labels = null
              this.barChartData.datasets = null 
           
             if(this.orders.data.length)
              
             this.barChartData.labels = orders.data.map(order =>
             
             { 
                let created_at  = new Date(order.created_at).toLocaleDateString();
               return created_at
             })
             this.barChartData.datasets = orders.data.map(order =>
             {
               return {
                 label: 'Order sum',
                 data: [order.sum],
                 backgroundColor: '#003f5c',
                  }
             })
               

             this.show = true
          }
          
    }
}
</script>

<style>

.orders_page_body
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.order_list
{
   width: 100%;
   padding: 5px;
   margin: 35px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

}
.table_item
{
   padding: 5px;
   font-family: 'Roboto', sans-serif;
   margin-top: 5px;
   border-bottom: 1px solid silver;
}
.currency
{
  display: inline-block;
  width: 50px;
  height: 25px;
  text-align: center;
  padding: 3px;
  border-radius: 8px;
    font-weight: 700;
  background-color: #246068;
  color: white;
  box-shadow: 2px 2px 2px 1px black;
}
@keyframes danger_currency_anim {   
  0% {     
   transform: rotate(-30deg);  
  }  
  25% {     
   transform: rotate(-20deg);  
  }   
  50% {     
   
  } 
  70% {
    transform: rotate(20deg);
   }
   100%{
     transform: rotate(30deg);
   }
}

@-moz-keyframes danger_currency_anim {   
  0% {     
   transform: rotate(-30deg);  
  }   
  50% {     
    transform: rotate(0deg); 
  } 
  100% {
    transform: rotate(30deg);
   }
}
@-webkit-keyframes danger_currency_anim {   
 0% {     
   transform: rotate(-30deg);  
  }   
  50% {     
    transform: rotate(0deg); 
  } 
  100% {
    transform: rotate(30deg);
   }
}
.currency_danger
{
     -webkit-animation: danger_currency_anim 500ms ; /* Safari 4+ */
     -moz-animation: danger_currency_anim 500ms ; /* Fx 5+ */
     -o-animation: danger_currency_anim 500ms ; /* Opera 12+ */
      animation: danger_currency_anim  500ms  ;
    animation-delay: 300ms;
     display: inline-block;
     width: 50px;
     height: 25px;
     text-align: center;
    padding: 3px;
     border-radius: 8px;
     background-color: red;
     font-weight: 700;
     color: rgb(19, 16, 16);
     box-shadow: 2px 2px 2px 1px black;
 
}

.change_button
{
  border-style: none;
  background-color: rgb(169, 151, 185);
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px black;
  transition-delay: 50ms;
}
.change_button:active
{
  box-shadow: 1px 1px 1px 1px black;
}
.paginate ul
{
  display: flex;
  margin: 15px;
}
.paginate li
{
  width: 50px;
  height: 60px;
  margin:10px;
  font-size: 25px;
  list-style: none;
  background: #246068;
  color: wheat; 
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px 1px black;
  border-radius: 6px;
}
.paginate a
{
  color: wheat; 
  text-align: center;
}
.chart
{
  width:100%;
  height: auto;
}
.paginate__box
{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 18px;
}
</style>
