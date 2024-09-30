const express = require("express")
const app = express()

app.get("/", (req, res) => {
    let mensagem = {mensagem: "Hello, Word!"}
    res.json(mensagem)
})

app.listen(8080, () => {
    let data = new Date()
    console.log(`Servidor iniciado em: ${data}`)
})