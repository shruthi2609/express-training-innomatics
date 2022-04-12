const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
//add the middleware to our express app
const bodyparser=require("body-parser")
const signup=require("./routes/Registration")//route
const signin=require("./routes/SignIn")//statics
const create=require("./routes/SignUp")//custom
const login=require("./routes/Login")//route
const updatepassword=require("./routes/updatePassword")
const deleteUser=require("./routes/deleteUser")
const getUser=require("./routes/showUser")
const dotenv=require("dotenv")
dotenv.config()
app.use(bodyparser.json())
app.use("/",signup)
app.use("/",signin)
app.use("/",create)
app.use("/",login)
app.use("/",updatepassword)
app.use("/",deleteUser)
app.use("/",getUser)
app.listen(3001,()=>console.log("server started"))

