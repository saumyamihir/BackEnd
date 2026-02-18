import fs from 'fs'

let readstream = fs.createReadStream("home.txt", 
    {encoding:"utf-8", start:0,end :5})
    readstream.on("data",(chunk)=>{
        console.log(chunk)
})
readstream.on("end", ()=>{
    console.log("This should be used only when there is some logic to perform after reading the file.")
})
readstream.on("error",(err)=>{
    console.log("error in reading the file")
})
