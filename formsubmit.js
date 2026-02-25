import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "form.html"))
})

app.post('/submit', (req, res) => {
    const { name, email } = req.body
    const newUser = { name, email }

    let users = []

    if (fs.existsSync("newdata.json")) {
        const data = fs.readFileSync("newdata.json", "utf-8")
        if (data) users = JSON.parse(data)
    }

    users.push(newUser)

    fs.writeFileSync("newdata.json", JSON.stringify(users, null, 2))

    res.send(`<h2>Details submitted as: ${name} and ${email}</h2>`)
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})