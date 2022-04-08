const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://cram_js:test123@cluster0.zdsqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>console.log("connected to db successfully")).catch((err)=>console.log("connection failed due to ",err))
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const customerschema=mongoose.Schema(
{
    email:{
        type:String,
        unique:true
    },
    password:String,
    area:String,
    pincode:Number,
    country:String,
    address:String
}
)

//custom methods - schema.methods
customerschema.methods.signUp=async function(){
    const user=this
    console.log(user)
    if(user.address===""){
        console.log("condition")
        user.address=user.area+" "+user.pincode+" "+user.country
    }
    user.password=await bcrypt.hash(user.password,5)
    console.log(user)
    return user.save()
    
}
//statics method for login
customerschema.statics.signIn=async function(useremail,userpassword){
    const fetch=await customer.findOne({email:useremail})
    if(fetch){
        const decrypt=await bcrypt.compare(userpassword,fetch.password)
        if(decrypt){
            const token=jwt.sign(fetch.email,"jamesbond")
            console.log("token",token)
            return {"msg":"logged in successfully","status":true,"errcode":200,"token":token}
        }
        else{
          return {"msg":"check your passoword","status":false,"errcode":404}
        }
    }
    else{
        return {msg:"email does not exists","errcode":404,"status":false}
    }
}
const customer=mongoose.model("Customer",customerschema)

/*const book1=new Book({
    bookname:"Abc",
    price:1200,
    publisher:"xyz publisher"
})
book1.save().then(()=>console.log("data created")).catch((err)=>console.log("not created successfully"))*/

module.exports=customer



