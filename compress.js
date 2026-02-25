
import zlib from 'zlib'
let data = "Meet me at the Hotel"

zlib.gzip(data,(err,buffer)=>{
    if(err){
        console.log("Error in Compression")
    }
    else{
        console.log("The compress data is : ", buffer.toString());
    }

zlib.gunzip(buffer,(err,buffer)=>{
    if(err){
        console.log("Error in decompression")
    }
    else{
        console.log("The decompress data is : ", buffer.toString())
    }
})
})