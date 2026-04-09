import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/ecom");

let productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

let Product = mongoose.model('products', productSchema);

/// CREATE (Add product)
app.post("/add-product", async (req, res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
});

/// READ (Get all products)
app.get("/products", async (req, res) => {
    let data = await Product.find({});
    res.send(data);
});

/// UPDATE
app.put("/update-product/:name", async (req, res) => {
    let result = await Product.findOneAndUpdate(
        { name: req.params.name },
        { $set: req.body },
        { new: true }
    );
    res.send(result);
});

/// DELETE
app.delete("/delete-product/:name", async (req, res) => {
    let result = await Product.deleteOne({ name: req.params.name });
    res.send(result);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});