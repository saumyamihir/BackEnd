import express from "express";
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/ecom")
let app=express();
app.use(express.json())
let productSchema=mongoose.Schema({
    name:String,
    price:Number
});
const Product=mongoose.model("products",productSchema);
app.get("/products",async(req,res)=>{
    const page=parseInt(req.query.page)||1;
    const limit=3;
    const data=await Product.find().skip((page -1)* limit).limit(limit);
    res.send(data);
});
app.listen(3000)

// now how to run, Paste http://localhost:3000/products?page=1 or http://localhost:3000/products?page=2
