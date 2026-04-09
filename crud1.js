import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/ecom")

let productSchema = new mongoose.Schema({
    name: String,
    price: Number
})

let Product = mongoose.model('products', productSchema)

// INSERT
app.post('/add', async (req, res) => {
    let data = new Product(req.body)
    let result = await data.save()
    res.send(result)
})

// UPDATE
app.put('/update/:name', async (req, res) => {
    let result = await Product.findOneAndUpdate(
        { name: req.params.name },
        { $set: req.body },
        { new: true }
    )
    res.send(result)
})

// DELETE
app.delete('/delete/:name', async (req, res) => {
    let result = await Product.deleteOne({ name: req.params.name })
    res.send(result)
})

// GET ALL
app.get('/products', async (req, res) => {
    let result = await Product.find({})
    res.send(result)
})

app.listen(5000, () => {
    console.log("Server running on port 5000")
})