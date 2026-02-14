import http from 'http'
//import fs from 'fs'

let server = http.createServer((req, res)=>{
    if(req.url=="/home")
    {
        res.writeHead(200, {'content-type':'text/html'})
        res.end("<h1> Home page </h1>")
    }
    else if(req.url =="/aboutus"){
        res.writeHead(200, {'content-type':'text/html'})
        res.end("<h1> About Page </h1>")
    }
    else{
        res.writeHead(404, {'content-type':'text/html'})
        res.end("<h2 style=color:red>Page not found </h2>")
    }
})
server.listen(3000)