const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://cram_js:test123@cluster0.zdsqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>console.log("connected to db successfully")).catch((err)=>console.log("connection failed due to ",err))
const GoogleUser=mongoose.model("GoogleUser",{
    googleId:String,
    username:String
})
module.exports=GoogleUser
