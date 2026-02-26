import express from 'express'
let app = express()
import { authentication } from './authentication.js'
app.use(express.urlencoded({extended:false}))
app.get("/",(req, res)=>{
    res.send(`
        <form action ='/submit' method ='POST'>
        Username:<input type ='text' name ='username'> <br>
        Password:<input type ='password' name ='password'> <br>
        <input type ='submit' value ='Submit' > <br>
        </form>
        `)
})
app.use(authentication)
app.post("/submit",(req,res)=>{
    res.send("Welcome Admin! ")
})
app.listen(3000)