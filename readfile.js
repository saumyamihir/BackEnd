import fs from 'fs'
fs.readFile("sample.txt","utf-8", (err, data)=>{
    if(err){
        console.log("Error in reading the file:")
    }
    else{
        console.log("contents of the file are :",data)
    }
})