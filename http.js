import http from 'http'
let server = http.createServer((req,res)=>{
    res.write("Hello World ! This is My HOme page")
    res.end()
})
server.listen(8000, ()=>{
    console.log("server is listening on port no : 8000")
})