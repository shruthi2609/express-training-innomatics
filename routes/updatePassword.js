const express=require("express")
const router=express.Router()//1st step
const customer=require("../models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { findOneAndUpdate } = require("../models/User")
const { decode } = require("jsonwebtoken")
router.post("/changepassword",async (req,res)=>{
    const ipdata=req.body
    //email password upassword
    const loginstatus=await customer.signIn(ipdata.email,ipdata.password)
    console.log(loginstatus.id)
    if(loginstatus.status){
        updatedpassword=await bcrypt.hash(ipdata.upassword,5)
        //customer.findByIdAndUpdate(loginstatus.id,{password:updatedpassword})
        const update=await customer.findOneAndUpdate({email:ipdata.email},{password:updatedpassword})
        res.status(200).send("updated successfully")
    }
    else{
        res.status(400).send({msg:"old password is not right","status":false})
    }
})
//update using auth header
router.post("/changepw",async (req,res)=>{
    try{
    const ipdata=req.body
    //email password upassword
    const reqtoken=req.headers["authorization"]
    const token=reqtoken.replace("Bearer ","")
    const decodedtoken=jwt.verify(token,process.env.JWT_KEY)
     updatedpassword=await bcrypt.hash(ipdata.upassword,5)
        //customer.findByIdAndUpdate(loginstatus.id,{password:updatedpassword})
        const update=await customer.findOneAndUpdate({email:decodedtoken},{password:updatedpassword})
        res.status(200).send("updated successfully")
    }
    catch(err){
        res.status(400).send({"msg":"bad token"})
    }
    
    
})
module.exports=router
