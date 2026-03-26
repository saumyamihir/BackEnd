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
    res.sendFile(path.join(__dirname, "broadcast1.html"))
})
let clients = 0
io.on("connection", (socket)=>{
    clients++
    socket.emit("broadcastmsg","Welcome, New Client")
    socket.broadcast.emit("broadcastmsg",`${clients} clients connected`)
    socket.on("disconnected",()=>{
        clients--
        socket.broadcast.emit("broadcastmsg", `${clients} clients connected `)
    })
})
http.listen(3000)

