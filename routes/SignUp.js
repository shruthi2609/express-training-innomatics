const express=require("express")
const router=express.Router()//1st step
const customer=require("../models/User")
const bcrypt=require("bcrypt")
router.post("/signup",async (req,res)=>{//create on the router obj
    const ipdata=req.body
    let hashedpassword=await bcrypt.hash(ipdata.password,5)
    console.log(typeof hashedpassword)
    const user=new customer({
    email:ipdata.email,
    password:hashedpassword,
    area:ipdata.area,
    pincode:ipdata.pincode,
    country:ipdata.country,
    address:ipdata.address
    })
    //console.log(ipdata)
    user.save().then(()=>  res.status(200).send("created successfully")).catch((err)=>res.status(400).send("error in save",err))
})
module.exports=router//export router