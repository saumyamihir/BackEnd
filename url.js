import {URl} from 'url'
const url = new URL("http://localhost:3000/products?id=1&name=laptop")
console.log(url)
console.log(url.pathname)