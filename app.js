const express=require("express")
const app=express()
//add the middleware to our express app
const bodyparser=require("body-parser")
const signup=require("./routes/SignUp")
const signin=require("./routes/SignIn")
app.use(bodyparser.json())
app.use("/",signup)
app.use("/",signin)
app.listen(3001,()=>console.log("server started"))

