const express=require("express")
const router=express.Router()//1st step
const customer=require("../models/User")
const bcrypt=require("bcrypt")
router.post("/signin",async (req,res)=>{
    const ipdata=req.body
    const fetch=await customer.findOne({email:ipdata.email})
    if(fetch){
        const decrypt=await bcrypt.compare(ipdata.password,fetch.password)
        if(decrypt){
            res.status(200).send({"msg":"logged in successfully","status":true})
        }
        else{
            res.status(400).send({"msg":"check your passoword","status":false})
        }
    }
    else{
        res.status(404).send({msg:"email does not exists"})
    }
})
module.exports=router