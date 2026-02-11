import fs from 'fs'
import { normalize } from 'path'


let content = "This is the student data"
fs.writeFile("Storage.txt",content ,{flag:'wx'}, (err)=>{
    if(err)
    {
        console.log("Error in storing the data because file already exists")
    }
    else
    {
        console.log("Data is stored")
    }

})

/*
let studentdata = {
    name: "Sami",
    cgoa :8,
    email: "abc@gmail.com"
}
fs.writeFile("Storage.txt",JSON.stringify(studentdata,null,5), (err)=>{
    if(err)
    {
        console.log("Error in storing student data")
    }
    else
    {
        console.log("Student data is stored")
    }

    fs.readFile("Storage.txt","utf-8",(err,data)=>{
        if(err)
        {
            console.log("Error in fetching the data")
        }
        else
        {
            console.log("Data fetched : ",data)
        }
    })
})
    */
