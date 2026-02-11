/*
import http from 'http'
let server = http.createServer((req,res)=>{
    res.writeHead(200, {"content-type":"text/html"})
    res.write("<h1 style= color:red>THis is my home page </h1>")
    res.write("<p> This is second line </p>")
    res.end()
})
server.listen(8000, ()=>{
    console.log("server is listening on port no : 8000")
})
*/

import http from 'http'
import fs from 'fs'

let server = http.createServer((req, res) => {
    fs.readFile("home.txt", "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500, {"Content-Type": "text/plain"})
            res.end("Error reading file")
        } else {
            res.writeHead(200, {"Content-Type": "text/html"})
            res.write(`<h1 style="color:blue;">${data}</h1>`)
            res.end()
        }
    })
})

server.listen(8000, () => {
    console.log("Server is listening on port no: 8000")
})
