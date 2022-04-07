const express=require("express")
const router=express.Router()//1st step
const customer=require("../models/User")
const bcrypt=require("bcrypt")
router.post("/delete",async (req,res)=>{
    const ipdata=req.body
    const loginstatus=await customer.signIn(ipdata.email,ipdata.password)
    console.log(loginstatus)
    if(loginstatus.status){
        const deleted=await customer.findOneAndDelete({email:ipdata.email})
        console.log(deleted)
        res.send("dummy")
    }
    else{
        res.send("err")
    }
})
router.post("/deleteUser",async (req,res)=>{
    const ipdata=req.body
    const loginstatus=await customer.signIn(ipdata.email,ipdata.password)
    console.log(loginstatus)
    if(loginstatus.status){
        const deleted=await customer.findOneAndUpdate({email:ipdata.email}, { $unset: { country: 1 } })
        console.log(deleted)
        res.send("dummy")
    }
    else{
        res.send("err")
    }
})
module.exports=router