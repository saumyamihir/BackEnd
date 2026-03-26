import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import path from 'path'
import { fileURLToPath } from 'url'
const app = express()
const http = createServer(app)
const io = new Server(http)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "broadcast.html"))
})
let clients = 0
io.on("connection", (socket)=>{
    clients++
    io.emit("broadcastmsg",`${clients} clients connected`)
    socket.on("disconnected",()=>{
        clients--
        io.emit("broadcastmsg", `${clients} clients connected `)
    })
})
http.listen(3000)

