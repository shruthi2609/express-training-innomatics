const express=require("express")
const router=express.Router()//1st step
const customer=require("../models/User")
const bcrypt=require("bcrypt")
router.post("/signin",async (req,res)=>{
    const ipdata=req.body
    const loginstatus=await customer.signIn(ipdata.email,ipdata.password)
   console.log(loginstatus)
   if(loginstatus){
       res.status(loginstatus.errcode).send(loginstatus)
   }
   else{
       res.send({msg:"error in signin"})
   }
   
    
})
module.exports=router