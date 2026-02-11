import {EventEmitter} from 'events'
let calpercentage = new EventEmitter()
calpercentage.on("percent", (studname, sub1 , sub2, sub3, sub4 , sub5)=>{
    let total = sub1+sub2+sub3+sub4+sub5
    let p = (total/500)*100
    console.log(`The percetange of ${studname} is ${p}`)
})
calpercentage.emit("percent","Sami",89,45,89,31,90)
calpercentage.emit("percent","Saumya",51,95,45,92,56)
calpercentage.emit("percent","Mihir",93,68,82,84,9)