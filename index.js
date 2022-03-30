const express=require("express")
const app=express()
//add the middleware to our express app
const bodyparser=require("body-parser")
app.use(bodyparser.json())
const path=require("path")
/* sending different res types*  */
app.get("/home",(req,res)=>{
console.log(req)
res.send("home page")
})
app.get("/products",(req,res)=>{
    console.log(req)
   const data=[
        {
            prname:"iphone",
            price:120000
        },
        {
            prname:"samsung",
            price:80000 
        }
    ]
    res.status(200).send(JSON.stringify(data))
})
app.get("/signup",(req,res)=>{
   // res.send("<h1>Signup Form</h1>")
   res.sendFile(path.join(__dirname+"/static/signupform.html"))
})
//handle data with req 

app.get("/search",(req,res)=>{
    console.log(req)
    const querydata=req.query
    const data=[
        {
            uname:"john",
            location:"uk"
        },
        {
            uname:"peter",
            location:"india"
        },
        {
            uname:"suresh",
            location:"india"
        }
    ]
    const userdata=data.filter((item)=>item.location===querydata.country&&item.uname===querydata.uname)
    if(userdata.length!==0){
        res.send(JSON.stringify(userdata))
    }
    else{
        res.send({"status":"false","msg":"user not found"})
    }  
})
app.get("/finduser/uname",(req,res)=>{
    res.send("test success")
})

app.get("/finduser/:uname/:location",(req,res)=>{
    const paramsdata=req.params

    const data=[
        {
            uname:"john",
            location:"uk"
        },
        {
            uname:"peter",
            location:"india"
        },
        {
            uname:"suresh",
            location:"india"
        }
    ]
    const userdata=data.filter((item)=>item.location===paramsdata.location&&item.uname===paramsdata.uname)
    if(userdata.length!==0){
        res.send(JSON.stringify(userdata))
    }
    else{
        res.send({"status":"false","msg":"user not found"})
    }
})
//post request
app.post("/login",(req,res)=>{
    console.log(req)
    const data=req.body
    if(data.username==="xyz@gmail.com"&&data.password==="admin@123"){
        res.status(200).send({
            "msg":"success",
            "status":"true"
        })
    }
    else{
        res.status(200).send({
            "msg":"invalid credentials",
            "status":"false"
        })
    }
})

// 404 - FNF
app.all("*",(req,res)=>{
    res.status(404).send("<h1>404 file not found</h1>")
})
app.listen(3001,()=>console.log("server started at : 3001 "))
