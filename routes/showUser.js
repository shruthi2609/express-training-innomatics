const express=require("express")
const router=express.Router()//1st step
const customer=require("../models/User")
const bcrypt=require("bcrypt")
router.post("/getUser/:email",async (req,res)=>{
    const ipdata=req.params
    const loginstatus=await customer.signIn(ipdata.email,ipdata.password)
   if(loginstatus.errcode===200){
       res.status(loginstatus.errcode).send(loginstatus)
   }
   else{
       res.send(loginstatus)
   }
   
    
})
module.exports=router