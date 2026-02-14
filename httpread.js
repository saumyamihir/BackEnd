import http from 'http'
import fs from'fs'

let server = http.createServer((req , res)=>{
    if(req.url="/read"){
        fs.readFile("data.txt","utf-8",(err,data)=>{
            if(err){
                res.writeHead(404,{'content-type':'text/html'})
                res.end("<p style=color:red>Contents you are looking for could not be found</p>")
            }
            else{
                res.writeHead(404,{'content-type':'text/html'})
                res.end(`<pre style=color:blue>${data}</pre>`)
            }
        })
    }
})
server.listen(2000)