<template>
 <div class="orders_page_body">
   <div class="chart">
   <bar-chart
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

          <td class="table_item">{{order.sum}}</td>
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
</template>

<script>
import BarChart  from '@/components/chart.js'

export default {
middleware:['auth'],
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
   async fetch({store})
   {

      if (store.getters['orders/orders'].length === 0)
      {

        const page = 1


         await store.dispatch('orders/getOrders',page)



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
          {
            label: 'Visits',
            data: [10, 15, 20, 30, 40, 50, 60, 70, 34, 45, 11, 78, 45],
            backgroundColor: '#003f5c',
          },
          {
            label: 'Pages Views',
            data: [30, 24, 57, 23, 68, 72, 25, 64, 133, 143, 165, 33, 56],
            backgroundColor: '#2f4b7c',
          },
          {
            label: 'Users',
            data: [45, 65, 30, 53, 34, 35, 26, 37, 34, 45, 67, 87, 98],
            backgroundColor: '#665191',
          },
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
     const {access_token} = JSON.parse(localStorage.getItem('AuthUser'))
     this.$axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
      await this.$store.dispatch('orders/getOrders',page)
       this.orders = await this.$store.getters['orders/orders']
      },


     async getorders(){
        this.orders = await this.$store.getters['orders/orders']
     },

     async chartGraphic()
          {

             if(this.orders.length)
             this.barChartData.labels = await this.orders.data.map(order => order.created_at)
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
