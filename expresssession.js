import express from 'express'
let app = express()
import session from 'express-session'
app.use(session({
    secret :"secret",
    resave:false,
    saveUninitialized:false
}))
app.get("/login",(req,res)=>{
    req.session.user == {username:"Sami", email:"sami@gmail.com"}
    res.redirect("/dashboard")
})
app.get("/dashboard",(req,res)=>{
    if(req.session.user){
        res.send(`Welcome ${req.session.use.username}`)
    }
    else{
        res.send("Please login first")
    }
})
app.get("/logout",(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
        res.send("Error in logging out")
    }
    else{
        res.send("/login")
    }
    })
   
})
app.listen(3000)