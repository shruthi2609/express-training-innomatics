const express=require("express")
const app=express()
const passport=require("passport")
const GoogleStrategy=require("passport-google-oauth2").Strategy
const GoogleUser=require("./models/GoogleUser")
passport.serializeUser((user,done)=>{
return done(null,user._id)
})
passport.deserializeUser((id,done)=>{
GoogleUser.findById(id,(err,doc)=>{
    return done(null,doc)
})
})
passport.use(new GoogleStrategy({
    clientID:"",
    clientSecret:"",
    callbackURL: "/auth/google/callback",
},function(request, accessToken, refreshToken, profile, done){
    console.log(profile)
GoogleUser.findOne({googleId:profile.id},async (err,doc)=>{
    if(err){
        return done(err,null)
    }
    if(!doc){
        const newUser=new GoogleUser({
            googleId:profile.id,
            username:profile.name.giveName
        })
        await newUser.save()
        return done(null,newUser)
    }
    done(null,doc)
})
}))
app.get("/auth/google",passport.authenticate("google",{scope:["profile"]}))
app.get("/auth/google/callback",
passport.authenticate("google",{failureRedirect:"http://localhost:3000/login",session:true}),
function (req,res){
    res.redirect("http://localhost:3000/dashboard")
})
app.listen(3002,()=>console.log("server started"))
