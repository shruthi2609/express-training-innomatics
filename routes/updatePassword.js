const express=require("express")
const router=express.Router()//1st step
const customer=require("../models/User")
const bcrypt=require("bcrypt")
const { findOneAndUpdate } = require("../models/User")
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
module.exports=router
