const express=require("express")
const router=express.Router()//1st step
const customer=require("../models/User")
const bcrypt=require("bcrypt")
router.get("/getUser/:email",async (req,res)=>{
    console.log("get data")
    const ipdata=req.params
    const userProfile=await customer.findOne({email:ipdata.email})
    if(res){
        res.send({"hits":userProfile})
    }
    else{
        res.send({"msg":"no data found"})
    }
    
})
module.exports=router