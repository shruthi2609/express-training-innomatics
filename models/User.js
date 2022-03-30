const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://cram_js:test123@cluster0.zdsqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>console.log("connected to db successfully")).catch((err)=>console.log("connection failed due to ",err))
const Book=mongoose.model("BookStore",{
    bookname:String,
    price:Number,
    publisher:String,
})
module.exports=Book
/*const book1=new Book({
    bookname:"Abc",
    price:1200,
    publisher:"xyz publisher"
})
book1.save().then(()=>console.log("data created")).catch((err)=>console.log("not created successfully"))*/





