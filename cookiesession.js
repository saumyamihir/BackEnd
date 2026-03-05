import express from 'express'
let app = express()
import cookieSession from 'cookie-session'
app.use(cookieSession({
    keys: ['key1','key2'],
    maxAge : 60000
}))
app.get("/login",(req,res)=>{
    req.session.username = "Sami"
    res.redirect('/dashboard')
})
app.get("/dashboard",(req,res)=>{
    if(req.session.username){
        res.send(`Welcome, ${req.session.username} . This is your Dashboard` )
    }
    else{
        res.send("You are Required to login ")
    }
})
app.listen(3000)