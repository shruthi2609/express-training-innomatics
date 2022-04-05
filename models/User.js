const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://cram_js:test123@cluster0.zdsqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>console.log("connected to db successfully")).catch((err)=>console.log("connection failed due to ",err))
const customer=mongoose.model("Customer",{
    email:{
        type:String,
        unique:true
    },
    password:String,
    area:String,
    pincode:Number,
    country:String,
    address:String

})

/*const book1=new Book({
    bookname:"Abc",
    price:1200,
    publisher:"xyz publisher"
})
book1.save().then(()=>console.log("data created")).catch((err)=>console.log("not created successfully"))*/

module.exports=customer



