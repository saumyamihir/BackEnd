import fs from 'fs'

let writestream = fs.createWriteStream("data.txt")
writestream.write("Hello world ")
writestream.write(" How are You")
writestream.end(()=>{
    console.log("This should be used only when there is some logic to perform after writing into the file")
})
writestream.on("finsih",()=>{
    console.log("finished writing into the file")
})