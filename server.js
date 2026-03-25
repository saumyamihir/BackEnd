import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const http = createServer(app)
const io = new Server(http)

// __dirname setup for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client.html"))
})

// Socket connection
io.on("connection", (socket) => {
    console.log("A client is connected")
    socket.on("msg", (data)=>{
        console.log(data)
    })
    socket.emit("msg1","Hey client ")
    socket.on("disconnect", () => {
        console.log("A client disconnected")
    })
})

// Server listen
http.listen(3000)