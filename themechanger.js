import express from 'express';
let app = express()
import cookieParser from 'cookie-parser';
app.use(cookieParser())
app.use(express.static('public'))
app.get("/theme/:mode",(req,res)=>{
    let theme = req.params.mode == "dark" ? "dark" : "light"
    res.cookie("theme",theme)
    res.redirect("/")
})
app.get("/",(req,res)=>{
    let theme = req.cookies.theme || "light"
    res.send(`
        <html>
        <head>
        <link rel ='stylesheet' href='themestyle.css'>
        </head>
        <body class = ${theme}>
        <a href ='/theme/dark'><button>Dark</button></a>
        <a href ='/theme/light'><button>Light</button></a> 
        </body>
        </html>
        `)
})
app.listen(3000)