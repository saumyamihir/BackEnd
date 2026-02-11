import {EventEmitter} from 'events'
let products = [
    {id:1, name:"laptop", price:78000, stock:10},
    {id:2, name:"Smartphone" , price:20000, stock:8},
    {id:3, name:"headphone" , price:2500, stock:4}
]
function placeorder(user, productid, quantity, price){
    const order = new EventEmitter()
    const product = products.find((p)=>{
        return p.id === productid
    })
    if(!products || product.stock<quantity){
        console.log("Order failed")
        return
    }
    order.on("neworder",(user)=>{
        console.log(`Email confirmation for  ${user}`)
    })
    order.on("neworder",(user,product)=>{
        console.log(`Invoice Generated for  ${user} with product ${product.name}, price: ${product.price}`)
    })
    order.on("neworder",(user,product,quantity)=>{
        product.stock = product.stock - quantity
        console.log(`stock upfated for  ${product.name} ,remaining stock ${product.stock}`)
    })
    order.emit("neworder",user,product,quantity)
}
placeorder("Sami",2,5)
placeorder("Mihir",1,3)