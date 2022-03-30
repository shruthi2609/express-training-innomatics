const express=require("express")
const app=express()
//add the middleware to our express app
const bodyparser=require("body-parser")
const Book=require("./models/User")
app.use(bodyparser.json())
app.post("/addbook",(req,res)=>{
    const ipdata=req.body
    const new_book=new Book({
    bookname:ipdata.bookname,
    price:ipdata.price,
    publisher:ipdata.publisher,
    })
    //console.log(ipdata)
    new_book.save().then(()=>  res.send("created successfully")).catch((err)=>res.send("error in save"))
})
app.listen(3001,()=>console.log("server started"))

