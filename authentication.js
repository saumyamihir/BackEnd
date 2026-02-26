export function authentication = (req,res,next)=>{
    let {username , password}= req.body
    if(username == 'admin' && password == 'admin'){
        next()
    }
    else{
        res.send("Invalid Credential ")
    }
}