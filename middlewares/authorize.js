const jwt=require("jsonwebtoken")
const authorize=(req,res,next)=>{
    try{
    const ipdata=req.body
    //email password upassword
    const reqtoken=req.headers["authorization"]
    const token=reqtoken.replace("Bearer ","")
    const decodedtoken=jwt.verify(token,process.env.JWT_KEY)
    req.decodedtoken=decodedtoken
    next()
}
catch(err){
    res.send({"msg":"bad authorization"})
}
}
module.exports=authorize