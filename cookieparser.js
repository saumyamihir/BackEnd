import express from 'express'
let app = express()
import cookieParser from 'cookie-parser'
app.use(cookieParser())
app.get("/setcookie",(req,res)=>{
    res.cookie("course","Node.js",{maxAge:15000})
    res.send("The cookie is set")
})
app.get("/fetchcookie",(req,res)=>{
    res.send(req.cookies)
    console.log(req.cookies.course)
})
app.listen(3000)