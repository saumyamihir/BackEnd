import express from 'express'
let app = express()
let logger = (req,res,next)=>{
    console.log("Before Logging")
    console.log("After Logging")
    next()
}
app.use(logger)
app.get("/home",(req,res)=>{
    console.log("This is home page")
    res.send()
})
app.get("/product",(req,res)=>{
    console.log("This is product page")
    res.send()
})
app.listen(3000)