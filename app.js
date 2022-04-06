const express=require("express")
const app=express()
//add the middleware to our express app
const bodyparser=require("body-parser")
const signup=require("./routes/Registration")//route
const signin=require("./routes/SignIn")//statics
const create=require("./routes/SignUp")//custom
const login=require("./routes/Login")//route
app.use(bodyparser.json())
app.use("/",signup)
app.use("/",signin)
app.use("/",create)
app.use("/",login)
app.listen(3001,()=>console.log("server started"))

