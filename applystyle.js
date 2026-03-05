import express from 'express'
let app = express()
app.use(express.static('public'))
app.get("/",(req,res)=>{
    res.send(`
        <html>
        <head>
        <link rel='stylesheet' href='style.css'>
        </head>
        <body>
        <h1>This is some heading.</h1>
        </body>
        </html>
        `)
})
app.listen(3000)