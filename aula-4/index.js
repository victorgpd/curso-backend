import cors from "cors"
import express from "express"
import produtos from "./dados.js"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/produtos", (req, res) => {
    res.json(produtos)
})

app.listen(8080, () => {
    console.log("Servidor iniciado.")
})