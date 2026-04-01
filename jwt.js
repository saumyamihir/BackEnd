import express from 'express'
let app = express()
import jwt from 'jsonwebtoken'
app.use(express.json())
let SECRET ="key123"
app.post("/login",(req,res)=>{
    let{username,password} = req.body
    if(username =="sami" && password =="123"){
        let token = jwt.sign({user:username},SECRET,{expiresIn:"2m"})
        return res.send(token)
    }
    res.send("Invalid credentials")
})
app.get("/landingpage",(req,res)=>{
    let authHeader = req.headers.authorization
    if(!authHeader){
        return res.send("No Token Provided")
    }
    let token = authHeader.split(" ")[1]
    jwt.verify(token,SECRET,(err)=>{
        if(err){
            return res.send("Invalid Token")
        }
        res.send("Dear Student , Welcome to the Landing Page")
    })
})
app.listen(3000)