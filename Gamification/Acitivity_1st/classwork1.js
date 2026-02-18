import http from 'http'
import fs from 'fs'

let server = http.createServer((req, res) => {

    if (req.url === "/") {

        let log = `Request received on ${new Date().toString()}\n`
        fs.appendFile("log.txt", log, () => {})

        res.writeHead(200, { 'content-type': 'text/html' })
        res.end("<h1 style='color:green'> Home Page </h1>")

    } 
    else if (req.url === "/about") {

        res.writeHead(200, { 'content-type': 'text/html' })
        res.end("<h1 style='color:blue'> About Page </h1>")

    } 
    else if (req.url === "/contact") {

        res.writeHead(200, { 'content-type': 'text/html' })
        res.end("<h1 style='color:purple'> Contact Page </h1>")

    } 
    else {

        res.writeHead(404, { 'content-type': 'text/html' })
        res.end("<h2 style='color:red'> Page Not Found </h2>")

    }
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
})
