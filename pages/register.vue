<template>
 <div>
    <div class="from_group">
       <div class="form_body">
     <h2>Registration</h2>  
     <div class="from_item">
         <label for="name">Name</label>
        <input type="text" v-model="user.name" id="name" placeholder="Enter you'r name">
        <span v-if="errors.name" class="error">{{errors.name}}</span>
     </div>
     <div class="from_item">
         <label for="email">Email</label>
        <input type="email" v-model="user.email" id="email" placeholder="Enter you'r name">
       <span v-if="errors.email" class="error">{{errors.email}}</span>
     </div>
     <div class="from_item">
         <label for="password" >Password</label>
        <input type="password" v-model="user.password" id="password">
     <span v-if="errors.password" class="error">{{errors.password}}</span>
     </div>
      <div class="from_item">
         <label for="confirm">Confirm</label>
        <input type="password" v-model="user.confirm" id="confirm">
   <span v-if="errors.confirm" class="error">{{errors.confirm}}</span>
     </div>
     <button @click.prevent="register" class="btn-reg">Register</button>
    </div>
    </div>
 </div>
</template>
<script>
export default
{
    layout : "login",
   
    data:(()=>{
    return{
       errors:{
           name:'',
          email:'',
          password:'',
          confirm:''
       },
          user:{
          name:'',
          email:'',
          password:'',
          confirm:''
             }
    }
    }),
    methods:{
      
       async register()
   {
        if(this.user.confirm && this.user.confirm.trim() !== this.user.password.trim() ) return this.errors.confirm = 'confirm error'
          
          if(this.user.password.trim() && this.user.password.length < 6 ) return this.errors.password = 'Minimal password length 6 chars'
        
            await this.$store.dispatch('register/register',this.user)
         
         const res =  await this.$store.getters['register/user']
            
         if(res.user.id)
         {
            this.$router.push('/login')
         }
     
   }, 
    }


}
</script>
<style>
.from_group
{
     display: flex;
     width: 100%;
     justify-content: center;
     align-items: center;
}
.form_body
{
   width: 400px;
  display:flex;
  flex-direction: column;
  margin: 50px;

}
.form_body h2
{
 text-align: center;

}
.from_item
{
    display:flex;
    flex-direction: column;
    margin: 5px;
    padding: 5px;
}
.from_item input
{
  
    border-style: none;
    border-bottom: 2px solid silver;
    transition: 300ms;

}
.from_item input:active, :focus
{
    position: relative;
    top: 5px;
    border-bottom: 2px solid green;
    outline: 0;
    outline-offset: 0;
    
}
.btn-reg
{
    margin-top: 8px;
    width: 80px;
    border-style: none;
    outline: 0;
    outline-offset: 0;
    background-color: rgb(202, 231, 206);
    box-shadow: 3px 3px 3px  rgb(100, 231, 206) ;
}
.btn-reg:active  {
   
   box-shadow: 1px 1px 1px  rgb(100, 231, 206) ;
}
.error{
   display: inline-block;
   font-size: 12px;
   border-bottom: 1px solid rgb(216, 155, 155);
   margin: 3px;
   padding: 2px;
   color: red;
}
</style>